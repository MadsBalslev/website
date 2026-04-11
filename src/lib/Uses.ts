type UseItem = {
  name: string
  description?: string
  url?: string
}

type UseCategory = {
  title: string
  items: UseItem[]
}

const uses: UseCategory[] = [
  {
    title: 'Editor & Terminal',
    items: [
      {
        name: 'VS Code',
        description: 'My daily driver for everything from TypeScript to Python.',
        url: 'https://code.visualstudio.com'
      },
      {
        name: 'Ghostty',
        description: 'Fast, native terminal emulator. Clean and minimal.',
        url: 'https://ghostty.org'
      },
      {
        name: 'Tmux',
        description: 'Terminal multiplexer for managing multiple sessions and panes.'
      }
    ]
  },
  {
    title: 'AI Tools',
    items: [
      {
        name: 'Claude Code',
        description: 'CLI-based AI coding assistant. Used extensively for development workflows.',
        url: 'https://claude.ai/claude-code'
      },
      {
        name: 'Codex',
        description: 'OpenAI\'s coding agent for automated tasks.',
        url: 'https://openai.com/index/codex'
      }
    ]
  },
  {
    title: 'Dev Tools',
    items: [
      {
        name: 'OrbStack',
        description: 'Lightweight Docker & Linux VM manager for macOS. Fast alternative to Docker Desktop.',
        url: 'https://orbstack.dev'
      }
    ]
  },
  {
    title: 'Productivity',
    items: [
      {
        name: 'Obsidian',
        description: 'Markdown-based knowledge management. Where all my notes, learning, and project docs live.',
        url: 'https://obsidian.md'
      }
    ]
  },
  {
    title: 'Hardware',
    items: [
      {
        name: 'MacBook Pro M3 Pro',
        description: '36GB RAM. Handles everything from heavy Docker workloads to ML training.'
      }
    ]
  }
]

export default uses
export type { UseCategory, UseItem }
