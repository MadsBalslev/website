<script lang="ts">
  import { fly } from 'svelte/transition'
  import socials from '$lib/Socials'
  import { IconBrandGithub, IconBrandLinkedin, IconArrowRight, IconMail } from '@tabler/icons-svelte'
</script>

<svelte:head>
  <meta property="og:title" content="Mads Balslev — Software Engineer" />
  <meta property="og:description" content="Software Engineer and Consultant at Trifork. Building enterprise AI platforms and delivering customer solutions." />
</svelte:head>

<section class="hero" in:fly={{ y: 20, duration: 400 }}>
  <p class="greeting">Hi, I'm</p>
  <h1>Mads Balslev</h1>
  <p class="role">Software Engineer <span class="separator">/</span> Consultant</p>
  <p class="bio">
    Building enterprise AI platforms and delivering customer solutions at
    <a href="https://trifork.com" target="_blank" rel="noopener">Trifork</a>.
    Primarily working on <a href="https://trifork.com/corax-ai" target="_blank" rel="noopener">Corax AI</a> with
    Next.js, React, and Python.
  </p>

  <div class="socials">
    {#each socials as social}
      <a href={social.url} target="_blank" rel="noopener" class="social-link" aria-label={social.title}>
        {#if social.logo === 'github'}
          <IconBrandGithub size={22} />
        {/if}
        {#if social.logo === 'linkedin'}
          <IconBrandLinkedin size={22} />
        {/if}
      </a>
    {/each}
  </div>
</section>

<section class="highlights" in:fly={{ y: 20, duration: 400, delay: 150 }}>
  <a href="/projects" class="highlight-card">
    <h3>Projects</h3>
    <p>Things I've built and worked on</p>
    <span class="arrow"><IconArrowRight size={18} /></span>
  </a>
  <a href="/resume" class="highlight-card">
    <h3>Resume</h3>
    <p>Experience, education, and skills</p>
    <span class="arrow"><IconArrowRight size={18} /></span>
  </a>
</section>

<section class="contact" in:fly={{ y: 20, duration: 400, delay: 300 }}>
  <h2>Get in touch</h2>
  <p>Have a project in mind or just want to say hi?</p>
  <div class="contact-links">
    <a href="mailto:madspbalslev@gmail.com" class="contact-link">
      <IconMail size={20} />
      <span>madspbalslev@gmail.com</span>
    </a>
    <a href="https://www.linkedin.com/in/madsbalslev/" target="_blank" rel="noopener" class="contact-link">
      <IconBrandLinkedin size={20} />
      <span>LinkedIn</span>
    </a>
  </div>
</section>

<style>
  .hero {
    padding: var(--space-3xl) 0 var(--space-2xl);
  }

  .greeting {
    color: var(--color-accent);
    font-size: var(--font-size-base);
    margin: 0 0 var(--space-sm);
    font-weight: 500;
  }

  h1 {
    font-size: var(--font-size-4xl);
    margin: 0;
    line-height: var(--line-height-tight);
  }

  .role {
    font-size: var(--font-size-xl);
    color: var(--color-text-secondary);
    margin: var(--space-sm) 0 var(--space-lg);
  }

  .separator {
    color: var(--color-accent);
  }

  .bio {
    font-size: var(--font-size-base);
    line-height: var(--line-height-normal);
    color: var(--color-text-secondary);
    max-width: 560px;
    margin: 0 0 var(--space-xl);
  }

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

  .highlights {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
    padding-bottom: var(--space-2xl);
  }

  .highlight-card {
    padding: var(--space-lg) var(--space-xl);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    text-decoration: none;
    position: relative;
    transition: all var(--transition-normal);
  }

  .highlight-card:hover {
    border-color: var(--color-text-muted);
    transform: translateY(-2px);
  }

  .highlight-card h3 {
    margin: 0 0 var(--space-xs);
    font-size: var(--font-size-lg);
    color: var(--color-text);
  }

  .highlight-card p {
    margin: 0;
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
  }

  .highlight-card .arrow {
    position: absolute;
    top: var(--space-lg);
    right: var(--space-xl);
    color: var(--color-text-muted);
    transition: all var(--transition-fast);
  }

  .highlight-card:hover .arrow {
    color: var(--color-accent);
    transform: translateX(3px);
  }

  .contact {
    padding: var(--space-2xl) 0;
    border-top: 1px solid var(--color-border);
  }

  .contact h2 {
    font-size: var(--font-size-2xl);
    margin: 0 0 var(--space-xs);
  }

  .contact > p {
    color: var(--color-text-muted);
    margin: 0 0 var(--space-lg);
    font-size: var(--font-size-sm);
  }

  .contact-links {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-lg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    transition: all var(--transition-fast);
  }

  .contact-link:hover {
    color: var(--color-text);
    border-color: var(--color-accent);
    background-color: var(--color-surface);
  }

  @media (max-width: 768px) {
    .hero {
      padding: var(--space-2xl) 0;
    }

    h1 {
      font-size: var(--font-size-3xl);
    }

    .highlights {
      grid-template-columns: 1fr;
    }
  }
</style>
