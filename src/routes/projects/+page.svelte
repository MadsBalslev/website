<script lang="ts">
  import projects from "$lib/Projects";
  import { Card } from "$lib/components";
</script>

<svelte:head>
  <title>Projects — Mads Balslev</title>
</svelte:head>

<h1>Projects</h1>

{#each projects as project}
  <Card {...project}>
    {#snippet children()}
      <p>{project.description}</p>
    {/snippet}
    {#snippet footer()}
      <div class="actions">
        {#if project.url}
          <a href={project.url} target="_blank" rel="noopener" class="project-link">View Project</a>
        {/if}
      </div>
    {/snippet}
  </Card>
{/each}

<p class="message">More projects on <a href="https://www.github.com/madsbalslev" target="_blank" rel="noopener">GitHub</a></p>

<style>
  h1 {
    font-size: var(--font-size-3xl);
    margin: 0 0 var(--space-lg);
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    margin-top: var(--space-md);
  }

  .project-link {
    padding: var(--space-sm) var(--space-lg);
    border: 1px solid var(--color-accent);
    border-radius: var(--radius-sm);
    color: var(--color-text);
    font-size: var(--font-size-sm);
    transition: all var(--transition-fast);
  }

  .project-link:hover {
    background-color: var(--color-accent);
    color: var(--color-text);
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
