import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold gradient-text">
            Portfolio
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-brand-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-brand-600 transition-colors font-medium">
              Projects
            </Link>
            <Link href="/skills" className="text-gray-700 hover:text-brand-600 transition-colors font-medium">
              Skills
            </Link>
            <Link href="/experience" className="text-gray-700 hover:text-brand-600 transition-colors font-medium">
              Experience
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}