<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { Position } from '$lib/Resume'

  let {
    title,
    subtitle = undefined,
    keywords = [],
    startDate = undefined,
    endDate = undefined,
    positions = undefined,
    children,
    footer
  }: {
    title: string
    subtitle?: string
    keywords?: string[]
    startDate?: Date
    endDate?: Date
    positions?: Position[]
    children?: Snippet
    footer?: Snippet
  } = $props()

  function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }
</script>

<div class="card">
  <div class="header">
    <div class="lead">
      <h2>{title}</h2>
    </div>
    {#if subtitle}
      <div class="subtitle">
        <span>{subtitle}</span>
        {#if startDate || endDate}
          <div class="time">
            {#if startDate}
              <small>{formatDate(startDate)}</small>
            {/if}
            —
            {#if endDate}
              <small>{formatDate(endDate)}</small>
            {:else}
              <small>Present</small>
            {/if}
          </div>
        {/if}
      </div>
    {/if}
  </div>

  {#if positions && positions.length > 0}
    <div class="positions">
      {#each positions as position}
        <div class="position">
          <div class="position-dot"></div>
          <div class="position-content">
            <span class="position-title">{position.title}</span>
            <span class="position-time">
              {formatDate(position.startDate)} — {position.endDate ? formatDate(position.endDate) : 'Present'}
            </span>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  {@render children?.()}

  {#if keywords.length > 0}
    <div class="keywords">
      {#each keywords as keyword}
        <span>{keyword}</span>
      {/each}
    </div>
  {/if}

  {@render footer?.()}
</div>

<style>
  .card {
    padding: var(--space-lg) var(--space-xl);
    margin: var(--space-md) 0;
    border-radius: var(--radius-lg);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    transition: border-color var(--transition-normal), transform var(--transition-normal);
  }

  .card:hover {
    border-color: var(--color-text-muted);
    transform: translateY(-1px);
  }

  .header {
    display: flex;
    gap: var(--space-md);
    align-items: first baseline;
    justify-content: space-between;
    word-break: normal;
    flex-wrap: wrap;
  }

  .header .lead {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    flex: 4;
  }

  .header .lead h2 {
    margin: 0;
    font-size: var(--font-size-xl);
    color: var(--color-text);
  }

  .header span {
    padding: 0;
    color: var(--color-text-secondary);
  }

  .header .subtitle {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    align-items: flex-end;
    color: var(--color-text-secondary);
    flex: 1;
    min-width: fit-content;
    font-size: var(--font-size-sm);
  }

  .header .subtitle .time {
    padding: 0;
  }

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

  .keywords {
    margin-top: var(--space-lg);
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
  }

  .keywords span {
    padding: var(--space-xs) var(--space-sm);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    transition: border-color var(--transition-fast);
  }

  .keywords span:hover {
    border-color: var(--color-accent);
  }

  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      gap: var(--space-sm);
    }

    .header .subtitle {
      align-items: flex-start;
      flex-direction: row;
      gap: var(--space-sm);
    }
  }
</style>
