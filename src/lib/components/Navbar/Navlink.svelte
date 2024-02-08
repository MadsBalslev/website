<script>
	export let to = '/'
	export let active = false
</script>

<a href={to} class={active ? 'active' : ''}>
	<slot />
</a>

<style>
	a {
		color: #ccc5b9;
		text-decoration: none;
	}

	a:hover::after {
		content: '';
		display: block;
		width: 100%;
		height: 3px;
		background-color: #eb5e28;
	}

	a.active {
		color: #fffcf2;
	}

	a.active::after {
		content: '';
		display: block;
		width: 100%;
		height: 3px;
		background-color: #eb5e28;
	}
</style>
