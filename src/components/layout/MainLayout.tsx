import { Header } from './Header'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'

// 메인 레이아웃 컴포넌트 (헤더 + 사이드바 + 콘텐츠 + 푸터)
export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        {/* 데스크톱 사이드바 */}
        <aside className="hidden w-64 shrink-0 border-r md:block">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
            <Sidebar />
          </div>
        </aside>

        {/* 메인 콘텐츠 영역 */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-6">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
