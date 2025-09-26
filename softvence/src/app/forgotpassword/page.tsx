"use client"

import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import toast from "react-hot-toast"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error("Please enter your email address")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("https://apitest.softvencefsd.xyz/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        toast.success(data.message || "If your email is registered, a reset link has been sent.")
        setEmail("")
      } else {
        toast.error(data.message || "Unable to send reset link. Please try again.")
      }
    } catch (error) {
      console.error("Forgot password error:", error)
      toast.error("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="max-w-md w-full space-y-8">
          {/* Back Button */}
          <div className="flex items-center">
            <Link
              href="/login"
              className="flex items-center text-[var(--success-green)] hover:text-[var(--success-green-hover)] font-medium"
            >
              <ChevronLeft size={20} className="mr-1" />
              Back
            </Link>
          </div>

          {/* Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Forgot your password?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Please enter the email address associated with your account, and we'll email you a link to reset your
              password.
            </p>
          </div>

          {/* Reset Password Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
            </div>

            {/* Reset Password Button */}
            <Button
              type="submit"
              disabled={isLoading || !email}
              className="w-full mt-6 h-12 bg-[#3BA334] text-white px-7 py-2 shadow-lg shadow-[#39a4323d] font-bold rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Reset Password"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
