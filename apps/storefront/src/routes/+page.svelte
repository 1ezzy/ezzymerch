<script lang="ts">
	import { onMount } from 'svelte';
	import { Button, Tilt } from 'svelte-ux';

	import product1 from '$lib/assets/images/products/product1.png';
	import product2 from '$lib/assets/images/products/product2.png';
	import product3 from '$lib/assets/images/products/product3.png';

	import jaime from '$lib/assets/images/artists/jaime.jpg';
	import fent from '$lib/assets/images/artists/fent.jpg';

	// 	export let data
	//    const products = data.products

	//    onMount(() => {
	// 	console.log(products)
	//    })
</script>

<svelte:head>
	<title>ezzymerch</title>
</svelte:head>

<section class="container p-8 w-full flex-1 flex flex-col items-center justify-center gap-40">
	<div class="h-[82vh] w-full bg-surface-200 rounded-lg mb-20 flex items-center justify-center">
		<span>Image and logo</span>
	</div>
	<div class="w-full flex flex-col">
		<h2 class="text-xl text-gray-300 mb-2">now presenting...</h2>
		<div class="flex md:flex-row flex-col md:gap-0 gap-2 items-center justify-between mb-8">
			<h1 class="text-3xl mb-2">ezzymerch drop 1 (summer '24)</h1>
			<h2 class="text-xl text-primary-500">art from cincinnati local artists</h2>
		</div>
		<div class="flex flex-col gap-8">
			<h2 class="text-3xl text-center text-secondary-500">featured artists</h2>
			<div class="w-full p-4 flex md:flex-row flex-col justify-center gap-32">
				<div class="bg-surface-500 flex flex-col items-center justify-center gap-8">
					<img
						class="w-[256px] rounded-lg"
						src={fent}
						alt="ezzymerch x getfent Signature T-Shirt"
					/>
					<h3 class="text-3xl">getfent</h3>
				</div>
				<div class="bg-surface-500 flex flex-col items-center justify-center gap-8">
					<img
						class="w-[256px] rounded-lg"
						src={jaime}
						alt="ezzymerch x getfent Signature T-Shirt"
					/>
					<h3 class="text-3xl">jaimewallowa</h3>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full flex flex-col">
		<h1 class="text-3xl mb-16">drop 1 | featured products</h1>
		<div class="flex flex-col gap-32">
			<div class="featured-item h-full md:h-fit">
				<div class="image-panel">
					<Tilt class="hover:scale-110 transition duration-500 flex justify-center">
						<img
							class="product-image transition ease-out"
							src={product1}
							alt="ezzymerch x getfent Signature T-Shirt"
						/>
					</Tilt>
				</div>
				<div class="item-panel">
					<h1 class="text-primary-500 text-3xl text-center p-4 leading-relaxed">
						ezzymerch x getfent<br />Signature T-Shirt
					</h1>
					<div class="panel-button-group">
						<Button variant="fill" color="primary" size="lg" class="w-full">More Info</Button>
						<Button variant="fill" color="primary" size="lg" class="w-full">Add to Cart</Button>
					</div>
				</div>
			</div>
			<div class="featured-item h-full md:h-fit md:!flex-row !flex-col-reverse">
				<div class="item-panel">
					<h1 class="text-secondary-500 text-3xl text-center p-4 leading-relaxed">
						ezzymerch x getfent<br />Alt T-Shirt
					</h1>
					<div class="panel-button-group">
						<Button variant="fill" color="secondary" size="lg" class="w-full">More Info</Button>
						<Button variant="fill" color="secondary" size="lg" class="w-full">Add to Cart</Button>
					</div>
				</div>
				<div class="image-panel">
					<Tilt class="hover:scale-110 transition duration-500 flex justify-center">
						<img
							class="product-image transition ease-out"
							src={product2}
							alt="ezzymerch x getfent Alt T-Shirt"
						/>
					</Tilt>
				</div>
			</div>
			<div class="featured-item h-full md:h-fit">
				<div class="image-panel">
					<Tilt class="hover:scale-110 transition duration-500 flex justify-center">
						<img
							class="product-image transition ease-out"
							src={product3}
							alt="ezzymerch x jaimewallowa Signature Hat"
						/>
					</Tilt>
				</div>
				<div class="item-panel">
					<h1 class="text-accent-500 text-3xl text-center p-4 leading-relaxed">
						ezzymerch x jaimewallowa<br />Signature Hat
					</h1>
					<div class="panel-button-group">
						<Button variant="fill" color="accent" size="lg" class="w-full">More Info</Button>
						<Button variant="fill" color="accent" size="lg" class="w-full">Add to Cart</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	@media (min-width: 768px) {
		div.featured-item {
			@apply flex-row;
			@apply gap-16;
			@apply bg-transparent;
		}

		div.image-panel {
			@apply w-2/5;
		}

		div.item-panel {
			@apply w-3/5;
		}

		div.panel-button-group {
			@apply w-1/2;
		}
	}

	.featured-item {
		@apply w-full;
		@apply flex;
		@apply flex-col;
		@apply gap-0;
		@apply items-stretch;
		@apply justify-center;
		@apply bg-surface-200;
		@apply rounded-lg;
	}

	.image-panel {
		@apply bg-surface-200;
		@apply h-full;
		@apply w-full;
		@apply rounded-lg;
		@apply flex;
		@apply flex-col;
		@apply items-center;
		@apply justify-center;
		@apply aspect-square;
	}

	.product-image {
		@apply aspect-square;
		@apply w-4/5;
	}

	.item-panel {
		@apply p-4;
		@apply bg-surface-200;
		@apply min-h-min;
		@apply w-full;
		@apply rounded-lg;
		@apply flex;
		@apply flex-col;
		@apply items-center;
	}

	.panel-button-group {
		@apply p-8;
		@apply w-full;
		@apply flex;
		@apply flex-col;
		@apply justify-center;
		@apply items-center;
		@apply gap-8;
		@apply my-auto;
	}
</style>
