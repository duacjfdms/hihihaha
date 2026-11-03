# React + TypeScript + Tailwind CSS Project

Vite 기반의 모던 React 19 개발 환경입니다.

## 🛠 기술 스택

- **Build Tool:** [Vite 8](https://vite.dev/)
- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Utilities:** `clsx`, `tailwind-merge` (`src/lib/utils.ts`)

---

## 🚀 빠른 시작

### 1. 개발 서버 실행
```bash
npm run dev
# 또는 Windows PowerShell 정책 제한이 있을 경우:
npm.cmd run dev
```

브라우저에서 `http://localhost:5173`으로 접속할 수 있습니다.

### 2. 프로덕션 빌드
```bash
npm run build
```

### 3. 빌드 결과물 미리보기
```bash
npm run preview
```

### 4. 린트 검사
```bash
npm run lint
```

---

## 📁 디렉터리 구조

```text
hihihaha/
├── public/              # 정적 에셋 폴더
├── src/
│   ├── assets/          # 컴포넌트 에셋 (이미지, SVG 등)
│   ├── lib/
│   │   └── utils.ts     # cn() 클래스 병합 유틸 함수
│   ├── App.tsx          # 메인 앱 컴포넌트
│   ├── index.css        # Tailwind CSS 전역 스타일 (@import "tailwindcss")
│   └── main.tsx         # 애플리케이션 진입점
├── index.html           # HTML 템플릿
├── vite.config.ts       # Vite 설정 (Tailwind 플러그인 & @/ 경로 별칭)
├── tsconfig.json        # TypeScript 루트 설정
└── package.json         # 의존성 및 실행 스크립트
```

### 💡 경로 별칭 (Path Alias)
`@/` 경로를 통해 `src` 내부 모듈을 절대경로처럼 깔끔하게 import할 수 있습니다.
```tsx
import { cn } from '@/lib/utils'
```
