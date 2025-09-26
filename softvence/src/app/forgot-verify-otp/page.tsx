"use client"

import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import Link from "next/link"
import { Suspense, useState, useRef, useEffect } from "react"
import { ChevronLeft } from "lucide-react"
import toast from "react-hot-toast"
import { useRouter, useSearchParams } from "next/navigation"

function ForgotVerifyEmailContent() {
  const [codes, setCodes] = useState(["", "", "", "", "", ""]) 
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const [email, setEmail] = useState("")

  useEffect(() => {
    const qpEmail = (searchParams.get("email") || searchParams.get("user_email") || "").trim()
    if (qpEmail) {
      setEmail(qpEmail)
    }
  }, [searchParams])

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newCodes = [...codes]
    newCodes[index] = value
    setCodes(newCodes)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").slice(0, 6)
    const newCodes = [...codes]

    for (let i = 0; i < pastedData.length && i < 6; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newCodes[i] = pastedData[i]
      }
    }
    setCodes(newCodes)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const otp = codes.join("")

    // console.log(email, otp);

    const isValidEmail = (value: string) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value)
    if (!email) {
      toast.error("Email is required")
      return
    }
    if (!isValidEmail(email)) {
      toast.error("Enter a valid email address")
      return
    }

    if (!/^\d{6}$/.test(otp)) {
      toast.error("Enter the 6-digit code")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("https://apitest.softvencefsd.xyz/api/forgot-verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        toast.success(data.message || "Email verified successfully!")
        router.push("/success-register")
      } else {
        toast.error(data.message || "Invalid or expired code. Please try again.")
      }
    } catch (error) {
      console.error("Verify OTP error:", error)
      toast.error("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleResend = async () => {
    const isValidEmail = (value: string) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value)
    const emailTrimmed = (email || "").trim()

    if (!emailTrimmed) {
      toast.error("Email is required")
      return
    }
    if (!isValidEmail(emailTrimmed)) {
      toast.error("Enter a valid email address")
      return
    }

    setIsResending(true)
    try {
      const response = await fetch("https://apitest.softvencefsd.xyz/api/resend_otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailTrimmed }),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        toast.success(data.message || "OTP resent successfully")
      } else {
        toast.error(data.message || "Failed to resend code. Please try again.")
      }
    } catch (error) {
      console.error("Resend OTP error:", error)
      toast.error("Network error. Please try again.")
    } finally {
      setIsResending(false)
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
              href="/register"
              className="flex items-center text-[var(--success-green)] hover:text-[var(--success-green-hover)] font-medium"
            >
              <ChevronLeft size={20} className="mr-1" />
              Back
            </Link>
          </div>

          {/* Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Please check your email!</h2>
            <p className="text-muted-foreground leading-relaxed">
              We&#39;ve emailed a 6-digit confirmation code to{" "}
              <span className="text-foreground font-medium">{email || "your email"}</span>, please enter the code in below box to
              verify your email.
            </p>
          </div>

          {/* Verification Code Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Code Input Fields */}
            <div className="flex justify-center gap-3">
              {codes.map((code, index) => (
                <Input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={code}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-12 text-center text-lg font-semibold"
                />
              ))}
            </div>

            {/* Verify Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 h-12 bg-[#3BA334] text-white px-7 py-2 shadow-lg shadow-[#39a4323d] font-bold rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Verifying..." : "Verify"}
            </Button>

            {/* Resend Code */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Don&#39;t have a code?{" "}
                <button type="button" onClick={handleResend}  className="text-[#3BA334] hover:underline font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                  {isResending ? "Sending..." : "Resend code"}
                </button>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default function ForgotVerifyEmailPage() {
  return (
    <Suspense fallback={<div />}> 
      <ForgotVerifyEmailContent />
    </Suspense>
  )
}
