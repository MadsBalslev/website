<script>
  import projects from "$lib/Projects";
  import { ProjectCard } from "$lib/components";
</script>

<h1>Projects</h1>

{#each projects as project}
  <ProjectCard {project} />
{/each}
