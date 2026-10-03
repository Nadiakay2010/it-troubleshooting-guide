import { ArrowDown, ArrowUpRight, BookOpen, Check, CircleCheck, Headset, Lightbulb, Monitor, ShieldCheck } from 'lucide-react'
import { TroubleshootingTopics } from '@/components/troubleshooting-topics'

export default function Page() {
  return (
    <div className="min-h-screen">
      <a href="#topics" className="sr-only focus:not-sr-only focus:absolute focus:bg-background focus:p-4">Skip to troubleshooting topics</a>
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 sm:px-10">
          <a href="#" className="flex items-center gap-3 text-sm font-semibold tracking-tight"><span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Monitor className="size-5" strokeWidth={1.8} aria-hidden="true" /></span>IT Troubleshooting Guide<span className="sr-only"> — home</span></a>
          <a href="#support" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><span className="hidden sm:inline">Need a little help?</span><Headset className="size-4" aria-hidden="true" /></a>
        </div>
      </header>
      <main>
        <section className="hero-surface border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 sm:px-10 sm:py-16 md:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.17em] text-primary"><span className="size-1.5 rounded-full bg-primary" />A little guidance. A lot less stress.</p>
              <h1 className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-primary sm:text-5xl lg:text-[58px]">Computer Problems?<br />Start Here<span className="text-soft-blue">.</span></h1>
              <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">Simple steps to help you solve everyday computer problems.</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Created by Nadia Kamel — now on GitHub.</p>
              <a href="#topics" className="mt-7 inline-flex items-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Find your problem<ArrowDown className="size-4" aria-hidden="true" /></a>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground"><span className="flex items-center gap-1.5"><CircleCheck className="size-3.5" aria-hidden="true" />Beginner-friendly</span><span className="flex items-center gap-1.5"><CircleCheck className="size-3.5" aria-hidden="true" />No technical experience needed</span></div>
            </div>
            <div aria-hidden="true" className="relative hidden h-64 items-center justify-center md:flex">
              <div className="absolute size-64 rounded-full border border-border/70" /><div className="absolute size-48 rounded-full border border-border/70" />
              <div className="relative w-64 -rotate-3 rounded-xl border border-border bg-background p-5 shadow-[0_12px_35px_-15px_#16345540]">
                <div className="mb-5 flex items-center justify-between"><div className="flex items-center gap-2 text-xs font-semibold"><span className="flex size-7 items-center justify-center rounded-md bg-secondary"><Monitor className="size-4 text-primary" /></span>Let’s work through it.</div><span className="size-1.5 rounded-full bg-soft-blue" /></div>
                {['Start with the basics', 'Take it one step at a time', 'Get back to your day'].map((text, i) => <div key={text} className="mt-3 flex items-center gap-3"><span className="flex size-5 items-center justify-center rounded-full bg-secondary text-primary"><Check className="size-3" /></span><span className="text-xs text-muted-foreground">{text}</span></div>)}
                <div className="mt-5 flex gap-1.5">{[1, 2, 3].map(n => <span key={n} className="h-1 flex-1 rounded-full bg-soft-blue/40" />)}</div>
              </div>
              <span className="absolute bottom-2 right-1 flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5 text-xs font-medium shadow-sm"><ShieldCheck className="size-4 text-primary" />Simple. Safe. Step by step.</span>
            </div>
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-14">
          <div className="grid items-start gap-9 lg:grid-cols-[minmax(0,1fr)_285px] lg:gap-12">
            <section id="topics" className="scroll-mt-6">
              <div className="mb-6 flex items-start justify-between gap-4"><div><h2 className="text-2xl font-semibold tracking-tight">What do you need help with?</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Choose a topic to open your step-by-step checklist.</p></div><span className="mt-1 shrink-0 rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground">5 topics</span></div>
              <TroubleshootingTopics />
              <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground"><BookOpen className="size-3.5" aria-hidden="true" />One step at a time. You don&apos;t have to be an expert.</p>
            </section>
            <aside className="flex flex-col gap-6 lg:pt-1">
              <section className="rounded-xl border border-border bg-secondary/50 p-6"><Lightbulb className="mb-4 size-6 text-primary" strokeWidth={1.6} aria-hidden="true" /><h2 className="text-base font-semibold">Before you begin</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Small checks often make a big difference. Start simple.</p><ul className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground">{['Save any open work.', 'Try one step at a time.', 'Check if the problem is fixed after each step.'].map(text => <li key={text} className="flex items-start gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />{text}</li>)}</ul></section>
              <section className="px-1"><div className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" aria-hidden="true" /><h2 className="text-sm font-semibold">Your security comes first</h2></div><p className="mt-2 text-sm leading-6 text-muted-foreground">We will never ask for your password. Only reset passwords through your service&apos;s official website or app.</p></section>
            </aside>
          </div>
          <section id="support" className="mt-12 flex scroll-mt-6 flex-col gap-5 rounded-xl bg-primary px-7 py-7 text-primary-foreground sm:flex-row sm:items-center sm:gap-6 sm:px-8">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary-foreground/20"><Headset className="size-6" strokeWidth={1.6} aria-hidden="true" /></span>
            <div><h2 className="text-lg font-semibold tracking-tight">Still stuck? It&apos;s okay to ask for help.</h2><p className="mt-1.5 max-w-3xl text-sm leading-6 text-primary-foreground/75">Contact your organization&apos;s IT support or your device or service&apos;s official support. Share the error message and the steps you&apos;ve tried—not your password.</p></div>
          </section>
        </div>
      </main>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:px-10"><p>Created by <span className="font-medium text-primary">Nadia Kamel.</span></p><p>A little help for everyday technology.</p></div></footer>
    </div>
  )
}
