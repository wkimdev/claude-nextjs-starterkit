import Link from 'next/link'
import { Layers } from 'lucide-react'
import { APP_NAME } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
}

// 앱 로고 컴포넌트
export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity', className)}
    >
      <Layers className="h-6 w-6 text-primary" />
      {showText && <span className="text-lg">{APP_NAME}</span>}
    </Link>
  )
}
