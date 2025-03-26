import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Github, Send } from "lucide-react"
import Link from "next/link"

export default function DevProfileCard() {
  return (
    <div className="dark min-h-screen w-full flex items-center justify-center p-4">
      <Card className="w-full max-w-md overflow-hidden bg-background border-border">
        <CardHeader className="p-0">
          <div className="h-24 bg-gradient-to-r from-[#9DFF00] to-[#85D800]"></div>
        </CardHeader>
        <CardContent className="p-6 pt-0 -mt-12">
          <div className="flex justify-between items-start">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src="/images/avatar.png" alt="Radik Grigorian" />
              <AvatarFallback className="text-2xl">RG</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm" className="mt-14" asChild>
              <Link href="https://t.me/username429" target="_blank" rel="noopener noreferrer">
                <Send className="h-4 w-4 mr-2" />
                Telegram
              </Link>
            </Button>
          </div>

          <div className="space-y-1.5 mt-3">
            <h2 className="text-2xl font-bold text-foreground">Radik Grigorian</h2>
            <p className="text-muted-foreground">Chief Technical Officer | Surge</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Badge variant="outline" className="bg-primary/10 text-primary">
              React
            </Badge>
            <Badge variant="outline" className="bg-primary/10 text-primary">
              Node.js
            </Badge>
            <Badge variant="outline" className="bg-primary/10 text-primary">
              CI/CD
            </Badge>
            <Badge variant="outline" className="bg-primary/10 text-primary">
              TS
            </Badge>
            <Badge variant="outline" className="bg-primary/10 text-primary">
              JS
            </Badge>
          </div>

          <Separator className="my-4" />

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Current Projects</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-foreground">VIPawn</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-foreground">Surge Development Bot</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-foreground">Activity (Last 30 days)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Commits</span>
                    <span className="font-medium text-foreground">87</span>
                  </div>
                  <Progress value={87} className="h-1" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">PRs Merged</span>
                    <span className="font-medium text-foreground">24</span>
                  </div>
                  <Progress value={60} className="h-1" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Issues Closed</span>
                    <span className="font-medium text-foreground">32</span>
                  </div>
                  <Progress value={64} className="h-1" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Deployments</span>
                    <span className="font-medium text-foreground">18</span>
                  </div>
                  <Progress value={45} className="h-1" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="border-t border-border bg-muted/20 px-6 py-3">
          <div className="flex items-center justify-center w-full">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground hover:text-primary hover:bg-background/10"
              asChild
            >
              <Link href="https://github.com/radik-ggnebudet" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub Profile
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

