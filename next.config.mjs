import nextra from 'nextra'

const withNextra = nextra({
  search: { codeblocks: false },
  defaultShowCopyCode: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

export default withNextra(nextConfig)
