import { Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import themeConfig from '../../theme.config'
import { DocsFooter } from '../components/docs-footer'
import { NavbarActions } from '../components/navbar-actions'
import { NexusLogo } from '../components/nexus-logo'
import { TocHeader } from '../components/toc-header'

const navbar = (
  <Navbar logo={<NexusLogo />}>
    <NavbarActions />
  </Navbar>
)

const footer = <DocsFooter />

export default async function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <Layout
      navbar={navbar}
      footer={footer}
      pageMap={await getPageMap()}
      editLink={null}
      feedback={{ content: null }}
      toc={{
        title: <TocHeader />,
        backToTop: false,
      }}
      nextThemes={themeConfig.nextThemes}
      darkMode={themeConfig.darkMode}
    >
      {children}
    </Layout>
  )
}
