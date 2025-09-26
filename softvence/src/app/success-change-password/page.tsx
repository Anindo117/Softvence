import { Button } from "@/Components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function PasswordChangeSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="max-w-md w-full text-center space-y-8">
          {/* Fireworks Illustration */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/fireworks-celebration.jpg"
              alt="Celebration fireworks"
              width={300}
              height={300}
              className="w-72 h-72"
            />
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground text-balance">Password Changed Successfully!</h2>
            <p className="text-muted-foreground text-lg">
              Your account is set up! Just verify your email to get started.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <Link href="/" >
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-base"
              size="lg"
            >
              Go To Login
            </Button>
            </Link>
            
          </div>
        </div>
      </main>
    </div>
  )
}
