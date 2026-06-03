import Link from 'next/link'
import { NEXUS_LINKS } from '../config/links'
import { NexusLogo } from './nexus-logo'

const resourcesCol1 = [
  { label: 'Getting Started', href: '/quickstart' },
  { label: 'Introduction', href: '/introduction' },
  { label: 'Build a Pipeline', href: '/guides/build-a-pipeline' },
]

const resourcesCol2 = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Python SDK', href: '/sdk/python' },
  { label: 'API Reference', href: '/api/overview' },
]

const communityLinks = [
  { label: 'Contributing', href: '/contributing' },
  { label: 'Dashboard', href: '/dashboard/overview' },
  { label: 'GitHub', href: NEXUS_LINKS.repo, external: true },
]

function FooterLink({
  href,
  label,
  external,
}: {
  href: string
  label: string
  external?: boolean
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="nexus-footer__link">
        {label}
      </a>
    )
  }

  return (
    <Link href={href} className="nexus-footer__link">
      {label}
    </Link>
  )
}

export function DocsFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="nexus-footer">
      <div className="nexus-footer__inner">
        <div className="nexus-footer__brand">
          <Link href="/introduction" className="nexus-footer__logo">
            <NexusLogo />
          </Link>

          <p className="nexus-footer__copyright">Nexus © {year}</p>
          <p className="nexus-footer__license">MIT License · Open source</p>
        </div>

        <div className="nexus-footer__column">
          <h3 className="nexus-footer__heading">Resources</h3>
          <div className="nexus-footer__links-grid">
            <ul className="nexus-footer__links">
              {resourcesCol1.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
            <ul className="nexus-footer__links">
              {resourcesCol2.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="nexus-footer__column">
          <h3 className="nexus-footer__heading">Community</h3>
          <ul className="nexus-footer__links">
            {communityLinks.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href} label={item.label} external={item.external} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
