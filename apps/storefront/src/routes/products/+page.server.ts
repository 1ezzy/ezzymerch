import type { PageServerLoad } from './$types';
import { MEDUSA_PAK } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const response = await fetch(`http://localhost:9000/store/products`, {
			credentials: 'include',
			headers: {
				'x-publishable-api-key': MEDUSA_PAK
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return { products: data.products };
	} catch (err) {
		console.error('Failed to fetch products:', err);

		throw error(500, {
			message: 'Failed to load products. Please try again later.'
		});
	}
};
