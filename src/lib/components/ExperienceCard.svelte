<script lang="ts">
  import Card from './Card.svelte'
  import type { ResumeItem } from '$lib/Resume'

  let { experience }: { experience: ResumeItem } = $props()

  function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }
</script>

<Card
  title={experience.title}
  subtitle={experience.location}
  startDate={experience.startDate}
  endDate={experience.endDate}
  keywords={experience.keywords}
>
  {#snippet children()}
    {#if experience.positions && experience.positions.length > 0}
      <div class="positions">
        {#each experience.positions as position}
          <div class="position">
            <div class="position-dot"></div>
            <div class="position-content">
              <span class="position-title">{position.title}</span>
              <span class="position-time">
                {formatDate(position.startDate)} - {position.endDate ? formatDate(position.endDate) : 'Present'}
              </span>
            </div>
          </div>
        {/each}
      </div>
    {/if}

    {#if experience.description}
      <p>{experience.description}</p>
    {/if}
  {/snippet}
</Card>

<style>
  .positions {
    margin-top: var(--space-lg);
    padding-left: var(--space-md);
    border-left: 2px solid var(--color-accent);
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .position {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
  }

  .position-dot {
    width: 8px;
    height: 8px;
    min-width: 8px;
    border-radius: 50%;
    background-color: var(--color-accent);
    margin-top: 0.45rem;
    margin-left: calc(-1 * var(--space-md) - 5px);
  }

  .position-content {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .position-title {
    color: var(--color-text);
    font-weight: 600;
    font-size: var(--font-size-base);
  }

  .position-time {
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
  }
</style>
