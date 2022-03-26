<script>
	import ByContinent from './ByContinent.svelte';
	import ByLanguages from './ByLanguages.svelte';
	import Vacio from './Vacio.svelte';
	export let nombre, opcion, data;
	$: paises = data.filter((el) => el.name.toLowerCase().includes(nombre.trim().toLowerCase()));
	$: document.title = paises.length > 0 && nombre.trim().length !== 0
			? 'Countries: ' + paises.length
			: 'Kimche Challenge (Svelte)';
</script>

<section>
	<svelte:component this={
		paises.length === 0 || nombre.trim().length === 0
			? Vacio
			: (opcion === 1 ? ByContinent : ByLanguages)
	} paises={paises} />
</section>
