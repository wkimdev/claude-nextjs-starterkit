import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

// 앱 푸터 컴포넌트
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {APP_NAME}. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              홈
            </Link>
            <Link
              href="/dashboard"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              대시보드
            </Link>
            <Link
              href="/form-demo"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              폼 데모
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
