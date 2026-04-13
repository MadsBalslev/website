<script lang="ts">
  import Card from './Card.svelte'
  import type { Project } from '$lib/Projects'

  let { project }: { project: Project } = $props()
</script>

<Card
  title={project.title}
  subtitle={project.subtitle}
  keywords={project.keywords}
>
  {#snippet children()}
    <p>{project.description}</p>
  {/snippet}
  {#snippet footer()}
    {#if project.url}
      <div class="actions">
        <a href={project.url} target="_blank" rel="noopener" class="project-link">View Project</a>
      </div>
    {/if}
  {/snippet}
</Card>

<style>
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
</style>
