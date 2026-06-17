export default function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="border-b border-navy-100 bg-navy-50">
      <div className="container-page py-12">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-navy-600">{description}</p>}
      </div>
    </div>
  )
}
