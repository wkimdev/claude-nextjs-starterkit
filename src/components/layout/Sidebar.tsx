'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/config/navigation'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Logo } from '@/components/common/Logo'
import { cn } from '@/lib/utils'

// 사이드바 네비게이션 컴포넌트
export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <div className="py-2">
        <Logo />
      </div>
      <Separator />
      <nav className="flex-1 space-y-6 py-2">
        {navigation.map((group) => (
          <div key={group.label}>
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {group.label}
            </p>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span>{item.label}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}
