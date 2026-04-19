// app/projects/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const projectName = getMetafieldValue(project.metadata?.project_name) || project.title
  const shortDesc = getMetafieldValue(project.metadata?.short_description)
  const fullDesc = getMetafieldValue(project.metadata?.full_description)
  const techStack = getMetafieldValue(project.metadata?.tech_stack)
  const liveUrl = getMetafieldValue(project.metadata?.live_url)
  const githubUrl = getMetafieldValue(project.metadata?.github_url)
  const featuredImage = project.metadata?.featured_image
  const screenshots = project.metadata?.screenshots

  return (
    <article>
      {/* Hero */}
      <div className="gradient-bg text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-300 hover:text-white mb-6"
          >
            ← Back to projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{projectName}</h1>
          {shortDesc && <p className="text-lg text-gray-300 mb-6">{shortDesc}</p>}
          <div className="flex flex-wrap gap-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Live →
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {featuredImage && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
            <img
              src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={projectName}
              width={1000}
              height={562}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tech Stack */}
        {techStack && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.split(',').map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-brand-50 text-brand-700 font-medium rounded-full"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        {fullDesc && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About this Project</h2>
            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: fullDesc }}
            />
          </div>
        )}

        {/* Screenshots */}
        {screenshots && screenshots.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {screenshots.map((shot, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-gray-200">
                  <img
                    src={`${shot.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                    alt={`${projectName} screenshot ${i + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}