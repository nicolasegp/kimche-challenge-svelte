<script>
	export let nombre;
	export let opcion;
	$: btnContinent = opcion === 1 ? 'btn-primary' : '';
	$: btnLanguages = opcion === 2 ? 'btn-primary' : '';
</script>

<section class="card">
	<div class="card-body">
		<div class="has-icon-left">
			<input
				type="text"
				name="pais"
				class="form-input"
				placeholder="Enter a country name"
				bind:value={nombre}
			/>
			<i class="form-icon icon icon-search"></i>
		</div>
	</div>
	<div class="card-body">
		<div class="columns p-1">
			<div class="column col-6 hide-sm h5">Group by</div>
			<div class="column col-3 col-sm-6">
				<button on:click={() => opcion = 1} class="btn btn-block mx-1 {btnContinent}">
					<i class="icon icon-location"></i> Continent
				</button>
			</div>
			<div class="column col-3 col-sm-6">
				<button on:click={() => opcion = 2} class="btn btn-block mx-1 {btnLanguages}">
					<i class="icon icon-person"></i> Languages
				</button>
			</div>
		</div>
	</div>
	<div class="card-footer text-right">
		<small>
			<a href="https://github.com/nicolasegp/kimche-challenge-svelte">View in Github</a>
		</small>
	</div>
</section>
