import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  // Allow the dev server (HMR + hydration) to be reached from a phone/LAN device.
  allowedDevOrigins: ['192.168.50.10'],
}

export default withPayload(nextConfig)
