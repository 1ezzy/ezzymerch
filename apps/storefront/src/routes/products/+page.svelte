<script lang="ts">
	import { Button } from 'svelte-ux';
	import { Tilt } from 'svelte-ux';

	let cartData: boolean = false;
	const productCount: number = 3;

	import product1 from '$lib/assets/images/products/product1.png';
	import product2 from '$lib/assets/images/products/product2.png';
	import product3 from '$lib/assets/images/products/product3.png';
</script>

<svelte:head>
	<title>Products | ezzymerch</title>
</svelte:head>

<section class="container flex-1 flex flex-col items-center gap-8">
	<div class="p-4 mt-10 w-full flex-1 flex flex-col">
		<h1 class="flex items-center py-8 text-2xl">Products ({productCount} items)</h1>
		<div class="p-4 flex-1 flex gap-16 justify-center">
			<div class="item-card bg-accent-500">
				<Tilt class="hover:scale-110 transition duration-500 basis-1/3">
					<img
						class="item-image transition ease-out"
						src={product1}
						alt="ezzymerch x getfent Signature T-Shirt"
					/>
				</Tilt>
				<h1 class="item-header">ezzymerch x getfent<br />Signature T-Shirt</h1>
				<div class="item-buttons">
					<Button class="bg-gray-700 text-white">More Info</Button>
					<Button class="bg-gray-700 text-white">Add to Cart</Button>
				</div>
			</div>
			<div class="item-card bg-secondary-500">
				<Tilt class="hover:scale-105 transition duration-500 basis-1/3">
					<img
						class="item-image transition ease-out"
						src={product2}
						alt="ezzymerch x getfent Alt T-Shirt"
					/>
				</Tilt>
				<h1 class="item-header">ezzymerch x getfent<br />Alt T-Shirt</h1>
				<div class="item-buttons">
					<Button class="bg-gray-700 text-white">More Info</Button>
					<Button class="bg-gray-700 text-white">Add to Cart</Button>
				</div>
			</div>
			<div class="item-card bg-success-500">
				<Tilt class="hover:scale-110 transition duration-500 basis-1/3">
					<img
						class="item-image transition ease-out"
						src={product3}
						alt="ezzymerch x jaimewallowa Signature Hat"
					/>
				</Tilt>
				<h1 class="item-header">ezzymerch x jaimewallowa<br />Signature Hat</h1>
				<div class="item-buttons">
					<Button class="bg-gray-700 text-white">More Info</Button>
					<Button class="bg-gray-700 text-white">Add to Cart</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.item-card {
		@apply p-4;
		@apply h-full;
		@apply flex;
		@apply flex-col;
		@apply basis-2/3;
		@apply items-center;
		@apply rounded-lg;
		@apply text-gray-800;
	}

	.item-image {
		@apply p-4;
		@apply aspect-square;
		@apply w-48;
	}

	.item-header {
		@apply p-4;
		@apply my-auto;
		@apply text-xl;
		@apply text-center;
	}

	.item-buttons {
		@apply flex;
		@apply gap-4;
	}
</style>
