<script lang="ts">
	import { slide } from 'svelte/transition'
	import routes from '$lib/NavRoutes'
	import Navlink from './Navlink.svelte'
	import Hamburger from './Hamburger.svelte'
	import Logo from '$lib/assets/Logo.svelte'

	let { currentRoute }: { currentRoute: string } = $props()
	let opened = $state(false)

	$effect(() => {
		const checkWindowSize = () => {
			if (window.innerWidth > 768) {
				opened = false
			}
		}
		window.addEventListener('resize', checkWindowSize)
		return () => window.removeEventListener('resize', checkWindowSize)
	})
</script>

<nav class="navbar" class:open={opened}>
	<div class="inner">
		<a href="/" class="logo">
			<Logo />
		</a>
		<div class="actions">
			<div class="links desktop">
				{#each routes as { href, label }}
					<Navlink to={href} active={currentRoute == href}>{label}</Navlink>
				{/each}
			</div>
			<div class="hamburger mobile">
				<Hamburger bind:opened />
			</div>
		</div>
	</div>
	{#if opened}
		<div class="links mobile-menu" transition:slide>
			{#each routes as { href, label }}
				<Navlink bind:opened to={href} active={currentRoute == href}>{label}</Navlink>
			{/each}
		</div>
	{/if}
</nav>

<style>
	.navbar {
		position: sticky;
		top: 0;
		z-index: 100;
		display: flex;
		flex-direction: column;
		padding: var(--space-md) 0;
		background-color: color-mix(in srgb, var(--color-bg) 85%, transparent);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid transparent;
		transition: border-color var(--transition-normal);
	}

	.navbar.open {
		border-bottom-color: var(--color-border);
	}

	.inner {
		width: 100%;
		height: 48px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.links.desktop {
		display: flex;
		gap: var(--space-xl);
	}

	.mobile {
		display: none;
	}

	.mobile-menu {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		padding: var(--space-md);
		gap: var(--space-sm);
	}

	.hamburger {
		display: none;
	}

	.logo {
		width: 40px;
		height: 40px;
		display: block;
		transition: opacity var(--transition-fast);
	}

	.logo:hover {
		opacity: 0.8;
	}

	@media (max-width: 768px) {
		.links.desktop {
			display: none;
		}

		.mobile {
			display: flex;
		}

		.hamburger {
			display: block;
		}
	}
</style>
