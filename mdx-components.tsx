import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { Callout, Tabs } from 'nextra/components'
import type { ReactNode } from 'react'

const themeComponents = getThemeComponents()

export function Note({ children }: { children: ReactNode }) {
  return <Callout type="info">{children}</Callout>
}

export function Warning({ children }: { children: ReactNode }) {
  return <Callout type="warning">{children}</Callout>
}

export function Tip({ children }: { children: ReactNode }) {
  return <Callout type="default">{children}</Callout>
}

export function Info({ children }: { children: ReactNode }) {
  return <Callout type="info">{children}</Callout>
}

export function StatGrid({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '1rem',
        margin: '1.5rem 0',
      }}
    >
      {children}
    </div>
  )
}

export function StatCard({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="nexus-stat-card">
      <div className="nexus-stat-card__value">{value}</div>
      <div className="nexus-stat-card__label">{label}</div>
    </div>
  )
}

export function Screenshot({ caption }: { caption: string }) {
  return (
    <figure className="nexus-screenshot">
      <div className="nexus-screenshot__frame">{caption}</div>
      <figcaption className="nexus-screenshot__caption">{caption}</figcaption>
    </figure>
  )
}

export function useMDXComponents(components?: Record<string, unknown>) {
  return {
    ...themeComponents,
    Callout,
    Tabs,
    Note,
    Warning,
    Tip,
    Info,
    StatGrid,
    StatCard,
    Screenshot,
    ...components,
  }
}
