<script lang="ts">
	import { AppBar, Button, Drawer, Tooltip, settings } from 'svelte-ux';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import '../app.postcss';

	settings({
		components: {
			AppBar: {
				classes: 'bg-primary text-primary-900 shadow-md h-[64px]'
			}
		}
	});

	let drawerExpanded: boolean = false;
	let cartItems = [];
</script>

<Drawer bind:open={drawerExpanded} placement="right" class="w-[320px] flex flex-col">
	<div class="p-4 flex flex-row items-center justify-center">
		<Button
			icon="https://api.iconify.design/mdi:arrow-left-thin.svg"
			size="lg"
			class="absolute left-2 rounded-lg"
			on:click={() => (drawerExpanded = false)}
		></Button>
		<h1 class="p2 text-xl">Your Cart</h1>
	</div>

	{#if cartItems.length > 0}
		<div>There is shit in your cart!</div>
	{:else}
		<div class="flex-1 flex flex-col items-center justify-center">
			<span class="text-gray-300">Your cart is empty</span>
		</div>
	{/if}

	<div slot="actions">
		<Button href="/cart" on:click={() => (drawerExpanded = false)}>Go to Cart</Button>
	</div>
</Drawer>

<AppBar class="md:px-8 px-4 sticky top-0" title="Svelte UX Starter" menuIcon={null}>
	<div slot="title" class="basis-1/3">
		<a href="/"><h1 class="font-indie pl-2">ezzymerch</h1></a>
	</div>
	<div class="mx-auto w-full flex justify-center gap-8 basis-1/3">
		<a href="/products"><span class="">Products</span></a>
	</div>
	<div slot="actions" class="flex items-center basis-1/3">
		<Tooltip title="Total" placement="bottom">
			<span class="inline-block mr-1">$0</span>
		</Tooltip>
		<Tooltip title="Cart" placement="bottom">
			<Button
				size="md"
				icon="https://api.iconify.design/mdi:cart-outline.svg"
				on:click={() => (drawerExpanded = true)}
			/>
		</Tooltip>
	</div>
</AppBar>

<main class="p-2 w-full min-h-[calc(100vh-128px)] flex justify-center">
	<slot />
</main>

<ScrollToTop />

<footer class="p-4 flex flex-row items-center justify-center md:gap-32 gap-8 h-[64px]">
	<span class="text-opacity-50 text-white text-sm">
		© 2024&nbsp;&nbsp;-&nbsp;&nbsp;powered by
		<a class="font-indie" href="https://ezzy.dog" target="_blank"> 1ezzy! </a></span
	>
	<div class="flex gap-3">
		<Tooltip title="Open Twitter / X" placement="top" offset={2}>
			<Button
				size="md"
				icon="https://api.iconify.design/ri:twitter-x-fill.svg"
				href="https://twitter.com/1ezzyboy"
				target="_blank"
			/>
		</Tooltip>

		<Tooltip title="View repository" placement="top" offset={2}>
			<Button
				size="md"
				icon="https://api.iconify.design/mdi:github.svg"
				href="https://github.com/1ezzy/ezzymerch"
				target="_blank"
			/>
		</Tooltip>
	</div>
</footer>
