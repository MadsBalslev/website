<script lang="ts">
  import resume from "$lib/Resume";
  import socials from "$lib/Socials";
  import { Card } from "$lib/components/"
  import { IconMapPin, IconMail, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-svelte";
</script>

<div class="header">
  <h1>Mads Balslev</h1>
  <p>
    I am a full-stack developer with experience in Ruby on Rails and Svelte, currently working part-time in the software industry while pursuing a MSc in Software Engineering at Aalborg University. My main skills are front and back end development and system architecture.
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
      {#if education.description}
         <p>{education.description}</p>
      {/if}
      <div slot="footer">
        {#if education.gpa}
          <div class="gpa">
            <span class="gpa-score">{education.gpa} / 4.0</span>
          </div>
        {/if}
      </div>
    </Card>
  {/each}
</div>

<div class="work-experience">
  <h2>Work Experience</h2>
  {#each resume.experience as experience}
    <Card {...experience} subtitle={experience.location}>
      {#if experience.description}
        <p>{experience.description}</p>
      {/if}
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
