<script lang="ts">
	import { Button } from 'svelte-ux';
</script>

<section class="p-8 w-full flex-1 flex flex-col items-center justify-center gap-40">
	<div class="h-[82vh] w-4/5 bg-surface-200 rounded-lg mb-20 flex items-center justify-center">
		<span>Image and logo</span>
	</div>
	<div class="h-[512px] w-4/5 flex flex-row gap-8">
		<div class="item-image">
			<span>Image of merch item 1</span>
			<span>T Shirt</span>
		</div>
		<div class="item-panel">
			<h1 class="text-secondary-500 text-2xl text-center p-4 mt-8">
				ezzymerch x getfent signature t-shirt
			</h1>
			<div class="p-8 flex flex-row justify-center gap-8 mt-auto">
				<Button variant="fill" color="secondary">More Info</Button>
				<Button variant="fill" color="secondary">Add to Cart</Button>
			</div>
		</div>
	</div>
	<div class="h-[512px] w-4/5 flex flex-row gap-8">
		<div class="item-panel">
			<h1 class="text-accent-500 text-2xl text-center p-4 mt-8">ezzymerch x getfent alt t-shirt</h1>
			<div class="p-8 flex flex-row justify-center gap-8 mt-auto">
				<Button variant="fill" color="accent">More Info</Button>
				<Button variant="fill" color="accent">Add to Cart</Button>
			</div>
		</div>
		<div class="item-image">
			<span>Image of merch item 2</span>
			<span>T Shirt</span>
		</div>
	</div>
	<div class="h-[512px] w-4/5 flex flex-row gap-8 mb-8">
		<div class="item-image">
			<span>Image of merch item 3</span>
			<span>Baseball Hat</span>
		</div>
		<div class="item-panel">
			<h1 class="text-success-500 text-2xl text-center p-4 mt-8">
				ezzymerch x jaimewallowa signature hat
			</h1>
			<div class="p-8 flex flex-row justify-center gap-8 mt-auto">
				<Button variant="fill" color="success">More Info</Button>
				<Button variant="fill" color="success">Add to Cart</Button>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.item-image {
		@apply bg-surface-200;
		@apply h-full;
		@apply w-2/5;
		@apply rounded-lg;
		@apply flex;
		@apply flex-col;
		@apply items-center;
		@apply justify-center;
	}

	.item-panel {
		@apply bg-surface-200;
		@apply h-full;
		@apply w-3/5;
		@apply rounded-lg;
		@apply flex;
		@apply flex-col;
	}
</style>
