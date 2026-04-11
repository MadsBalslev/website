export async function load() {
  const postFiles = import.meta.glob('/src/content/blog/*.md', { eager: true })

  const posts = Object.entries(postFiles)
    .map(([path, post]: [string, any]) => ({
      slug: path.split('/').pop()?.replace('.md', '') ?? '',
      title: post.metadata?.title ?? 'Untitled',
      date: post.metadata?.date ?? '',
      description: post.metadata?.description ?? '',
      published: post.metadata?.published ?? false
    }))
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return { posts }
}
