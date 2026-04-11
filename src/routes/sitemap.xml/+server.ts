const site = 'https://madsbalslev.com'

const staticPages = ['', '/projects', '/resume', '/uses']

export async function GET() {
  const postFiles = import.meta.glob('/src/content/blog/*.md', { eager: true })

  const blogPosts = Object.entries(postFiles)
    .map(([path, post]: [string, any]) => ({
      slug: path.split('/').pop()?.replace('.md', '') ?? '',
      published: post.metadata?.published ?? false,
      date: post.metadata?.date ?? ''
    }))
    .filter((p) => p.published)

  const urls = [
    ...staticPages.map(
      (page) => `
    <url>
      <loc>${site}${page}</loc>
    </url>`
    ),
    ...blogPosts.map(
      (post) => `
    <url>
      <loc>${site}/blog/${post.slug}</loc>
      <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
    </url>`
    )
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}
</urlset>`

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
