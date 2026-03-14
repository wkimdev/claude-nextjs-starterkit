// 타입 모듈 중앙 익스포트
export type { User, UserRole, CreateUserRequest, UpdateUserRequest } from './user'
export type { ApiResponse, PaginatedApiResponse, PaginationMeta, ApiError } from './api'

// 공통 유틸리티 타입
export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type WithId<T> = T & { id: string }
