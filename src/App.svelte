<script>
	import './assets/spectre.min.css';
	import './assets/icons.min.css';
	import './assets/web.css';
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
