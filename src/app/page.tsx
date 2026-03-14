import Link from 'next/link'
import { ArrowRight, Github, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { APP_NAME } from '@/lib/constants'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* 홈 전용 헤더 (사이드바 없는 심플 네비) */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity">
            <Layers className="h-5 w-5 text-primary" />
            <span>{APP_NAME}</span>
          </Link>

          {/* 우측 네비 */}
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">시작하기</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/wkimdev/claude-nextjs-starterkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* 배지 */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="gap-1.5 px-4 py-1.5 text-sm">
              <span className="text-primary">✦</span>
              Next.js + TailwindCSS v4
            </Badge>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            빠른 웹 개발을 위한
            <br />
            <span className="text-primary">최신 스타터 킷</span>
          </h1>

          {/* 설명 */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Next.js, TypeScript, TailwindCSS v4, shadcn/ui로 구성된 프로덕션 준비가 된 스타터 킷.
            빠른 웹 개발 시작을 위한 필수 구조가 모두 담겨 있습니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2 px-8" asChild>
              <Link href="/dashboard">
                시작하기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
              <a
                href="https://github.com/wkimdev/claude-nextjs-starterkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub 보기
              </a>
            </Button>
          </div>

          {/* 기술 스택 뱃지 */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              'Next.js 15',
              'React 19',
              'TypeScript',
              'TailwindCSS v4',
              'shadcn/ui',
              'Zustand',
              'Zod',
              'next-themes',
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs text-muted-foreground">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {APP_NAME}. Built with Next.js &amp; shadcn/ui.
      </footer>
    </div>
  )
}
