<script lang="ts">
	import '../app.css'
	import '@fontsource-variable/source-code-pro'
	import { dev } from '$app/environment'
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'
	import { page } from '$app/state'
	import { fade } from 'svelte/transition'
	import { Navbar } from '$lib/components'
	import type { Snippet } from 'svelte'

	injectAnalytics({ mode: dev ? 'development' : 'production' })
	injectSpeedInsights()

	let { children }: { children: Snippet } = $props()

	const buildDate = __BUILD_DATE__

	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Mads Balslev',
		url: 'https://madsbalslev.com',
		jobTitle: 'Software Engineer & Consultant',
		description: 'Software Engineer focusing on generative AI, building enterprise AI platforms at Trifork. MSc in Software Engineering from Aalborg University.',
		worksFor: {
			'@type': 'Organization',
			name: 'Trifork',
			url: 'https://trifork.com'
		},
		alumniOf: {
			'@type': 'CollegeOrUniversity',
			name: 'Aalborg University',
			url: 'https://www.aau.dk'
		},
		knowsAbout: ['Generative AI', 'Software Engineering', 'Next.js', 'React', 'Python', 'FastAPI', 'Computer Vision', 'Multi-Agent Systems'],
		sameAs: [
			'https://www.linkedin.com/in/madsbalslev/',
			'https://www.github.com/madsbalslev/'
		],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Aalborg',
			addressCountry: 'DK'
		}
	}
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
</svelte:head>

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
