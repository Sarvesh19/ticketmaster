"use client"

import { AuthState, SignInData, SignUpData, User } from "@/types/auth"
import { create } from "zustand"

interface AuthStore extends AuthState {
  signIn: (data: SignInData) => Promise<void>
  signUp: (data: SignUpData) => Promise<void>
  signOut: () => void
}

// This is a mock implementation. In a real app, you'd integrate with a backend
export const useAuth = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  signIn: async (data) => {
    set({ isLoading: true })
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    const user: User = {
      id: "1",
      email: data.email,
      name: data.email.split("@")[0]
    }
    set({ user, isLoading: false })
  },
  signUp: async (data) => {
    set({ isLoading: true })
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    const user: User = {
      id: "1",
      email: data.email,
      name: data.name
    }
    set({ user, isLoading: false })
  },
  signOut: () => {
    set({ user: null })
  }
}))