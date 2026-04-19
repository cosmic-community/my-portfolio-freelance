import Link from 'next/link'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'
import { getFeaturedProjects, getProjects, getSkills } from '@/lib/cosmic'

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects()
  const allProjects = await getProjects()
  const skills = await getSkills()

  const projectsToShow = featuredProjects.length > 0 ? featuredProjects.slice(0, 3) : allProjects.slice(0, 3)
  const topSkills = skills.slice(0, 6)

  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Featured Projects
              </h2>
              <p className="text-gray-600">Check out some of my recent work</p>
            </div>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold"
            >
              View all →
            </Link>
          </div>
          {projectsToShow.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsToShow.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No projects available yet.</p>
          )}
        </div>
      </section>

      {/* Top Skills */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                My Skills
              </h2>
              <p className="text-gray-600">Technologies I work with</p>
            </div>
            <Link
              href="/skills"
              className="hidden md:inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold"
            >
              View all →
            </Link>
          </div>
          {topSkills.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No skills listed yet.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-300 mb-8">
            Have a project in mind? I'd love to hear about it.
          </p>
          <Link
            href="/experience"
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View My Experience
          </Link>
        </div>
      </section>
    </>
  )
}