<script>
	import Card from './Card.svelte';
	export let paises;
	const agrupar = (paises) => paises.reduce((grupos, item) => {
		item.languages.map(len => {
			const grupo = grupos[len.name] || [];
			grupo.push(item);
			grupos[len.name] = grupo;
		});
		return grupos;
	}, {});
	$: idiomas = Object.entries(agrupar(paises));
</script>

<div>
	{#each idiomas as idioma}
		<div class="h3">{idioma[0]}</div>
		<div class="columns p-1">
			{#each idioma[1] as pais}
				<Card {pais} />
			{/each}
		</div>
		<div class="divider"></div>
	{/each}
</div>
