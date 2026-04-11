<script lang="ts">
	import type { Snippet } from 'svelte'

	let {
		to = '/',
		active = false,
		opened = $bindable(false),
		children
	}: {
		to?: string
		active?: boolean
		opened?: boolean
		children?: Snippet
	} = $props()

	const handleClick = () => {
		opened = false
	}
</script>

<a href={to} onclick={handleClick} class:active>
	{@render children?.()}
</a>

<style>
	a {
		color: var(--color-text-secondary);
		text-decoration: none;
		font-size: var(--font-size-sm);
		letter-spacing: 0.02em;
		padding: var(--space-xs) 0;
		position: relative;
		transition: color var(--transition-fast);
	}

	a::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background-color: var(--color-accent);
		transition: width var(--transition-normal);
	}

	a:hover {
		color: var(--color-text);
	}

	a:hover::after {
		width: 100%;
	}

	a.active {
		color: var(--color-text);
	}

	a.active::after {
		width: 100%;
	}

	@media (max-width: 768px) {
		a {
			width: fit-content;
			display: block;
			font-size: var(--font-size-base);
			padding: var(--space-sm);
			text-align: center;
		}
	}
</style>
