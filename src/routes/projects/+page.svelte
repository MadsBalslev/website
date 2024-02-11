<script lang="ts">
  import projects from "$lib/Projects";
  import { Card } from "$lib/components";
</script>

<h1>Projects</h1>

{#each projects as project}
  <Card {...project}>
    <p>{project.description}</p>
    <div class="actions" slot="footer">
      {#if project.url}
        <a href={project.url} target="_blank" class="project-link" type="button">View Project</a>
      {/if}
    </div>
  </Card>
{/each}

<p class="message">You can also check out all of my unfinished projects on my <a href="https://www.github.com/madsbalslev" target="_blank">GitHub</a></p>

<style>
  .message {
    margin-top: 2rem;
    text-align: center;
  }

  .message a {
    color: #eb5e28;
    text-decoration: underline;
    font-weight: bold;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }

  .project-link {
    padding: .5rem 1rem;
    border: 2px solid #eb5e28;
    color: #fffcf2;
    text-decoration: none;
    background: linear-gradient(to right, #eb5e28 50%, #383633 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .2s ease-out;
  }

  .project-link:hover {
    background-position: left bottom;
  }
</style>
