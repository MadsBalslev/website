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
            -
            {#if endDate}
              <small>{formatDate(endDate)}</small>
            {:else}
              <small>Current</small>
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
          <div class="position-marker"></div>
          <div class="position-content">
            <span class="position-title">{position.title}</span>
            <span class="position-time">
              {formatDate(position.startDate)} - {position.endDate ? formatDate(position.endDate) : 'Current'}
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
    padding: 2rem 2.5rem;
    margin: 1.5rem 0;
    border-radius: .7rem;
    background-color: #383633;

    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    gap: 1rem;
    align-items:first baseline;
    justify-content: space-between;
    word-break: normal;
    flex-wrap: wrap;
  }

  .header .lead {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    flex: 4;
  }

  .header .lead h2 {
    margin: 0;
    color: #fffcf2;
  }

  .header span {
    padding: 0;
    border-radius: .3rem;
    color: #ccc5b9;
  }

  .header .subtitle {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: flex-end;
    color: #ccc5b9;
    flex: 1;
    min-width: fit-content;
  }

  .header .subtitle .time {
    padding: 0 8px;
  }

  .positions {
    margin-top: 1rem;
    padding-left: 0.5rem;
    border-left: 2px solid #eb5e28;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .position {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .position-marker {
    width: 8px;
    height: 8px;
    min-width: 8px;
    border-radius: 50%;
    background-color: #eb5e28;
    margin-top: 0.5rem;
    margin-left: -0.8rem;
  }

  .position-content {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .position-title {
    color: #fffcf2;
    font-weight: 600;
  }

  .position-time {
    color: #ccc5b9;
    font-size: 0.85rem;
  }

  .keywords {
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: .8rem;
    color: #ccc5b9;
  }

  .keywords span {
    padding: 0 .5rem;
    border: 1px solid #ccc5b9;
    border-radius: .3rem;
  }

  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      gap: 1rem;
    }

    .header .subtitle {
      align-items: flex-start;
      flex-direction: row;
    }
  }
</style>
