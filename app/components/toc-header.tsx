import { TocListIcon } from './toc-list-icon'

export function TocHeader() {
  return (
    <span className="nexus-toc-header">
      <TocListIcon />
      <span className="nexus-toc-header__title">Table of Contents</span>
    </span>
  )
}
