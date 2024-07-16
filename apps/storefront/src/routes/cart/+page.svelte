<script lang="ts">
	let cartData: string[];
</script>

<section class="flex-1 flex flex-row items-center justify-center gap-8">
	<div class="space-y-4">
		<h1 class="text-2xl font-semibold mb-2">cart</h1>
		{#if cartData}
			<span>this is stuff in my cart</span>
		{:else}
			<h2 class="text-xl">Your cart is empty</h2>
		{/if}
	</div>
</section>
