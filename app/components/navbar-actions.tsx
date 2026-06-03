import { NEXUS_LINKS } from '../config/links'
import { StarGithubButton } from './star-github-button'

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function NavbarActions() {
  return (
    <div className="nexus-navbar-actions">
      <StarGithubButton />
      <a href={NEXUS_LINKS.try} className="nexus-try-btn">
        Try Nexus
        <ArrowIcon />
      </a>
    </div>
  )
}
