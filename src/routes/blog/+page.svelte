<script lang="ts">
  let { data } = $props()
</script>

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
  .empty {
    text-align: center;
    color: #ccc5b9;
    margin-top: 2rem;
  }

  .posts {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .posts li a {
    display: block;
    padding: 1.5rem 2rem;
    background-color: #383633;
    border-radius: 0.7rem;
    text-decoration: none;
    transition: transform 0.2s ease;
  }

  .posts li a:hover {
    transform: translateY(-2px);
  }

  .posts li h2 {
    margin: 0 0 0.5rem;
    color: #fffcf2;
  }

  .posts li p {
    margin: 0 0 0.5rem;
    color: #ccc5b9;
  }

  .posts li time {
    color: #ccc5b9;
    font-size: 0.85rem;
  }
</style>
