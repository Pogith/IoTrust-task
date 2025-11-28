# IoTrust 과제

[Vite](https://vitejs.dev/)
기반의 React + TypeScript 기반의 디센트 모바일 앱입니다.

---

## 📦 기술 스택

- **빌드 툴**: Vite + React + TypeScript
- **스타일링**: [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite), [shadcn/ui](https://ui.shadcn.com/)
- **라우팅**: [React Router](https://reactrouter.com/home)
- **데이터 패칭**: [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- **HTTP 클라이언트**: [Axios](https://axios-http.com/docs/intro)
- **가상 리스트 구현**: [TanStack Virtual](https://tanstack.com/virtual/latest/docs/introduction)
- **다국어**: [i18next](https://www.i18next.com/overview/api)

---

## ⚙️ 개발 환경

### Node 버전 관리

```bash
- Node.js: v22.17.0
- npm: v10.9.2
```

이 프로젝트는 `.nvmrc` 파일을 포함하고 있습니다.  
[nvm(Node Version Manager)](https://github.com/nvm-sh/nvm)을 사용해 동일한 Node.js 버전을 맞추는 것을 권장합니다.
이 프로젝트는 Node.js 22.x 버전(LTS)을 권장하며, `.nvmrc`에는 **v22.17.0**이 지정되어 있습니다

```bash
# Node.js 22.17.0 설치
nvm install  #(혹은 nvm install 22.17.0)

# 해당 버전 사용
nvm use
```

---

## ⚙️ 환경 변수 설정

개발 서버 실행 전에 Root 경로에 `.env.{환경}` 파일을 만들고 **`VITE_API_URL`** 값을 반드시 지정해야 합니다.

### (`.env.dev`)

```.env.dev
VITE_APP_ENV=dev
VITE_API_BASE_URL=API_URL
VITE_IMAGE_BASE_URL=IMAGE_URL
```

### (`.env.stage`)

```.env.stage
VITE_APP_ENV=stage
VITE_API_BASE_URL=API_URL
VITE_IMAGE_BASE_URL=IMAGE_URL
```

### (`.env.prod`)

```.env.prod
VITE_APP_ENV=prod
VITE_API_BASE_URL=API_URL
VITE_IMAGE_BASE_URL=IMAGE_URL
```

---

## 🚀 실행 방법

### 설치

```bash
npm install
```

### 실행

- 브라우저: `http://localhost:5173` 접속

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

---

## 📂 프로젝트 구조

이 프로젝트는 [bulletproof-react](https://github.com/alan2207/bulletproof-react/tree/master/apps/react-vite) 구조를 기반으로 했습니다.  
해당 구조는 **확장성**과 **유지보수성**을 고려하여 해당 구조를 선택하게 되었고, 기능 단위(feature)로 코드를 모듈화하여 새로운 기능 추가시 충돌을 최소화 할 수 있고, 공용 코드를 별도로 분리하여 쉽게 관리가 가능하여 팀 단위 개발, 장기 유지보수에 적합합니다.

<details>
<summary>디렉토리 구조 설명</summary>

```shell

src
|
+-- app               # 애플리케이션 전역 레이어
|   +-- router.tsx    # 라우팅 (페이지)
|   +-- index.tsx     # App 엔트리 컴포넌트
|   +-- root.tsx      # 애플리케이션의 루트 레이아웃 컴포넌트
|
+-- assets            # 정적 자원 (이미지 등)
|
+-- components        # 공용 UI 컴포넌트 (Button, Dialog 등)
|
+-- features          # 도메인 단위 기능 (home ...)
|
+-- hooks             # 전역적으로 재사용 가능한 hooks
|
+-- lib               # axios 등 재사용 가능한 라이브러리
|
+-- types             # 전역적으로 공유되는 타입
|
+-- utils             # 헬퍼 함수 등 공용 유틸
```

</details>

## 🛠 AI 툴 사용

본 과제 수행 과정에서는 ChatGPT를 활용하여 전반적인 설계 검증과 구현 방향성을 보완하였습니다.
구체적으로는 다음과 같은 목적과 방식으로 AI 도구를 사용했습니다.

자료 조사 및 기술적 근거 수집을 위해 활용하여 image lazy loading 방식, Virtualizer 동작 원리 등 기능적으로 필요한 추가 자료에 대해 다양한 공식 문서와 레퍼런스를 AI를 통해 빠르게 수집하고 보완했습니다.
개발 로직 개선 및 코드 품질 향상을 위해 구체적인 구현 과정에서도 AI를 참고하여 코드를 개선하였습니다.

단순히 코드를 생성하는 용도가 아니라 설계 검증, 성능 최적화 판단, 기술 조사, 코드 품질 향상 등 전반적인 개발 과정의 품질을 높이는 데 활용하였습니다.

## 구현한 주요 요소 설명

### BannersSection

- 슬라이드 배너 기능을 담당하고 있는 섹션입니다.

### FavoritesSection

- 사용자가 즐겨찾기 목록을 한 경우 노출되는 섹션으로, 삭제를 할 수 있으며 현재는 mock 데이터를 통해 활용하고 있어 client에서 optimistic update를 활용하여 삭제시키는 상황입니다.

### DAppsSection

- 서비스들의 전체 목록을 노출하는 섹션으로, 각 list item을 선택 시 상세 sheet가 노출되고, 설명과 해당 url로 이동할 수 있습니다.

## 제한 시간 내 구현하지 못한 부분 & 보완하고 싶은 점

검색(Search) 기능 구현 미완료
제공된 mock 데이터를 기반으로 검색 구조를 설계하는 과정에서 검색을 통한 filter된 데이터를 보여주기 위한 방법들을 고려하다 보니 시간이 지체되어, 최종 구현까지는 완료하지 못했습니다.

이미지 Lazy Loading 및 Virtualizer 성능 개선 여지
현재는 기본적인 lazy-loading과 리스트 가상화를 적용하였으나, 이미지가 많은 환경에서의 네트워크 요청 최소화, 스크롤 성능, 브라우저별 WebP fallback 처리 등에 대해 추가적인 테스트가 필요하다고 생각했습니다. 특히 이미지 로딩 타이밍과 리렌더링을 더 최적화할 수 있는 방법을 살펴보고 개선해보고 싶습니다.

마지막으로 제한된 시간 안에 모든 기능을 완성도 있게 구현하지 못한 점이 가장 아쉬웠습니다.
검색 기능, 이미지 최적화, 환경 설정 구조, 컴포넌트 설계 등 더 깔끔하게 다듬고 싶었던 부분들이 남아 있어 개인적으로 아쉬움이 많이 남습니다.
그럼에도 가능한 범위에서 최대한 정확한 설계와 구조를 고민하며 구현하려고 노력했습니다.

이번 과제를 진행하면서 전체적인 구조와 구현 방식에 대해 다시 한 번 생각해볼 수 있었고, 환경 설정뿐만 아니라 성능과 확장성을 고려한 접근의 중요성도 다시 느낄 수 있었습니다.
바쁘신 와중에 제 과제를 검토해주시는 시간 내주셔서 진심으로 감사드립니다.
더 나은 개발자가 되기 위해 계속해서 고민하고 성장해 나가겠습니다.
감사합니다.
