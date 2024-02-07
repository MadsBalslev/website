<script>
  export let to = "/"
  export let active = false
</script>

<a href={to} class="{active ? 'active' : ''}">
  <slot></slot>
</a>

<style>
  a {
    color: #CCC5B9;
    text-decoration: none;
  }

  a:hover::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background-color: #EB5E28;
  }

  a.active {
    color: #fffcf2;
  }

  a.active::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background-color: #EB5E28;
  }
</style>
