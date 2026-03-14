// 앱 전역 상수
export const APP_NAME = 'Next.js Starterkit'
export const APP_DESCRIPTION = 'Next.js 15 + TypeScript + TailwindCSS v4 + shadcn/ui 기반 스타터킷'
export const APP_VERSION = '0.1.0'

// API 기본 URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? '/api'

// 페이지 경로
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  FORM_DEMO: '/form-demo',
} as const

// 페이지네이션 기본값
export const DEFAULT_PAGE_SIZE = 10
export const MAX_PAGE_SIZE = 100
