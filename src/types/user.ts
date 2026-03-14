// 사용자 역할 타입
export type UserRole = 'user' | 'admin' | 'moderator'

// 사용자 기본 타입
export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  createdAt: string
  updatedAt: string
}

// 사용자 생성 요청 타입
export interface CreateUserRequest {
  name: string
  email: string
  password: string
  role: UserRole
}

// 사용자 업데이트 요청 타입
export interface UpdateUserRequest {
  name?: string
  email?: string
  role?: UserRole
  avatar?: string
}
