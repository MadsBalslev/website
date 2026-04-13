<script lang="ts">
  import type { Snippet } from 'svelte'

  let {
    title,
    subtitle = undefined,
    keywords = [],
    startDate = undefined,
    endDate = undefined,
    children,
    footer
  }: {
    title: string
    subtitle?: string
    keywords?: string[]
    startDate?: Date
    endDate?: Date
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
            -
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
