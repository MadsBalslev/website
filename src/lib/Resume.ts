type ResumeItem = {
  startDate: Date
  endDate?: Date
  title: string
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
      startDate: new Date('2022-01-01'),
      title: 'Full Stack Developer',
      location: 'TeamEffect Aps',
      description: 'As a Full Stack developer at TeamEffect my main tasks was to implement new features in our Ruby on Rails application. This includes adding entirely new pages as well as updating existing pages. I have also been tasked with implementing custom API\'s for select customers, to access the app through their own internal service. Further, I was also one of the main developers in the task of migrating our entire platform from Rails 5 to Rails 7 as well as migrating the entire frontend from Rails ERB pages to the more modern Svelte.',
      keywords: ['Svelte', 'Ruby on Rails', 'Postgresql', 'Redis', 'Docker', 'CI/CD', 'Git']
    }
  ]
}

export type { Resume, ResumeItem}
export default resume
