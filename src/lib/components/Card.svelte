<script lang="ts">
  import Time from 'svelte-time'

  export let title: string
  export let subtitle: string | undefined = undefined
  export let keywords: string[] = []
  export let startDate: Date | undefined = undefined
  export let endDate: Date | undefined = undefined
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
              <small><Time timestamp={startDate} format="MMM YYYY" /></small>
            {/if}
            -
            {#if endDate}
              <small><Time timestamp={endDate} format="MMM YYYY" /></small>
            {:else}
              <small>Current</small>
            {/if}
          </div>
        {/if}
      </div>
    {/if}
  </div>
  <slot />
  {#if keywords.length > 0}
    <div class="keywords">
      {#each keywords as keyword}
        <span>{keyword}</span>
      {/each}
    </div>
  {/if}
  <slot name="footer" />
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
