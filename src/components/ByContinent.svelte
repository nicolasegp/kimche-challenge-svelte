<script>
	import Card from './Card.svelte';
	export let paises;
	const agrupar = (paises) => paises.reduce((grupos, item) => {
		const grupo = grupos[item.continent.name] || [];
		grupo.push(item);
		grupos[item.continent.name] = grupo;
		return grupos;
	}, {});
	$: continentes = Object.entries(agrupar(paises));
</script>

<div>
	{#each continentes as continente}
		<div class="h3">{continente[0]}</div>
		<div class="columns p-1">
			{#each continente[1] as pais}
				<Card {pais} />
			{/each}
		</div>
		<div class="divider"></div>
	{/each}
</div>
