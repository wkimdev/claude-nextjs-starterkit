// API 응답 기본 타입
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

// 페이지네이션 메타 타입
export interface PaginationMeta {
  page: number
  pageSize: number
  total: number
  totalPages: number
}

// 페이지네이션이 포함된 API 응답 타입
export interface PaginatedApiResponse<T> {
  data: T[]
  meta: PaginationMeta
  message: string
  success: boolean
}

// API 에러 타입
export interface ApiError {
  code: string
  message: string
  details?: Record<string, string[]>
}
