<script lang="ts">
  let { data } = $props()
</script>

<svelte:head>
  <title>Blog -Mads Balslev</title>
</svelte:head>

<h1>Blog</h1>

{#if data.posts.length === 0}
  <p class="empty">No posts yet. Check back soon.</p>
{:else}
  <ul class="posts">
    {#each data.posts as post}
      <li>
        <a href="/blog/{post.slug}">
          <h2>{post.title}</h2>
          {#if post.description}
            <p>{post.description}</p>
          {/if}
          <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        </a>
      </li>
    {/each}
  </ul>
{/if}

<style>
  h1 {
    font-size: var(--font-size-3xl);
    margin: 0 0 var(--space-lg);
  }

  .empty {
    text-align: center;
    color: var(--color-text-muted);
    margin-top: var(--space-2xl);
  }

  .posts {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .posts li a {
    display: block;
    padding: var(--space-lg) var(--space-xl);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    text-decoration: none;
    transition: all var(--transition-normal);
  }

  .posts li a:hover {
    border-color: var(--color-text-muted);
    transform: translateY(-2px);
  }

  .posts li h2 {
    margin: 0 0 var(--space-sm);
    font-size: var(--font-size-lg);
    color: var(--color-text);
  }

  .posts li p {
    margin: 0 0 var(--space-sm);
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
  }

  .posts li time {
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
  }
</style>
