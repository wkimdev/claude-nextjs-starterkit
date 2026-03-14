# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소의 코드를 작업할 때 참고하는 가이드입니다.

## 개발 명령어

```bash
npm run dev      # 개발 서버 실행 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

테스트 프레임워크 미설정 (Jest/Vitest/Playwright 없음).

## 아키텍처 개요

### 라우팅 구조

두 가지 레이아웃 그룹으로 분리:

- `/` — 홈페이지 전용 레이아웃 (`src/app/layout.tsx`). 사이드바 없이 단독 헤더.
- `/(app)/*` — 앱 내부 레이아웃 (`src/app/(app)/layout.tsx`). `MainLayout`(헤더 + 사이드바 + 푸터) 적용.

새 페이지를 추가할 때 사이드바가 필요하면 `src/app/(app)/` 하위에 생성하고, 네비게이션 메뉴는 `src/config/navigation.ts`에 등록.

### 상태 관리 (Zustand)

`src/stores/` 에 두 개의 스토어:

- `useUIStore` — 사이드바 열림/닫힘, 레이아웃 상태. localStorage에 영속화.
- `useUserStore` — 인증 상태, 사용자 정보. localStorage에 영속화.

현재 백엔드/DB 없음. 스토어가 프론트엔드 전체 데이터 레이어 역할.

### 폼 패턴

모든 폼은 `React Hook Form + Zod` 조합 사용. Zod 스키마는 `src/lib/validations.ts`에 정의하고, 폼 컴포넌트는 `src/components/forms/`에 위치. 성공/실패 알림은 `sonner` 토스트 사용.

### 테마 시스템

`next-themes` 기반 다크/라이트/시스템 모드. CSS 변수는 `src/app/globals.css`에 OKLch 색상으로 정의. 클라이언트 컴포넌트에서 테마 의존적 렌더링 시 `useMounted` 훅으로 하이드레이션 불일치 방지.

### shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add <component>
```

New York 스타일, Zinc 색상 기본값으로 설정됨 (`components.json` 참조).

## 경로 별칭

`@/*` → `src/*` (tsconfig.json 설정)

## 환경 변수

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api  # API 베이스 URL (미설정 시 /api 기본값)
```

## 기술 스택 버전

- Next.js 15 (앱 라우터), React 19
- TailwindCSS v4 (PostCSS 방식, `@import "tailwindcss"`)
- TypeScript 엄격 모드
- Zustand 5, React Hook Form 7, Zod 4
