import { existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import path from 'node:path'

const site = '.next/server/app'
const output = 'public/_pagefind'
const pagefindEntry = path.join(output, 'pagefind.js')

console.log(`[pagefind] Indexing ${site} → ${output}`)

const result = spawnSync(
  'pagefind',
  [`--site`, site, `--output-path`, output],
  { stdio: 'inherit', shell: true },
)

if (result.status !== 0) {
  console.error('[pagefind] Index generation failed.')
  process.exit(result.status ?? 1)
}

if (!existsSync(pagefindEntry)) {
  console.error(`[pagefind] Missing expected file: ${pagefindEntry}`)
  process.exit(1)
}

console.log(`[pagefind] OK — ${pagefindEntry} created`)
