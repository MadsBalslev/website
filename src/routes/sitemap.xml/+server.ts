const site = 'https://madsbalslev.com'

const staticPages = [
  { path: '', changefreq: 'monthly' },
  { path: '/projects', changefreq: 'monthly' },
  { path: '/resume', changefreq: 'monthly' },
  { path: '/uses', changefreq: 'monthly' }
]

export async function GET() {
  const today = new Date().toISOString().split('T')[0]

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
      <loc>${site}${page.path}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
    </url>`
    ),
    ...blogPosts.map(
      (post) => `
    <url>
      <loc>${site}/blog/${post.slug}</loc>
      <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
      <changefreq>yearly</changefreq>
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
