import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostSlugs } from '@/lib/blog'

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getAllPosts().find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function EducationPostPage({ params }: { params: { slug: string } }) {
  const post = getAllPosts().find((p) => p.slug === params.slug)
  if (!post) notFound()

  let Post: React.ComponentType
  try {
    Post = (await import(`@/content/blog/${params.slug}.mdx`)).default
  } catch {
    notFound()
  }

  return (
    <article className="container-page py-12">
      <p className="text-xs font-semibold uppercase tracking-wide text-sage-600">{post.category}</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{post.title}</h1>
      <p className="mt-3 text-sm text-navy-500">
        {post.author} &middot; {post.date}
      </p>
      <div className="prose prose-navy mt-8 max-w-2xl">
        <Post />
      </div>
    </article>
  )
}
