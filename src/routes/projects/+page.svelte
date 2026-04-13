<script lang="ts">
  import projects from "$lib/Projects";
  import { ProjectCard } from "$lib/components";
</script>

<svelte:head>
  <title>Projects - Mads Balslev | Software Engineer</title>
  <meta name="description" content="Projects by Mads Balslev. From drone-based computer vision to multi-agent AI systems and real-time WebRTC applications." />
  <meta property="og:title" content="Projects - Mads Balslev | Software Engineer" />
  <meta property="og:description" content="Projects by Mads Balslev. From drone-based computer vision to multi-agent AI systems and real-time WebRTC applications." />
  <link rel="canonical" href="https://madsbalslev.com/projects" />
</svelte:head>

<h1>Projects</h1>

{#each projects as project}
  <ProjectCard {project} />
{/each}

<p class="message">More projects on <a href="https://www.github.com/madsbalslev" target="_blank" rel="noopener">GitHub</a></p>

<style>
  h1 {
    font-size: var(--font-size-3xl);
    margin: 0 0 var(--space-lg);
  }

  .message {
    margin-top: var(--space-2xl);
    text-align: center;
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
  }

  .message a {
    font-weight: 600;
  }
</style>
