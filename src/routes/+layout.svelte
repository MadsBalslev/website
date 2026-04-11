<script lang="ts">
	import '../app.css'
	import '@fontsource-variable/source-code-pro'
	import { page } from '$app/state'
	import { fade } from 'svelte/transition'
	import { Navbar } from '$lib/components'
	import type { Snippet } from 'svelte'

	let { children }: { children: Snippet } = $props()
</script>

<Navbar currentRoute={page.url.pathname} />

{#key page.url.pathname}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		{@render children()}
	</main>
{/key}

<footer>
	<p>Built by <a href="/resume">Mads Balslev</a></p>
</footer>

<style>
	main {
		flex: 1;
		padding: var(--space-xl) 0;
	}
</style>
