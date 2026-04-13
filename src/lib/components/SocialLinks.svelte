<script lang="ts">
  import type { Social } from '$lib/Socials'

  let {
    socials,
    size = 20,
    variant = 'icon'
  }: {
    socials: Social[]
    size?: number
    variant?: 'icon' | 'inline'
  } = $props()
</script>

<div class="socials" class:inline={variant === 'inline'}>
  {#each socials as social}
    <a href={social.url} target="_blank" rel="noopener" class="social-link" aria-label={social.title}>
      <social.icon {size} />
      {#if variant === 'inline'}
        <span>{social.title}</span>
      {/if}
    </a>
  {/each}
</div>

<style>
  .socials {
    display: flex;
    gap: var(--space-sm);
  }

  .socials.inline {
    gap: var(--space-md);
    flex-wrap: wrap;
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

  .inline .social-link {
    width: auto;
    height: auto;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-lg);
    font-size: var(--font-size-sm);
  }
</style>
