<script lang="ts">
  import Card from './Card.svelte'
  import type { ResumeItem } from '$lib/Resume'

  let { education }: { education: ResumeItem } = $props()
</script>

<Card
  title={education.title}
  subtitle={education.location}
  startDate={education.startDate}
  endDate={education.endDate}
  keywords={education.keywords}
>
  {#snippet children()}
    {#if education.description}
      <p>{education.description}</p>
    {/if}
  {/snippet}
  {#snippet footer()}
    {#if education.gpa}
      <div class="gpa">
        <span class="gpa-badge">Average: {education.gpa} / {education.gpaScale ?? '12'}</span>
      </div>
    {/if}
  {/snippet}
</Card>

<style>
  .gpa {
    display: flex;
    justify-content: flex-end;
    margin-top: var(--space-md);
  }

  .gpa-badge {
    padding: var(--space-xs) var(--space-md);
    border: 1px solid var(--color-accent);
    border-radius: var(--radius-sm);
    color: var(--color-accent);
    font-size: var(--font-size-sm);
    font-weight: 600;
  }
</style>
