<script>
    import '../app.css'
    import '@fontsource-variable/source-code-pro';
    import { page } from '$app/stores'
    import { Navbar } from '$lib/components';
</script>

<Navbar currentRoute={$page.url.pathname} />

<main>
    <slot />
</main>

<footer>
    <p>Created by <a href="/about" class="me">Mads</a> in Aalborg, Denmark</p>
</footer>

<style>
    .me {
        color: #EB5E28;
        text-decoration: none;
        font-weight: bold;
    }
</style>
