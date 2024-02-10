<script>
  import projects from "$lib/Projects";
  import { Card } from "$lib/components";
</script>

<h1>Projects</h1>

{#each projects as project}
  <Card {...project} />
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
</style>
