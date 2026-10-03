import { ChevronDown, Headphones, KeyRound, Monitor, Printer, Wifi } from 'lucide-react'

const topics = [
  {
    title: 'Wi-Fi is not connecting',
    description: 'Get your computer back online.',
    icon: Wifi,
    steps: [
      ['Check Wi-Fi and airplane mode', 'Make sure Wi-Fi is turned on and airplane mode is off. Select the correct network from your Wi-Fi menu.'],
      ['Move closer to the router', 'Try again near the router. If possible, check whether another device can connect to the same network.'],
      ['Reconnect to your network', 'Turn Wi-Fi off, wait a few seconds, then turn it back on and reconnect.'],
      ['Restart your equipment', 'Save your work and restart your computer. For your own home router, unplug its power for 30 seconds, reconnect it, and wait a few minutes. Do not reset or restart shared workplace equipment.'],
    ],
    support: 'If only your computer still cannot connect, contact IT support. If all devices on your home network are offline, contact your internet provider.',
  },
  {
    title: 'Cannot sign in to an account',
    description: 'Find a safe way back into your account.',
    icon: KeyRound,
    steps: [
      ['Check your connection and sign-in page', 'Make sure you are online. Open the service’s official app or navigate to its official website directly, rather than following an unexpected message.'],
      ['Check your account details', 'Confirm your email address or username is correct. Check Caps Lock and your keyboard language before trying again.'],
      ['Use the official password reset process', 'Select “Forgot password?” or “Reset password” on the service’s official sign-in page and follow its instructions. Never enter your password on this guide.'],
      ['Check verification and account messages', 'If requested, complete verification through the service’s official process. If your account is locked, follow the stated waiting period rather than repeatedly trying to sign in.'],
    ],
    support: 'Contact your organization’s IT support for a work or school account. For a personal account, use the service’s official support if recovery or verification is not working. Never share passwords or verification codes.',
  },
  {
    title: 'Printer is not printing',
    description: 'Check the basics and get your next page printing.',
    icon: Printer,
    steps: [
      ['Check power, paper, and messages', 'Make sure the printer is on, has paper, and shows no ink, toner, or paper-jam warning. Follow the printer’s on-screen instructions for any warning.'],
      ['Check the connection', 'Check that the USB cable is securely connected, or that your computer and wireless printer are on the same network.'],
      ['Select the correct printer', 'In the print window, choose your printer instead of “Save as PDF.” Check that printing is not paused.'],
      ['Try a fresh print job', 'Cancel your own stuck jobs in the print queue, then try one page. If needed, restart your personal printer; ask IT before restarting a shared printer.'],
    ],
    support: 'Contact IT support if the printer is still unavailable, jobs remain stuck, or a hardware warning continues. Note the printer name and any error message.',
  },
  {
    title: 'Computer is running slowly',
    description: 'Give your computer a little breathing room.',
    icon: Monitor,
    steps: [
      ['Close what you are not using', 'Save your work, then close unused apps and extra browser tabs. Wait for any updates already in progress to finish.'],
      ['Restart your computer', 'Save any open files and choose Restart. Give your computer a few minutes to finish starting up.'],
      ['Check available storage', 'Look at storage in your computer’s settings. If it is almost full, remove only personal files you recognize and no longer need, backing up important files first. Do not delete system files.'],
      ['Check updates and security', 'Use your computer’s built-in settings to check for approved updates and run its trusted security scan. Avoid “PC cleaner” pop-ups or unfamiliar downloads.'],
    ],
    support: 'Contact IT support if the slowdown continues, the computer repeatedly freezes, or you see security warnings. Stop using it and seek help if it becomes unusually hot or smells like burning.',
  },
  {
    title: 'No sound from the computer',
    description: 'Get your speakers or headphones working again.',
    icon: Headphones,
    steps: [
      ['Check the volume and mute controls', 'Turn the volume up to a comfortable level. Check that the computer, the app, and your speakers or headphones are not muted.'],
      ['Check your headphones or speakers', 'Make sure cables are fully connected and speakers are powered on. If using Bluetooth, check that your headphones are connected and charged.'],
      ['Choose the right sound output', 'Open sound settings and select the speakers or headphones you want to use. Sound may be going to a monitor or another Bluetooth device.'],
      ['Try another app, then restart', 'Play audio in another app to check whether the issue affects everything. If it does, save your work and restart your computer.'],
    ],
    support: 'Contact IT support if sound is still missing after these checks, the output device is not listed, or the connection appears damaged.',
  },
]

export function TroubleshootingTopics() {
  return (
    <div className="flex flex-col gap-3">
      {topics.map((topic, index) => (
        <details key={topic.title} className="topic group rounded-xl border border-border bg-card">
          <summary className="flex cursor-pointer list-none items-center gap-4 rounded-xl px-5 py-5 outline-offset-4 transition-colors hover:bg-secondary/60 sm:gap-5 sm:px-6">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary"><topic.icon className="size-5" strokeWidth={1.7} aria-hidden="true" /></span>
            <span className="flex flex-1 flex-col gap-1"><span className="text-base font-semibold tracking-tight sm:text-[17px]">{topic.title}</span><span className="text-sm leading-relaxed text-muted-foreground">{topic.description}</span></span>
            <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="border-t border-border px-5 pb-6 pt-5 sm:px-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Try these steps in order</p>
            <ol className="flex flex-col gap-4">
              {topic.steps.map(([title, description], step) => (
                <li key={title}>
                  <label className="flex cursor-pointer items-start gap-3">
                    <input type="checkbox" className="mt-1 size-4 shrink-0 cursor-pointer accent-primary" aria-label={`Mark step ${step + 1} complete: ${title}`} />
                    <span><span className="block text-sm font-semibold">{step + 1}. {title}</span><span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{description}</span></span>
                  </label>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-lg bg-secondary p-4"><h3 className="text-sm font-semibold">When to contact support</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{topic.support}</p></div>
            <p className="mt-3 text-xs text-muted-foreground">Your checklist is just for this visit. No account details are collected.</p>
          </div>
        </details>
      ))}
    </div>
  )
}

