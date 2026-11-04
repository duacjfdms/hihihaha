// Synthera 출시본(site/)을 가공 없이 그대로 dist/로 복사합니다.
// 출시본 index.html은 라이브러리·이미지가 모두 내장된 단일 파일이라
// Vite로 다시 번들링하면 인라인 스크립트가 깨지므로 원본 그대로 배포합니다.
import { cpSync, rmSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const src = resolve(root, 'site')
const out = resolve(root, 'dist')

if (!existsSync(resolve(src, 'index.html'))) {
  console.error('site/index.html 이 없습니다.')
  process.exit(1)
}
rmSync(out, { recursive: true, force: true })
cpSync(src, out, { recursive: true })
console.log('Synthera 출시본을 dist/ 에 복사했습니다.')
