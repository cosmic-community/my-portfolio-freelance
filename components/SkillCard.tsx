import { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function SkillCard({ skill }: { skill: Skill }) {
  const skillName = getMetafieldValue(skill.metadata?.skill_name) || skill.title
  const proficiency = getMetafieldValue(skill.metadata?.proficiency)
  const years = skill.metadata?.years_experience
  const icon = skill.metadata?.icon

  const proficiencyColors: Record<string, string> = {
    'Beginner': 'bg-yellow-100 text-yellow-800',
    'Intermediate': 'bg-blue-100 text-blue-800',
    'Advanced': 'bg-green-100 text-green-800',
    'Expert': 'bg-purple-100 text-purple-800',
  }

  const colorClass = proficiencyColors[proficiency] || 'bg-gray-100 text-gray-800'

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-brand-500 transition-all duration-300">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img
              src={`${icon.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
              alt={skillName}
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{skillName}</h3>
          <div className="flex items-center gap-2 flex-wrap">
            {proficiency && (
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClass}`}>
                {proficiency}
              </span>
            )}
            {years !== undefined && years !== null && (
              <span className="text-sm text-gray-600">
                {years} {Number(years) === 1 ? 'year' : 'years'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}