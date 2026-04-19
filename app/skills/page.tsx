import SkillCard from '@/components/SkillCard'
import { getSkills, getMetafieldValue } from '@/lib/cosmic'
import { Skill } from '@/types'

export const metadata = {
  title: 'Skills | My Portfolio Freelance',
  description: 'My technical skills and expertise',
}

export default async function SkillsPage() {
  const skills = await getSkills()

  // Group by category
  const grouped: Record<string, Skill[]> = {}
  skills.forEach((skill) => {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    if (!grouped[category]) {
      grouped[category] = []
    }
    const categorySkills = grouped[category]
    if (categorySkills) {
      categorySkills.push(skill)
    }
  })

  const categories = Object.keys(grouped).sort()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          My <span className="gradient-text">Skills</span>
        </h1>
        <p className="text-lg text-gray-600">
          Technologies and tools I work with
        </p>
      </div>

      {skills.length > 0 ? (
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = grouped[category]
            if (!categorySkills || categorySkills.length === 0) return null

            return (
              <div key={category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600">No skills listed yet.</p>
        </div>
      )}
    </div>
  )
}