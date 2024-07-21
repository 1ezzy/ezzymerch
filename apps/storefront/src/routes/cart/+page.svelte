<script lang="ts">
	let cartData: boolean = false;
</script>

<svelte:head>
	<title>Cart | ezzymerch</title>
</svelte:head>

<section class="container flex-1 flex flex-col items-center gap-8">
	<div class="p-4 flex-1 w-full grid grid-cols-10 mt-8">
		<div class="flex flex-col" class:col-span-6={cartData} class:col-span-10={!cartData}>
			<div class="py-8 flex flex-row justify-between">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<h2
					class="text-xl"
					on:click={() => {
						cartData = !cartData;
					}}
				>
					Your Cart
				</h2>
				{#if cartData}
					<h2 class="text-xl">0 Items</h2>
				{/if}
			</div>
			{#if cartData}
				<div
					class="flex-1 flex flex-col gap-2 items-center justify-center bg-surface-200 rounded-lg"
				>
					<span>This will show what is in your cart</span>
				</div>
			{:else}
				<div
					class="flex-1 flex flex-col gap-2 items-center justify-center dark:text-gray-300 text-gray-500 italic bg-surface-200 rounded-lg"
				>
					<span>Your Cart is Empty</span>
					<span>Click <a href="/products" class="underline">here</a> to view products</span>
				</div>
			{/if}
		</div>
		{#if cartData}
			<div
				class="col-span-1 mt-[92px] self-center justify-self-center h-[50%] w-[1px] border-2 border-double border-primary-500"
			/>
			<div class="col-span-3 flex flex-col">
				<div class="py-8 flex flex-row justify-between">
					<h2 class="text-xl">Order Summary</h2>
				</div>
				<div
					class="flex-1 flex flex-col bg-primary-500 rounded-lg items-center justify-center text-center"
				>
					<span>This will show a<br />summary of your order</span>
				</div>
			</div>
		{/if}
	</div>
</section>
