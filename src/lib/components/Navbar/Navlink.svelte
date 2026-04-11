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

<a href={to} onclick={handleClick} class={active ? 'active' : ''}>
	{@render children?.()}
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

	@media (max-width: 768px) {
		a {
			width: fit-content;
			display: block;
			font-size: large;
			padding: .5rem;
			text-align: center;
		}
	}
</style>
