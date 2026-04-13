<script lang="ts">
  import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-svelte'

  let { socials, size = 20 }: { socials: { title: string; url: string; logo: string }[]; size?: number } = $props()
</script>

<div class="socials">
  {#each socials as social}
    <a href={social.url} target="_blank" rel="noopener" class="social-link" aria-label={social.title}>
      {#if social.logo === 'github'}
        <IconBrandGithub {size} />
      {/if}
      {#if social.logo === 'linkedin'}
        <IconBrandLinkedin {size} />
      {/if}
    </a>
  {/each}
</div>

<style>
  .socials {
    display: flex;
    gap: var(--space-sm);
  }

  .social-link {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    transition: all var(--transition-fast);
  }

  .social-link:hover {
    color: var(--color-text);
    border-color: var(--color-accent);
    background-color: var(--color-surface);
  }
</style>
