<script lang="ts">
	import type { Project } from "$lib/Projects"

  export let project: Project
</script>

<div class="project-card">
  <div class="header">
    <h2>{project.title}</h2>
    <div class="technologies">
      {#each project.technologies as technology}
        <span>{technology}</span>
      {/each}
    </div>
  </div>
  <div class="description">
    <p>{project.description}</p>
  </div>
  <div class="actions">
    <a href={project.href} target="_blank" class="project-link" type="button">View Project</a>
  </div>
</div>


<style>
  .project-card {
    padding: 2rem 2.5rem;
    margin: 1.5rem 0;
    border-radius: .7rem;
    background-color: #383633;

    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    flex-direction: column;
  }

  .header h2 {
    margin: 0;
    color: #fffcf2;
  }

  .technologies {
    margin-top: .5rem;
    display: flex;
    gap: .8rem;
    color: #ccc5b9;
  }

  .technologies span {
    padding: 0 .5rem;
    border: 1px solid #ccc5b9;
    border-radius: .3rem;
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
