<script>
	export let pais;
</script>

<style>
	ul {
		list-style: none;
		margin: 0;
	}
</style>

<div class="column col-6 col-sm-12 my-2">
	<div class="card">
		<div class="card-header">
			<div class="card-title h5 text-ellipsis" title={pais.name}>
				{pais.emoji} {pais.name}
			</div>
		</div>
		<div class="card-body">
			<ul>
				<li><strong>Capital:</strong> {pais.capital || '--'}</li>
				<li><strong>Currency:</strong> {pais.currency || '--'}</li>
			</ul>
		</div>
	</div>
</div>
