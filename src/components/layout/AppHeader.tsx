import { Bell, MessageSquare, Search } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-white/5 bg-background/60 px-4 backdrop-blur-xl">
      <SidebarTrigger className="text-muted-foreground hover:text-foreground" />

      <div className="relative ml-2 hidden flex-1 max-w-md md:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search anything..."
          className="h-10 rounded-xl border-white/5 bg-white/5 pl-10 text-sm placeholder:text-muted-foreground/60 focus-visible:ring-primary/40"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative rounded-xl hover:bg-white/5">
          <MessageSquare className="h-[18px] w-[18px]" />
          <Badge className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-neon-blue p-0 text-[10px] text-background">3</Badge>
        </Button>
        <Button variant="ghost" size="icon" className="relative rounded-xl hover:bg-white/5">
          <Bell className="h-[18px] w-[18px]" />
          <Badge className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full bg-neon-orange p-0 text-[10px] text-background">7</Badge>
        </Button>
        <div className="ml-2 flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 py-1.5 pl-1.5 pr-3">
          <Avatar className="h-8 w-8 ring-2 ring-primary/40">
            <AvatarFallback className="bg-gradient-primary text-xs font-semibold text-white">AU</AvatarFallback>
          </Avatar>
          <div className="hidden text-left leading-tight sm:block">
            <p className="text-xs font-semibold">Admin User</p>
            <p className="text-[10px] text-muted-foreground">Super Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
