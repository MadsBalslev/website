<script lang="ts">
	import routes from '$lib/NavRoutes'
	import Navlink from './Navlink.svelte'
	import Logo from '$lib/assets/Logo.svelte'

	export let currentRoute: string
</script>

<div class="navbar">
	<div class="logo">
		<Logo />
	</div>
	<div class="buttons">
		{#each routes as { href, label }}
			<Navlink to={href} active={currentRoute == href}>{label}</Navlink>
		{/each}
	</div>
</div>

<style>
	.navbar {
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 2rem 0;
		gap: 2rem;
	}

	.buttons {
		display: flex;
		gap: 2rem;
	}

	.logo {
		width: 50px;
		height: 50px;
	}
</style>
