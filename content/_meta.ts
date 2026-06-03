import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  index: {
    title: 'Nexus',
    display: 'hidden',
  },
  '---introduction': { type: 'separator', title: 'Introduction' },
  introduction: 'What is Nexus?',
  quickstart: 'Quickstart',
  concepts: 'Core Concepts',
  sdk: 'SDK Reference',
  api: 'API Reference',
  guides: 'Guides',
  dashboard: 'Dashboard',
  deployment: 'Deployment',
  '---more': { type: 'separator', title: 'More' },
  faq: 'FAQ',
  contributing: 'Contributing',
}

export default meta
