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
  gpaScale?: string
}

type Resume = {
  education: ResumeItem[]
  experience: ResumeItem[]
}

const resume: Resume = {
  education: [
    {
      startDate: new Date('2023-09-01'),
      endDate: new Date('2025-06-19'),
      title: 'MSc in Engineering (Software), Cand.Polyt.',
      location: 'Aalborg University',
      gpa: 10.3,
      gpaScale: '12',
      keywords: ['Machine Intelligence', 'Distributed Systems', 'Computer Vision', 'Multi-Agent Systems', 'Entrepreneurship', 'Mobile HCI'],
      description: 'Thesis: "Using UAVs to Detect and Calculate Biomass Stockpile Volumes at Power Plants". A semi-autonomous system using drones and YOLOv11 for biomass inventory management, developed in collaboration with Danish power plants.'
    },
    {
      startDate: new Date('2020-09-01'),
      endDate: new Date('2023-06-20'),
      title: 'BSc in Engineering (Software)',
      gpa: 9.1,
      gpaScale: '12',
      location: 'Aalborg University',
      keywords: ['Machine Intelligence', 'Compilers', 'Semantics', 'Security', 'Database Systems', 'Backend Architecture'],
      description: 'Bachelor\'s thesis: "Using Time-Series Forecasting To Predict Mean Speed Based on Traffic Data". Collaboration with Saphe to build a ML model for predicting highway congestion based on historical traffic data.'
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
      title: 'TeamEffect Aps',
      location: 'TeamEffect Aps',
      positions: [
        {
          title: 'Student Worker / Full Stack Developer',
          startDate: new Date('2022-01-01'),
          endDate: new Date('2024-08-31'),
        }
      ],
      description: 'Implemented new features in a Ruby on Rails application, including new pages, API integrations for select customers, and leading the migration from Rails 5 to Rails 7. Also migrated the entire frontend from Rails ERB pages to Svelte.',
      keywords: ['Svelte', 'Ruby on Rails', 'PostgreSQL', 'Redis', 'Docker', 'CI/CD']
    }
  ]
}

export type { Resume, ResumeItem, Position }
export default resume
