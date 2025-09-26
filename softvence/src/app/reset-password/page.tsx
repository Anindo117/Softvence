"use client"

import type React from "react"
import { Input } from "@/Components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/Components/ui/button"
import toast from "react-hot-toast"
import { useRouter, useSearchParams } from "next/navigation"

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const email = (searchParams.get("email") || searchParams.get("user_email") || "").trim()
    const otp = (searchParams.get("otp") || searchParams.get("code") || "").trim()
    const token = (searchParams.get("token") || "").trim()

    if (!email) {
      toast.error("Missing email. Open the reset link from your email again.")
      return
    }

    if (!newPassword || !confirmPassword) {
      toast.error("Please enter and confirm your new password")
      return
    }

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters")
      return
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    const payload: Record<string, string> = {
      email,
      password: newPassword,
      password_confirmation: confirmPassword,
    }
    if (otp) payload.otp = otp
    if (token) payload.token = token

    setIsLoading(true)
    try {
      const response = await fetch("https://apitest.softvencefsd.xyz/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        toast.success(data.message || "Password has been reset successfully")
        setNewPassword("")
        setConfirmPassword("")
        router.push("/success-change-password")
      } else {
        toast.error(data.message || "Failed to reset password. Please try again.")
      }
    } catch (error) {
      console.error("Reset password error:", error)
      toast.error("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="max-w-md w-full space-y-8">
          {/* Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Enter your new password.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Please enter the email address associated with your account, and we'll email you a link to reset your
              password.
            </p>
          </div>

          {/* Reset Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password Field */}
            <div className="space-y-2 relative">
              <Input
                id="newPassword"
                type={showNewPassword ? "text" : "password"}
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="h-12 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2 relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-12 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full mt-5 h-12 bg-[#3BA334] text-white px-7 py-2 shadow-lg shadow-[#39a4323d] font-bold rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Updating..." : "Update Password"}
            </Button>

            {/* Back Button */}
            <div className="flex justify-center pt-4">
              <Link
                href="/forgotpassword"
                className="text-[#3BA334] hover:text-[#89f281] font-medium"
              >
                Back
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
