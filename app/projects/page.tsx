import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/lib/cosmic'

export const metadata = {
  title: 'Projects | My Portfolio Freelance',
  description: 'Browse all my projects',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          All <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-lg text-gray-600">
          A collection of work I'm proud to showcase
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600">No projects available yet.</p>
        </div>
      )}
    </div>
  )
}