<script lang="ts">
  let { title }: { title: string } = $props()
</script>

<h2 class="section-header">{title}</h2>

<style>
  .section-header {
    font-size: var(--font-size-xl);
    color: var(--color-text);
    margin: var(--space-2xl) 0 var(--space-sm);
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid var(--color-border);
  }
</style>
