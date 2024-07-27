import type { PageServerLoad } from './$types';
import { MEDUSA_PAK } from '$env/static/private';

export const load: PageServerLoad = ({ params }) => {
	const data = fetch(`http://localhost:9000/store/products`, {
		credentials: 'include',
		headers: {
			'x-publishable-api-key': MEDUSA_PAK
		}
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data.products);
			return data;
		});

	return data;
};
