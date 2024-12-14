import { AuthCard } from "@/components/auth/AuthCard"
import { SignUpForm } from "@/components/auth/SignUpForm"
import { Header } from "@/components/layout/Header"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center">
          <AuthCard
            title="Sign Up"
            description="Create a new account to get started"
          >
            <SignUpForm />
          </AuthCard>
          <p className="mt-4 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}