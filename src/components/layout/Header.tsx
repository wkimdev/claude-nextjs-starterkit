'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Logo } from '@/components/common/Logo'
import { Sidebar } from './Sidebar'
import { useUIStore } from '@/stores/useUIStore'

// 상단 헤더 컴포넌트 (모바일 햄버거 메뉴, 테마 전환 포함)
export function Header() {
  const { sidebarOpen, setSidebarOpen } = useUIStore()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center gap-4 px-4">
        {/* 모바일 사이드바 */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SheetTitle className="sr-only">네비게이션 메뉴</SheetTitle>
            <Sidebar />
          </SheetContent>
        </Sheet>

        {/* 모바일 로고 */}
        <div className="md:hidden">
          <Logo />
        </div>

        <div className="flex-1" />

        <Separator orientation="vertical" className="h-6" />
        <ThemeToggle />
      </div>
    </header>
  )
}
