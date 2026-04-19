import Link from 'next/link'
import { Project } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProjectCard({ project }: { project: Project }) {
  const projectName = getMetafieldValue(project.metadata?.project_name) || project.title
  const description = getMetafieldValue(project.metadata?.short_description)
  const techStack = getMetafieldValue(project.metadata?.tech_stack)
  const featuredImage = project.metadata?.featured_image

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-brand-500 transition-all duration-300"
    >
      {featuredImage && (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={projectName}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
          {projectName}
        </h3>
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        )}
        {techStack && (
          <div className="flex flex-wrap gap-2">
            {techStack.split(',').slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-full"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}