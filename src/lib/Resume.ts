type Position = {
  title: string
  startDate: Date
  endDate?: Date
}

type ResumeItem = {
  startDate: Date
  endDate?: Date
  title: string
  positions?: Position[]
  keywords?: string[]
  description?: string
  location?: string
  gpa?: number
}

type Resume = {
  education: ResumeItem[]
  experience: ResumeItem[]
}

const resume: Resume = {
  education: [
    {
      startDate: new Date('2023-09-01'),
      endDate: new Date('2025-06-30'),
      title: 'MSc in Software Engineering',
      location: 'Aalborg University'
    },
    {
      startDate: new Date('2020-09-01'),
      endDate: new Date('2023-06-30'),
      title: 'BSc in Software Engineering',
      gpa: 3.4,
      location: 'Aalborg University',
      keywords: ['Machine Intelligence', 'SCRUM', 'Project Management', 'Compilers', 'Semantics', 'Frontend Architecture', 'Backend Architecture'],
      description: 'In my bachelors degree I gained fundamental knowledge in most parts of computer science. This all culminated in my bachelor thesis, "Using Time-Series Forecasting To Predict Mean Speed Based on Traffic Data". This was a collaboration with the company Saphe, to build a ML-model for them to predict the traffic on a given stretch of highway within the near future, based on previous traffic data, which in the end would let them alert users of their app of any congestion on their route before it would happen.'
    }
  ],
  experience: [
    {
      startDate: new Date('2024-09-01'),
      title: 'Trifork',
      location: 'Trifork',
      positions: [
        {
          title: 'Software Engineer / Consultant',
          startDate: new Date('2025-08-01'),
        },
        {
          title: 'Student Worker',
          startDate: new Date('2024-09-01'),
          endDate: new Date('2025-07-31'),
        }
      ],
      description: 'Working primarily on Corax AI, an enterprise platform for configuring, deploying, and monitoring AI capabilities. Also delivering customer projects across various domains. Building with Next.js/React and Python/FastAPI for Corax, and C#/.NET and Next.js/React for customer projects.',
      keywords: ['Next.js', 'React', 'Python', 'FastAPI', 'C#', '.NET', 'TypeScript']
    },
    {
      startDate: new Date('2022-01-01'),
      endDate: new Date('2024-08-31'),
      title: 'Student Worker / Full Stack Developer',
      location: 'TeamEffect Aps',
      description: 'As a Full Stack developer at TeamEffect my main tasks were implementing new features in a Ruby on Rails application. This included adding entirely new pages, updating existing ones, and implementing custom APIs for select customers. I was also one of the main developers in migrating the platform from Rails 5 to Rails 7 and the entire frontend from Rails ERB pages to Svelte.',
      keywords: ['Svelte', 'Ruby on Rails', 'PostgreSQL', 'Redis', 'Docker', 'CI/CD', 'Git']
    }
  ]
}

export type { Resume, ResumeItem, Position }
export default resume
