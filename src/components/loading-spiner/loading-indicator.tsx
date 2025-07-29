"use client"

import { useLinkStatus } from "next/link"

export default function LoadingIndicator() {
  const { pending } = useLinkStatus()

  return pending ? (
    <div role="status" aria-label="Loading" className="inline-flex items-center">
      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 ml-2"></div>
    </div>
  ) : null
}
