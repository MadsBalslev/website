<script lang="ts">
	import { onMount } from 'svelte'
	import { slide } from 'svelte/transition'
	import routes from '$lib/NavRoutes'

	import Navlink from './Navlink.svelte'
	import Hamburger from './Hamburger.svelte'
	import Logo from '$lib/assets/Logo.svelte'

	export let currentRoute: string

	$: opened = false

	const checkWindowSize = () => {
		if (window.innerWidth > 768) {
			opened = false
		}
	}

	onMount(() => {
		window.addEventListener('resize', checkWindowSize)
		return () => window.removeEventListener('resize', checkWindowSize)
	})
</script>

<div class="navbar {opened ? 'open' : ''}">
	<div class="innerContainer">
		<div class="logo">
			<Logo />
		</div>
		<div class="actions">
			<div class="buttons full">
				{#each routes as { href, label }}
					<Navlink to={href} active={currentRoute == href}>{label}</Navlink>
				{/each}
			</div>
			<div class="hamburger responsive">
				<Hamburger bind:opened />
			</div>
		</div>
	</div>
	{#if opened}
		<div class="buttons responsive open" transition:slide>
			{#each routes as { href, label }}
					<Navlink bind:opened to={href} active={currentRoute == href}>{label}</Navlink>
			{/each}
		</div>
	{/if}
</div>


<style>
	.navbar {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin: 2rem 0;
	}

	.navbar .innerContainer {
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.buttons.full {
		display: flex;
		gap: 2rem;
	}

	.responsive {
		display: none;
	}

	.buttons.responsive {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		padding: 1rem;
	}

	.hamburger {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		color: #fffcf2;
	}

	.logo {
		width: 50px;
		height: 50px;
	}

	@media (max-width: 768px) {
		.buttons.full {
			display: none;
		}

		.responsive {
			display: flex;
		}

		.hamburger {
			display: block;
		}
	}
</style>
