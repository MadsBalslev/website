import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-svelte-runes'

import type { Component } from 'svelte'

type Social = {
  title: string
  url: string
  icon: Component<{ size?: number }>
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
