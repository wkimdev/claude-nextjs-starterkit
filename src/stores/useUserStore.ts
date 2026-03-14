import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/types'

// 사용자 상태 타입
interface UserState {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  logout: () => void
}

// 사용자 전역 상태 스토어 (인증 및 사용자 정보 관리)
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'user-store',
    }
  )
)
