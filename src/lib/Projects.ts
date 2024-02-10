type Project = {
  title: string
  subtitle?: string
  keywords: string[]
  description: string
  url: string
  logo?: string
}

const projects: Project[] = [
  {
    title: 'CrowdSPEAK',
    subtitle: 'Co-Founder',
    description: 'With CrowdSPEAK we enable the audience to connect directly to the speaker / host, and by that use their personal device (phone / computer) as a personal microphone which will connect to the sound system of the room as well as pass on the audio on to the online audience.',
    url: 'https://p7-rust.vercel.app/',
    logo: 'https://placehold.co/250',
    keywords: ['React', 'TypeScript', 'NextJS', 'WebRTC']
  },
  {
    title: 'Using Time-Series Forecasting To Predict Mean Speed Based on Traffic Data for Saphe',
    subtitle: 'Bachelor Thesis Project',
    description: 'In collaboration with the company Saphe, we have developed a time-series forecasting model to predict the mean speed of traffic based on historical traffic data. The model is used to predict the mean speed of traffic for the next 15 minutes, and the predictions are used to provide real-time traffic information to the users of the Saphe app.',
    url: '/projects',
    logo: 'https://placehold.co/250',
    keywords: ['Python', 'Pandas', 'TensorFlow', 'Keras']
  }
]

export default projects
export type { Project }
