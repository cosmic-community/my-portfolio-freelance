# My Portfolio Freelance

![App Preview](https://imgix.cosmicjs.com/71aa6620-3b93-11f1-9a36-6beee623c5b3-autopilot-photo-1600880292203-757bb62b4baf-1776563987794.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive developer portfolio built with Next.js 16 and Cosmic CMS. Showcase your projects, skills, and professional experience with style.

## Features

- 🎨 Modern, responsive design with gradient accents
- 💼 Dynamic projects showcase with detailed pages
- 🛠️ Skills organized by category with proficiency levels
- 🏢 Professional work experience timeline
- 📱 Fully mobile-responsive
- ⚡ Fast performance with Next.js 16 App Router
- 🎯 SEO optimized
- 🔄 Content managed via Cosmic CMS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e436a31e803e708f6aad77&clone_repository=69e437ab1e803e708f6aadae)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience.
>
> User instructions: A developer portfolio with projects, skills and work experience"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Portfolio Freelance". The content is managed in Cosmic CMS with the following object types: projects, skills, work-experience. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A developer portfolio with projects, skills and work experience

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **Cosmic SDK** - Official JavaScript SDK

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the portfolio content model

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all projects
const { objects } = await cosmic.objects
  .find({ type: 'projects' })
  .depth(1)

// Fetch featured projects
const { objects } = await cosmic.objects
  .find({ type: 'projects', 'metadata.featured': true })
  .depth(1)
```

## Cosmic CMS Integration

This application uses three content types: `projects`, `skills`, and `work-experience`. All content is fetched server-side using the Cosmic SDK with depth parameters for related data.

## Deployment Options

- **Vercel**: Connect your repo and add environment variables
- **Netlify**: Same process with build command `bun run build`

<!-- README_END -->