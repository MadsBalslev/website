<script lang="ts">
  import uses from '$lib/Uses'
</script>

<svelte:head>
  <title>Uses — Mads Balslev</title>
  <meta property="og:title" content="Uses — Mads Balslev" />
  <meta property="og:description" content="Tools, software, and hardware I use daily." />
</svelte:head>

<h1>Uses</h1>
<p class="intro">Tools, software, and hardware I use daily.</p>

{#each uses as category}
  <section>
    <h2>{category.title}</h2>
    <ul class="items">
      {#each category.items as item}
        <li>
          <div class="item-header">
            {#if item.url}
              <a href={item.url} target="_blank" rel="noopener">{item.name}</a>
            {:else}
              <span class="item-name">{item.name}</span>
            {/if}
          </div>
          {#if item.description}
            <p>{item.description}</p>
          {/if}
        </li>
      {/each}
    </ul>
  </section>
{/each}

<style>
  h1 {
    font-size: var(--font-size-3xl);
    margin: 0 0 var(--space-xs);
  }

  .intro {
    color: var(--color-text-muted);
    margin: 0 0 var(--space-2xl);
    font-size: var(--font-size-sm);
  }

  section {
    margin-bottom: var(--space-2xl);
  }

  h2 {
    font-size: var(--font-size-lg);
    color: var(--color-text);
    margin: 0 0 var(--space-md);
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid var(--color-border);
  }

  .items {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }

  .item-header a {
    color: var(--color-accent);
    font-weight: 600;
    font-size: var(--font-size-base);
  }

  .item-name {
    color: var(--color-text);
    font-weight: 600;
    font-size: var(--font-size-base);
  }

  li p {
    margin: var(--space-xs) 0 0;
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    max-width: 560px;
  }
</style>
