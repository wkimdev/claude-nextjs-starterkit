import { LayoutDashboard, FileText, Home, Settings } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// 네비게이션 아이템 타입
export interface NavItem {
  label: string
  href: string
  icon: LucideIcon
  badge?: string
}

// 네비게이션 그룹 타입
export interface NavGroup {
  label: string
  items: NavItem[]
}

// 메인 네비게이션 설정
export const navigation: NavGroup[] = [
  {
    label: '메인',
    items: [
      {
        label: '홈',
        href: '/',
        icon: Home,
      },
      {
        label: '대시보드',
        href: '/dashboard',
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: '예제',
    items: [
      {
        label: '폼 데모',
        href: '/form-demo',
        icon: FileText,
      },
    ],
  },
  {
    label: '시스템',
    items: [
      {
        label: '설정',
        href: '/settings',
        icon: Settings,
        badge: '준비중',
      },
    ],
  },
]
