"use client"

// Update the imports to include the ShareDialog component
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ShareDialog } from "./share-dialog"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { name: "Notepad", path: "/" },
    { name: "How it works", path: "/how-it-works" },
    { name: "Help", path: "/help" },
    { name: "Contact us", path: "/contact" },
  ]

  return (
    <nav className="flex items-center space-x-1">
      {navItems.map((item) => (
        <Link href={item.path} key={item.path}>
          <Button
            variant={pathname === item.path ? "default" : "ghost"}
            size="sm"
            className={
              pathname === item.path
                ? "bg-yellow-300 hover:bg-yellow-400 dark:bg-yellow-700 dark:hover:bg-yellow-600"
                : ""
            }
          >
            {item.name}
          </Button>
        </Link>
      ))}

      <div className="ml-2">
        <ShareDialog />
      </div>
    </nav>
  )
}
