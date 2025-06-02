import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, BarChart3, Users, Activity } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const CiallyLogo = () => (
  <div className="relative w-10 h-10">
    <Image
      src="./logo.svg"
      alt="Cially Logo"
      width={40}
      height={40}
      className="w-10 h-10"
    />
  </div>
)

export default function PlaceholderSite() {
  return (
    <div className="min-h-screen bg-[#050d1f] text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-[#1a2234] py-4">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <CiallyLogo />
            <span className="text-xl font-bold">Cially</span>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com" className="flex items-center gap-2 text-slate-300 hover:text-white">
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Badge className="mb-6 px-3 py-1 bg-[#3dd8e3]/10 text-[#3dd8e3] border-[#3dd8e3]/20">Coming Soon</Badge>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Discord Analytics
            <span className="block text-[#3dd8e3]">Made Simple</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Cially is an open-source Discord analytics dashboard that provides real-time insights, member activity
            tracking, and detailed server statistics to help you understand and optimize your Discord community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Card className="bg-[#0a1428] border-[#1a2234]">
              <CardContent className="p-4 text-center">
                <BarChart3 className="h-8 w-8 text-[#3dd8e3] mx-auto mb-2" />
                <div className="text-sm text-slate-300">Real-time Analytics</div>
              </CardContent>
            </Card>

            <Card className="bg-[#0a1428] border-[#1a2234]">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-[#3dd8e3] mx-auto mb-2" />
                <div className="text-sm text-slate-300">Member Insights</div>
              </CardContent>
            </Card>

            <Card className="bg-[#0a1428] border-[#1a2234]">
              <CardContent className="p-4 text-center">
                <Activity className="h-8 w-8 text-[#3dd8e3] mx-auto mb-2" />
                <div className="text-sm text-slate-300">Activity Tracking</div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#3dd8e3] hover:bg-[#2bc0cb] text-[#050d1f] font-medium" asChild>
              <Link href="https://github.com">
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </Link>
            </Button>

            <Button
              variant="outline"
              className="border-[#1a2234] text-slate-300 hover:bg-[#1a2234] hover:text-white"
              disabled
            >
              Documentation (Soon)
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a2234] py-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">Made by Skell for the community • Open source Discord analytics</p>
        </div>
      </footer>
    </div>
  )
}
