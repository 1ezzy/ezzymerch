<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Button, Tooltip } from 'svelte-ux';

	export let showOnPx: number = 256;
	let hidden: boolean = true;

	function goTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx || scrollContainer().scrollTop < window.scrollY) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

{#if !hidden}
	<span transition:fade={{ duration: 200 }} class="sticky bottom-8 left-8 select-none">
		<Tooltip title="Scroll to Top" placement="top" offset={4}>
			<Button icon="https://api.iconify.design/mdi:arrow-up-bold-circle.svg" on:click={goTop} />
		</Tooltip>
	</span>
{/if}
