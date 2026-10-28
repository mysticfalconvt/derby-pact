import type { ReactNode } from 'react'

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <>
      <p className="text-sm font-bold tracking-wider text-brand-ink uppercase">{eyebrow}</p>
      <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">{title}</h1>
      {children && <div className="mt-4 max-w-2xl text-lg text-ink-muted">{children}</div>}
    </>
  )
}
