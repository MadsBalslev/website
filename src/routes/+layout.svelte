<script lang="ts">
	import '../app.css'
	import '@fontsource-variable/source-code-pro'
	import { dev } from '$app/environment'
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import { page } from '$app/state'
	import { fade } from 'svelte/transition'
	import { Navbar } from '$lib/components'
	import type { Snippet } from 'svelte'

	injectAnalytics({ mode: dev ? 'development' : 'production' })

	let { children }: { children: Snippet } = $props()

	const buildDate = __BUILD_DATE__
</script>

<Navbar currentRoute={page.url.pathname} />

{#key page.url.pathname}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		{@render children()}
	</main>
{/key}

<footer>
	<p>Built by <a href="/resume">Mads Balslev</a></p>
	<p class="build-date">Last updated {buildDate}</p>
</footer>

<style>
	main {
		flex: 1;
		padding: var(--space-xl) 0;
	}

	.build-date {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
		margin-top: var(--space-xs);
	}
</style>
