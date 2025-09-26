"use client"

import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { ChevronLeft } from "lucide-react"

export default function VerifyEmailPage() {
  const [codes, setCodes] = useState(["2", "2", "2", "2", "", ""])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [isLoading, setIsLoading] = useState(false)

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

  return (
    <div className="max-h-screen bg-background flex flex-col">

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
              We've emailed a 6-digit confirmation code to{" "}
              <span className="text-foreground font-medium">acb@domain</span>, please enter the code in below box to
              verify your email.
            </p>
          </div>

          {/* Verification Code Form */}
          <form className="space-y-6">
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
                Don't have a code?{" "}
                <button type="button" className="text-[#3BA334] hover:underline font-medium">
                  Resend code
                </button>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
