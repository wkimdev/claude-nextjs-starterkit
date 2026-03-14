import { z } from 'zod'

// 사용자 등록 폼 유효성 검증 스키마
export const userRegistrationSchema = z
  .object({
    name: z
      .string()
      .min(2, '이름은 최소 2자 이상이어야 합니다')
      .max(50, '이름은 최대 50자 이하여야 합니다'),
    email: z.string().email('올바른 이메일 주소를 입력해주세요'),
    password: z
      .string()
      .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
      .regex(/[A-Z]/, '대문자를 포함해야 합니다')
      .regex(/[0-9]/, '숫자를 포함해야 합니다'),
    confirmPassword: z.string(),
    role: z.enum(['user', 'admin', 'moderator'], {
      error: '역할을 선택해주세요',
    }),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: '이용약관에 동의해야 합니다',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  })

export type UserRegistrationFormValues = z.infer<typeof userRegistrationSchema>
