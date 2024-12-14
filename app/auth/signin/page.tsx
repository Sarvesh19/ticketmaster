import { AuthCard } from "@/components/auth/AuthCard"
import { SignInForm } from "@/components/auth/SignInForm"
import { Header } from "@/components/layout/Header"
import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center">
          <AuthCard
            title="Sign In"
            description="Enter your credentials to access your account"
          >
            <SignInForm />
          </AuthCard>
          <p className="mt-4 text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}