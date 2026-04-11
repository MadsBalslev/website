<script lang="ts">
  import resume from "$lib/Resume";
  import socials from "$lib/Socials";
  import { Card } from "$lib/components/"
  import { IconMapPin, IconMail, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-svelte";
</script>

<svelte:head>
  <title>Resume — Mads Balslev</title>
</svelte:head>

<div class="header">
  <h1>Mads Balslev</h1>
  <p class="bio">
    Software Engineer and Consultant at Trifork, building enterprise AI platforms and delivering customer solutions. MSc in Software Engineering from Aalborg University. Experienced across the full stack with Next.js/React, Python/FastAPI, C#/.NET, and Ruby on Rails.
  </p>
  <div class="meta">
    <div class="meta-item">
      <IconMapPin size={18} />
      <span>Aalborg, Denmark</span>
    </div>
    <div class="meta-item">
      <IconMail size={18} />
      <a href="mailto:madspbalslev@gmail.com">madspbalslev@gmail.com</a>
    </div>
  </div>
  <div class="socials">
    {#each socials as social}
      <a href={social.url} target="_blank" rel="noopener" class="social-link" aria-label={social.title}>
        {#if social.logo === "github"}
           <IconBrandGithub size={20} />
        {/if}
        {#if social.logo === "linkedin"}
           <IconBrandLinkedin size={20} />
        {/if}
      </a>
    {/each}
  </div>
</div>

<section>
  <h2 class="section-title">Experience</h2>
  {#each resume.experience as experience}
    <Card {...experience} subtitle={experience.location}>
      {#snippet children()}
        {#if experience.description}
          <p>{experience.description}</p>
        {/if}
      {/snippet}
    </Card>
  {/each}
</section>

<section>
  <h2 class="section-title">Education</h2>
  {#each resume.education as education}
    <Card {...education} subtitle={education.location}>
      {#snippet children()}
        {#if education.description}
           <p>{education.description}</p>
        {/if}
      {/snippet}
      {#snippet footer()}
        {#if education.gpa}
          <div class="gpa">
            <span class="gpa-badge">GPA: {education.gpa} / 4.0</span>
          </div>
        {/if}
      {/snippet}
    </Card>
  {/each}
</section>

<style>
  .header {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--space-2xl);
  }

  .header h1 {
    font-size: var(--font-size-3xl);
    margin: 0 0 var(--space-md);
  }

  .bio {
    max-width: 600px;
    line-height: var(--line-height-normal);
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    margin-top: var(--space-md);
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
  }

  .meta-item a {
    color: var(--color-accent);
  }

  .socials {
    display: flex;
    gap: var(--space-sm);
    margin-top: var(--space-lg);
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

  .section-title {
    font-size: var(--font-size-xl);
    color: var(--color-text);
    margin: var(--space-2xl) 0 var(--space-sm);
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid var(--color-border);
  }

  .gpa {
    display: flex;
    justify-content: flex-end;
    margin-top: var(--space-md);
  }

  .gpa-badge {
    padding: var(--space-xs) var(--space-md);
    border: 1px solid var(--color-accent);
    border-radius: var(--radius-sm);
    color: var(--color-accent);
    font-size: var(--font-size-sm);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .header h1 {
      font-size: var(--font-size-2xl);
    }
  }
</style>
