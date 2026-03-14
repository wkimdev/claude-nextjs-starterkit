import { Users, TrendingUp, ShoppingCart, DollarSign, Activity, Server } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageHeader } from '@/components/common/PageHeader'
import { Button } from '@/components/ui/button'

// 통계 카드 데이터
const stats = [
  {
    title: '총 사용자',
    value: '12,345',
    change: '+12%',
    trend: 'up',
    icon: Users,
    description: '지난 달 대비',
  },
  {
    title: '월 매출',
    value: '₩4,200만',
    change: '+8%',
    trend: 'up',
    icon: DollarSign,
    description: '지난 달 대비',
  },
  {
    title: '신규 주문',
    value: '1,893',
    change: '-3%',
    trend: 'down',
    icon: ShoppingCart,
    description: '지난 달 대비',
  },
  {
    title: '전환율',
    value: '3.24%',
    change: '+1.2%',
    trend: 'up',
    icon: TrendingUp,
    description: '지난 달 대비',
  },
]

// 최근 활동 데이터
const recentActivities = [
  { user: '김철수', action: '새 계정 생성', time: '2분 전', type: 'user' },
  { user: '이영희', action: '주문 완료 #1234', time: '15분 전', type: 'order' },
  { user: '박민준', action: '상품 리뷰 작성', time: '1시간 전', type: 'review' },
  { user: '최지은', action: '비밀번호 변경', time: '2시간 전', type: 'security' },
  { user: '정호진', action: '구독 업그레이드', time: '3시간 전', type: 'subscription' },
]

// 시스템 상태 데이터
const systemStatus = [
  { name: 'API 서버', status: 'operational', uptime: '99.9%' },
  { name: '데이터베이스', status: 'operational', uptime: '99.8%' },
  { name: 'CDN', status: 'degraded', uptime: '97.2%' },
  { name: '이메일 서비스', status: 'operational', uptime: '99.5%' },
]

export const metadata = {
  title: '대시보드',
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="대시보드"
        description="서비스 현황 및 주요 지표를 한눈에 확인하세요."
        actions={<Button variant="outline">리포트 다운로드</Button>}
      />

      {/* 통계 카드 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  <span
                    className={stat.trend === 'up' ? 'text-green-500' : 'text-destructive'}
                  >
                    {stat.change}
                  </span>{' '}
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* 최근 활동 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              최근 활동
            </CardTitle>
            <CardDescription>최근 발생한 사용자 활동 목록</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentActivities.map((activity, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* 시스템 상태 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              시스템 상태
            </CardTitle>
            <CardDescription>서비스 컴포넌트 운영 현황</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {systemStatus.map((system) => (
                <li key={system.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        system.status === 'operational' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                    />
                    <span className="text-sm font-medium">{system.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{system.uptime}</span>
                    <Badge
                      variant={system.status === 'operational' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {system.status === 'operational' ? '정상' : '지연'}
                    </Badge>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
