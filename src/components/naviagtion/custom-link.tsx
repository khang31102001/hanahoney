"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface CustomLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function CustomLink({ href, children, className = "" }: CustomLinkProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await router.push(href)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center ${className} ${loading ? "opacity-75 cursor-wait" : ""}`}
    >
      {children}
      {loading && <div className="ml-2 animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>}
    </Link>
  )
}
