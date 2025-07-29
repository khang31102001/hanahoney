import Link from "next/link"
import LoadingIndicator from "./loading-indicator"

const navigationLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/products", label: "Sản phẩm" },
  { href: "/orders", label: "Đơn hàng" },
  { href: "/settings", label: "Cài đặt" },
]

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
              >
                {link.label}
                <LoadingIndicator />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
