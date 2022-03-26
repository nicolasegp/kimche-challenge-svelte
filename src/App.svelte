<script>
	import './assets/spectre.min.css';
	import './assets/icons.min.css';
	import { onMount } from 'svelte';
	import getData from './api';
	import Form from './components/Form.svelte';
	import Grid from './components/Grid.svelte';

	let nombre = '', opcion = 1;
	let loading = false, data = [];

	onMount(async () => {
		loading = true;
		try {
			data = await getData();
		}
		catch(err) {
			alert(err.message);
		}
		finally {
			loading = false;
		}
	});
</script>

<style>
	:global(body) {
		background: #f7f8f9 !important;
	}
	:global(.card) {
		box-shadow: 0 0.2rem 0.5rem rgb(48 55 66 / 30%);
		background: #fff;
	}
	.loading {
		margin-top: 2rem;
	}
</style>

<main class="container grid-md my-2">
	{#if loading}
		<div class="loading loading-lg" />
	{:else}
		<h1 class="h1 text-bold">Country Search 🔎 <small class="text-gray">(Svelte)</small></h1>
		<Form bind:nombre={nombre} bind:opcion={opcion} />
		<div class="divider" />
		<Grid {nombre} {opcion} {data} />
	{/if}
</main>
