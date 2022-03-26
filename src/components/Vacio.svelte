<script>
	export let paises;
	paises; // []
</script>

<style>
	.empty {
		box-shadow: 0 0.2rem 0.5rem rgb(48 55 66 / 20%);
		background: #fff;
	}
	.empty-icon {
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>

<div class="empty">
	<div class="empty-icon">
		<i class="icon icon-upward"></i>
	</div>
	<p class="empty-title h2">Nothing to Show</p>
	<p class="empty-subtitle">You should check the country name</p>
</div>
