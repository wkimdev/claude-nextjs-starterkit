import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader } from '@/components/common/PageHeader'
import { UserRegistrationForm } from '@/components/forms/UserRegistrationForm'

export const metadata = {
  title: '폼 데모',
}

export default function FormDemoPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="폼 데모"
        description="React Hook Form + Zod를 활용한 유효성 검증 예제입니다."
      />

      <div className="mx-auto max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle>회원가입</CardTitle>
            <CardDescription>
              아래 양식을 작성하여 계정을 생성하세요. 모든 필드는 필수입니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UserRegistrationForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
