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
    margin-bottom: 2rem;
  }

  header h1 {
    margin-bottom: 0.5rem;
  }

  header time {
    color: #ccc5b9;
    font-size: 0.9rem;
  }

  .description {
    color: #ccc5b9;
    margin-top: 0.5rem;
    font-style: italic;
  }

  .content :global(h2) {
    margin-top: 2rem;
  }

  .content :global(p) {
    line-height: 1.8;
  }

  .content :global(code) {
    background-color: #383633;
    padding: 0.15rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.9em;
  }

  .content :global(pre) {
    background-color: #383633;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    overflow-x: auto;
  }

  .content :global(pre code) {
    background: none;
    padding: 0;
  }
</style>
