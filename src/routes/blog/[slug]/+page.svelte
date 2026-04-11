<script lang="ts">
  let { data } = $props()
</script>

<svelte:head>
  <title>{data.meta.title} — Mads Balslev</title>
  <meta name="description" content={data.meta.description} />
</svelte:head>

<article class="blog-post">
  <header>
    <h1>{data.meta.title}</h1>
    <time>{new Date(data.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
    {#if data.meta.description}
      <p class="description">{data.meta.description}</p>
    {/if}
  </header>
  <div class="content">
    <data.content />
  </div>
</article>

<style>
  .blog-post {
    max-width: 720px;
    margin: 0 auto;
  }

  header {
    margin-bottom: var(--space-2xl);
    padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--color-border);
  }

  header h1 {
    margin: 0 0 var(--space-sm);
    font-size: var(--font-size-3xl);
  }

  header time {
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
  }

  .description {
    color: var(--color-text-secondary);
    margin-top: var(--space-sm);
    font-style: italic;
  }

  .content :global(h2) {
    margin-top: var(--space-2xl);
    font-size: var(--font-size-2xl);
  }

  .content :global(h3) {
    margin-top: var(--space-xl);
    font-size: var(--font-size-xl);
  }

  .content :global(p) {
    line-height: 1.8;
  }

  .content :global(a) {
    color: var(--color-accent);
  }

  .content :global(code) {
    background-color: var(--color-surface);
    padding: 0.15rem 0.4rem;
    border-radius: var(--radius-sm);
    font-size: 0.9em;
  }

  .content :global(pre) {
    background-color: var(--color-surface);
    padding: var(--space-lg);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    overflow-x: auto;
  }

  .content :global(pre code) {
    background: none;
    padding: 0;
  }

  .content :global(blockquote) {
    border-left: 3px solid var(--color-accent);
    margin: var(--space-lg) 0;
    padding: var(--space-sm) var(--space-lg);
    color: var(--color-text-secondary);
  }
</style>
