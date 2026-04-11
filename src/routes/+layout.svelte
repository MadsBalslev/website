<script lang="ts">
	import '../app.css'
	import '@fontsource-variable/source-code-pro'
	import { page } from '$app/state'
	import { Navbar } from '$lib/components'
	import type { Snippet } from 'svelte'

	let { children }: { children: Snippet } = $props()
</script>

<Navbar currentRoute={page.url.pathname} />

<main>
	{@render children()}
</main>

<footer>
	<p>Created by <a href="/resume" class="me">Mads</a> in Aalborg, Denmark</p>
</footer>

<style>
	.me {
		color: #eb5e28;
		text-decoration: none;
		font-weight: bold;
	}
</style>
