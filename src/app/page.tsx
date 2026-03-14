import Link from 'next/link'
import { ArrowRight, Layers, Zap, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { APP_NAME } from '@/lib/constants'

// 기능 카드 데이터
const features = [
  {
    icon: Layers,
    title: '모던 스택',
    description:
      'Next.js 15, TypeScript, TailwindCSS v4, shadcn/ui로 구성된 최신 개발 환경을 제공합니다.',
    badge: 'Core',
  },
  {
    icon: Zap,
    title: '빠른 개발',
    description:
      'Zustand 상태관리, React Hook Form + Zod 유효성 검증으로 생산성 높은 개발 환경을 구성합니다.',
    badge: 'DX',
  },
  {
    icon: Shield,
    title: '프로덕션 준비',
    description:
      '다크모드, 반응형 레이아웃, TypeScript strict 모드로 프로덕션에 바로 배포 가능한 구조입니다.',
    badge: 'Ready',
  },
]

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* 히어로 섹션 */}
      <section className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
        <Badge variant="secondary" className="px-4 py-1">
          Next.js 15 + TailwindCSS v4
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{APP_NAME}</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          프로덕션 준비가 된 Next.js 15 스타터킷. 빠른 웹 개발 시작을 위한 필수 구조를 포함합니다.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/dashboard">
              대시보드 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/form-demo">폼 데모</Link>
          </Button>
        </div>
      </section>

      {/* 기능 카드 섹션 */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">주요 기능</h2>
          <p className="mt-2 text-muted-foreground">스타터킷에 포함된 핵심 기능들</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="outline">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-1 w-full rounded-full bg-gradient-to-r from-primary/20 to-primary/60" />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="rounded-lg border bg-muted/50 p-6">
        <h2 className="mb-4 text-lg font-semibold">기술 스택</h2>
        <div className="flex flex-wrap gap-2">
          {[
            'Next.js 15',
            'React 19',
            'TypeScript',
            'TailwindCSS v4',
            'shadcn/ui',
            'Zustand',
            'React Hook Form',
            'Zod',
            'next-themes',
            'lucide-react',
          ].map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  )
}
