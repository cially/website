import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Github, BarChart3, Users, Activity } from "lucide-react";
import { Github } from "lucide-react";

const CiallyLogo = () => (
  <div className="relative w-10 h-10">
    <img
      src="./logo.svg"
      alt="Cially Logo"
      width={40}
      height={40}
      className="w-10 h-10"
    />
  </div>
);

export default function PlaceholderSite() {
  return (
    <div className="min-h-screen text-white flex flex-col bg-gr">
      {/* Header */}
      <header className="border-b border-[#ffffff]/10 py-4 backdrop-blur-3xl bg-black/10">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <CiallyLogo />
            <span className="text-xl font-semibold">Cially</span>
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
          <Badge className="mb-6 px-3 py-1 bg-blue-700/10 text-[#a3c0ff] border-white/8 backdrop-blur-3xl">
            Version: 2.0
          </Badge>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Discord Analytics
            <span className="block text-blue-500">Made Simple</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Cially is an open-source Discord Server Stats dashboard that provides
            real-time insights, member activity tracking, and detailed server
            statistics to help you understand and optimize your Discord
            community.
          </p>

          {/* 
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
 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="font-medium" asChild>
              <a href="https://github.com/cially/cially">
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </Button>

            <Button disabled>Documentation (Soon)</Button>
          </div>
        </div>
      </main>

      {/* Second Section */}
      <main>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
          <div className="w-full px-5 lg:px-20">
            <img src="./screen-1.webp" />
          </div>
          <div className="text-center">
            <h2 className="text-4xl sm:text-3xl font-bold mt-3">
              Learn about your Community
            </h2>
            <div className="px-5 lg:px-20 text-gray-300 text-sm mt-3">
              To grow a successful Discord server, you need to understand how
              your community behaves. Tracking analytics like message activity,
              member growth, and engagement trends gives you a clear picture of
              your server’s direction. With these insights, you can make smarter
              decisions, improve community interaction, and take meaningful
              steps toward building something bigger and more impactful.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center mt-20">
          <div className="w-full px-5 lg:px-20">
            <img src="./screen-2.webp" />
          </div>
          <div className="text-center">
            <h2 className="text-4xl sm:text-3xl font-bold mt-3">
              Privacy First
            </h2>
            <div className="px-5 lg:px-20 text-gray-300 text-sm mt-3">
              Cially is using Pocketbase internally, giving you full control and
              permanent access to your personal data — without us ever seeing
              it. Your privacy matters: Cially never stores message content or
              other sensitive information unless you explicitly choose to modify
              the code.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center mt-20">
          <div className="w-full px-5 lg:px-20">
            <img src="./screen-3.webp" />
          </div>
          <div className="text-center">
            <h2 className="text-4xl sm:text-3xl font-bold mt-3">
              Free. Forever.
            </h2>
            <div className="px-5 lg:px-20 text-gray-300 text-sm mt-3">
              Cially can be used for free forever, without any secret fees or
              limitations. All you need is some low end infrastructure and Cially
              will be up and running for as long as you wish.
              <div className="text-gray-600 mt-2">
                Cially's License does not allow commercial use. Read more about
                our license on GitHub
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-4xl sm:text-3xl font-bold text-center mt-20">Get Started Now</h3>
        <div className="place-self-center grid grid-cols-1 lg:grid-cols-2 gap-3 my-10 mt-10">
          <Button className="font-medium" asChild>
            <a href="https://github.com/cially/cially">
              <Github className="h-4 w-4 mr-2" />
              View on GitHub
            </a>
          </Button>

          <Button disabled>Documentation (Soon)</Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a2234] py-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            Made by the{" "}
            <a
              href="https://github.com/cially"
              className="text-slate-300 hover:text-white hover:underline"
            >
              Cially Team
            </a>{" "}
            for the community • Open source Discord analytics
          </p>
        </div>
      </footer>
    </div>
  );
}
