import { useEffect, useState } from 'react'

// SSR/CSR 하이드레이션 불일치 방지를 위한 훅
export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
