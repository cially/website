import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, BarChart3, Users, Activity } from "lucide-react"

export default function PlaceholderSite() {
  return (
    <div className="min-h-screen bg-[#050d1f] text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-[#1a2234] py-4">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-cyan-300/30 rounded-full"></div>
            </div>
            <span className="text-xl font-bold">Cially</span>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/cially/cially">
              <Github className="h-4 w-4" />
              GitHub
            </a>
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
              <a href="https://github.com/cially/cially">
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </Button>

            <Button
              variant="secondary"
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
          <p className="text-slate-400 text-sm">Made by the <a href="https://github.com/cially" className="text-slate-300 hover:text-white">Cially Team</a> for the community • Open source Discord analytics</p>
        </div>
      </footer>
    </div>
  )
}
