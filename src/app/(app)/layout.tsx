import { MainLayout } from '@/components/layout/MainLayout'

// 앱 내부 페이지 레이아웃 (사이드바 포함)
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>
}
