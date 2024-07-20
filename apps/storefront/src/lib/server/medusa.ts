import Medusa from '@medusajs/js-sdk';
import { MEDUSA_BACKEND_URL } from '$env/static/private';

export const MedusaClient = new Medusa({
	baseUrl: MEDUSA_BACKEND_URL,
	debug: process.env.NODE_ENV === 'development'
});
