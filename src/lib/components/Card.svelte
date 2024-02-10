<script lang="ts">
  import Time from 'svelte-time'

  export let title: string
  export let subtitle: string | undefined = undefined
  export let description: string | undefined = undefined
  export let url: string | undefined = undefined
  export let keywords: string[] = []
  export let startDate: Date | undefined = undefined
  export let endDate: Date | undefined = undefined
</script>

<div class="card">
  <div class="header">
    <div class="title">
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
  </div>
  {#if keywords.length > 0}
      <div class="keywords">
        {#each keywords as keyword}
          <span>{keyword}</span>
        {/each}
      </div>
    {/if}
  {#if description}
    <div class="description">
      <p>{description}</p>
    </div>
  {/if}
  {#if url}
     <div class="actions">
       <a href={url} target="_blank" class="project-link" type="button">View Project</a>
     </div>
  {/if}
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
    flex-direction: column;
  }

  .header .title {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items:first baseline;
    justify-content: space-between;
  }

  .header .title .lead {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .header .title .lead h2 {
    margin: 0;
    color: #fffcf2;
    flex-grow: 2;
  }

  .header .title span {
    padding: .3rem .5rem;
    border-radius: .3rem;
    color: #ccc5b9;
  }

  .header .subtitle {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: flex-end;
    color: #ccc5b9;
  }

  .header .subtitle .time {
    padding: 0 8px;
  }

  .keywords {
    margin-top: .5rem;
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

  .actions {
    display: flex;
    justify-content: flex-end;
  }

  .project-link {
    padding: .5rem 1rem;
    border: 2px solid #eb5e28;
    color: #fffcf2;
    text-decoration: none;
    background: linear-gradient(to right, #eb5e28 50%, #383633 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .2s ease-out;
  }

  .project-link:hover {
    background-position: left bottom;
  }
</style>
