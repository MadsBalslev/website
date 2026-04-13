import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-svelte'

type Social = {
  title: string
  url: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
}

const socials: Social[] = [
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/madsbalslev/',
    icon: IconBrandLinkedin
  },
  {
    title: 'GitHub',
    url: 'https://www.github.com/madsbalslev/',
    icon: IconBrandGithub
  }
]

export default socials
export type { Social }
