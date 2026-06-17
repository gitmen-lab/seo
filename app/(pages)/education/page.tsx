import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Sleep Education',
  description: 'Sleep science explained in plain language, backed by research.',
}

export default function EducationPage() {
  const posts = getAllPosts()

  return (
    <>
      <PageHeader
        title="Sleep Education"
        description="Understand the science behind sleep position, mattress firmness, and materials so you can shop with confidence."
      />
      <div className="container-page py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/education/${post.slug}`}
              className="flex flex-col rounded-xl border border-navy-100 p-6 transition-colors hover:border-sage-300 hover:bg-sage-50"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-sage-600">{post.category}</p>
              <h2 className="mt-2 font-serif text-lg font-bold text-navy-900">{post.title}</h2>
              <p className="mt-2 text-sm text-navy-600">{post.description}</p>
              <span className="mt-4 text-xs text-navy-400">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
