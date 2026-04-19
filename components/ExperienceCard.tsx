import { WorkExperience } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

function formatDate(dateString: string): string {
  if (!dateString) return ''
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  } catch {
    return dateString
  }
}

export default function ExperienceCard({ experience }: { experience: WorkExperience }) {
  const companyName = getMetafieldValue(experience.metadata?.company_name)
  const jobTitle = getMetafieldValue(experience.metadata?.job_title)
  const startDate = getMetafieldValue(experience.metadata?.start_date)
  const endDate = getMetafieldValue(experience.metadata?.end_date)
  const current = experience.metadata?.current
  const description = getMetafieldValue(experience.metadata?.description)
  const location = getMetafieldValue(experience.metadata?.location)
  const logo = experience.metadata?.company_logo

  return (
    <div className="relative pl-8 pb-8 border-l-2 border-brand-200 last:border-l-transparent last:pb-0">
      <div className="absolute -left-3 top-0 w-6 h-6 bg-brand-500 rounded-full border-4 border-white shadow-md" />
      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4 mb-4">
          {logo && (
            <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img
                src={`${logo.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
                alt={companyName}
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">{jobTitle}</h3>
            <p className="text-brand-600 font-semibold">{companyName}</p>
            <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-600">
              <span>
                {formatDate(startDate)} - {current ? 'Present' : formatDate(endDate)}
              </span>
              {location && (
                <>
                  <span>•</span>
                  <span>{location}</span>
                </>
              )}
            </div>
          </div>
        </div>
        {description && (
          <p className="text-gray-700 whitespace-pre-line">{description}</p>
        )}
      </div>
    </div>
  )
}