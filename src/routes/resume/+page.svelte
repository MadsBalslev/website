<script lang="ts">
  import resume from "$lib/Resume";
  import socials from "$lib/Socials";
  import { Card } from "$lib/components/"
  import { IconMapPin, IconMail, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-svelte";
</script>

<div class="header">
  <h1>Mads Balslev</h1>
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
           <IconBrandGithub />
        {/if}
        {#if social.logo === "linkedin"}
           <IconBrandLinkedin />
        {/if}
      </a>
    {/each}
  </div>
</div>

<div class="education">
  <h1>Education</h1>
  {#each resume.education as education}
    <Card {...education} subtitle={education.location} />
  {/each}
</div>

<div class="work-experience">
  <h2>Work Experience</h2>
  {#each resume.experience as experience}
    <Card {...experience} subtitle={experience.location} />
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

  @media (max-width: 768px) {
    .header h1 {
      font-size: 2rem;
    }

    .header .socials {
      justify-content: center;
    }
  }
</style>
