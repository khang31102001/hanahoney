"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function GlobalLoading() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    // Lắng nghe sự kiện navigation
    const originalPush = router.push
    router.push = (...args) => {
      handleStart()
    //   return originalPush.apply(router, args).finally(handleComplete)
    }

    return () => {
      router.push = originalPush
    }
  }, [router])

  if (!loading) return null

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div className="h-full bg-honey-600 animate-pulse"></div>
    </div>
  )
}
