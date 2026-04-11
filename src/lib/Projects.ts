type Project = {
  title: string
  subtitle?: string
  keywords: string[]
  description: string
  url?: string
}

const projects: Project[] = [
  {
    title: 'Drone-Based Biomass Volume Estimation',
    subtitle: 'MSc Thesis',
    description: 'Built a semi-autonomous pipeline for biomass stockpile volume estimation at power plants, in collaboration with HOFOR Amagerværket and Asnæsværket. A DJI Mavic 3M drone captures aerial imagery, WebODM generates orthophotos and 3D point clouds, and a fine-tuned YOLOv11 model segments the piles for volumetric calculation via Delaunay Triangulation. Also created the PSS (Pile Segmentation Set) dataset: 482 RGB + 482 NIR images. Designed to run on a Raspberry Pi 5 for offline, on-site deployment.',
    keywords: ['Python', 'YOLOv11', 'Computer Vision', 'WebODM', 'Point Clouds', 'UAVs']
  },
  {
    title: 'CrowdSPEAK',
    subtitle: 'MSc 1st Semester',
    description: 'A portable crowd microphone system enabling audience members to connect their personal devices directly to the room\'s sound system via WebRTC. This allows anyone in the audience to speak through their phone, with audio passed both to the PA system and online attendees.',
    url: 'https://p7-rust.vercel.app/',
    keywords: ['React', 'TypeScript', 'Next.js', 'WebRTC']
  },
  {
    title: 'Multi-Agent Symptom Evaluation',
    subtitle: 'MSc Mobility Project',
    description: 'Built a multi-agent framework for self-assisted symptom evaluation, where AI agents collaborate to help users assess their symptoms through structured dialogue and medical knowledge bases.',
    keywords: ['Python', 'LLMs', 'Multi-Agent Systems', 'AI']
  },
  {
    title: 'Traffic Forecasting for Saphe',
    subtitle: 'BSc Thesis',
    description: 'Developed a time-series forecasting model in collaboration with Saphe to predict mean traffic speed on highway stretches. The model predicts congestion 15 minutes ahead, enabling the Saphe app to proactively alert users.',
    keywords: ['Python', 'TensorFlow', 'Keras', 'Pandas']
  }
]

export default projects
export type { Project }
