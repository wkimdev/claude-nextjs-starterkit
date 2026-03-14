'use client'

import { ThemeProvider } from './ThemeProvider'
import { Toaster } from '@/components/ui/sonner'

// 앱 전역 프로바이더 통합 컴포넌트
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  )
}
