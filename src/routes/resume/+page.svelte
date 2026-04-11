<script lang="ts">
  import resume from "$lib/Resume";
  import socials from "$lib/Socials";
  import { Card } from "$lib/components/"
  import { IconMapPin, IconMail, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-svelte";
</script>

<div class="header">
  <h1>Mads Balslev</h1>
  <p>
    Software Engineer and Consultant at Trifork, building enterprise AI platforms and delivering customer solutions. MSc in Software Engineering from Aalborg University. Experienced across the full stack with Next.js/React, Python/FastAPI, C#/.NET, and Ruby on Rails.
  </p>
  <div class="location">
    <IconMapPin />
    <p>Aalborg, Denmark</p>
  </div>
  <div class="email">
    <IconMail />
    <a href="mailto:madspbalslev@gmail.com">madspbalslev@gmail.com</a>
  </div>
  <div class="socials">
    {#each socials as social}
      <a href={social.url} target="_blank" class="social">
        {#if social.logo === "github"}
           <IconBrandGithub size={40} />
        {/if}
        {#if social.logo === "linkedin"}
           <IconBrandLinkedin size={40} />
        {/if}
      </a>
    {/each}
  </div>
</div>

<div class="education">
  <h1>Education</h1>
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
            <span class="gpa-score">{education.gpa} / 4.0</span>
          </div>
        {/if}
      {/snippet}
    </Card>
  {/each}
</div>

<div class="work-experience">
  <h2>Work Experience</h2>
  {#each resume.experience as experience}
    <Card {...experience} subtitle={experience.location}>
      {#snippet children()}
        {#if experience.description}
          <p>{experience.description}</p>
        {/if}
      {/snippet}
    </Card>
  {/each}
</div>

<style>
  .header {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
  }

  .header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.2rem;
  }

  .header .location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .header .email {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .header .socials {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .header .socials .social {
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #eb5e28;
    color: #fffcf2;
    text-decoration: none;
  }

  .gpa {
    display: flex;
    justify-content: flex-end;
  }

  .gpa-score {
    padding: .5rem 1rem;
    border: 2px solid #eb5e28;
    color: #fffcf2;
    text-decoration: none;
  }

  .gpa-score::before {
    content: "GPA: ";
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .header h1 {
      font-size: 2rem;
    }

    .header .socials {
      justify-content: center;
    }
  }
</style>
