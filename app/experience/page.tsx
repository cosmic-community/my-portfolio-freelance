import ExperienceCard from '@/components/ExperienceCard'
import { getWorkExperience } from '@/lib/cosmic'

export const metadata = {
  title: 'Experience | My Portfolio Freelance',
  description: 'My professional work experience',
}

export default async function ExperiencePage() {
  const experiences = await getWorkExperience()

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Work <span className="gradient-text">Experience</span>
        </h1>
        <p className="text-lg text-gray-600">
          My professional journey and career highlights
        </p>
      </div>

      {experiences.length > 0 ? (
        <div className="mt-12">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600">No work experience listed yet.</p>
        </div>
      )}
    </div>
  )
}