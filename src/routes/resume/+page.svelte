<script lang="ts">
  import resume from "$lib/Resume";
  import socials from "$lib/Socials";
  import { ExperienceCard, EducationCard, SocialLinks, SectionHeader } from "$lib/components/"
  import { IconMapPin, IconMail } from "@tabler/icons-svelte";
</script>

<svelte:head>
  <title>Resume - Mads Balslev</title>
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
  <SocialLinks {socials} />
</div>

<section>
  <SectionHeader title="Experience" />
  {#each resume.experience as experience}
    <ExperienceCard {experience} />
  {/each}
</section>

<section>
  <SectionHeader title="Education" />
  {#each resume.education as education}
    <EducationCard {education} />
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
    margin: var(--space-md) 0 var(--space-lg);
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

  @media (max-width: 768px) {
    .header h1 {
      font-size: var(--font-size-2xl);
    }
  }
</style>
