"use client"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { LogOut, Ticket } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()
  const { user, signOut } = useAuth()

  const handleSignOut = () => {
    signOut()
    router.push("/")
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Ticket className="h-6 w-6" />
          <h1 className="text-2xl font-bold">TicketMaster</h1>
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="font-medium">Home</Link>
          <Link href="/events" className="font-medium">Events</Link>
          <Link href="/bookings" className="font-medium">My Bookings</Link>
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground">
                Welcome, {user.name}
              </span>
              <Button variant="ghost" size="icon" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Button onClick={() => router.push("/auth/signin")}>
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}