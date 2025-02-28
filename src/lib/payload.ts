import payloadConfig from "@/payload.config"
import { getPayload as _getPayload } from "payload"

export async function getPayload() {
  const config = await payloadConfig
  return _getPayload({ config })
}
