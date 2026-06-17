import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPostMeta } from './types'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.mdx'))

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
    const { data } = matter(raw)
    const slug = file.replace(/\.mdx$/, '')

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      category: data.category,
      image: data.image,
    } satisfies BlogPostMeta
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}
