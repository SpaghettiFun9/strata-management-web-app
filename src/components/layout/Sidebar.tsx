
import { Home, Users, Banknote, FileText, Tool, Calendar, LogOut, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Committee", href: "/committee", icon: Users },
    { name: "Finances", href: "/finances", icon: Banknote },
    { name: "Documents", href: "/documents", icon: FileText },
    { name: "Maintenance", href: "/maintenance", icon: Tool },
    { name: "Meetings", href: "/meetings", icon: Calendar },
  ];

  const closeSidebarIfMobile = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  const navToPage = (href: string) => {
    navigate(href);
    closeSidebarIfMobile();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && open && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-sidebar text-sidebar-foreground fixed md:relative z-50 h-full flex flex-col transition-all duration-300 ease-in-out",
          open ? "left-0" : isMobile ? "-left-full" : "-left-64",
          "w-64"
        )}
      >
        <div className="flex items-center justify-between px-4 py-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center text-accent-foreground font-bold">SS</div>
            <h1 className="text-xl font-bold">Strata Savvy</h1>
          </div>
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div className="mt-4 flex-1 overflow-y-auto">
          <nav className="px-2">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => navToPage(item.href)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      location.pathname === item.href
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary/10 text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center">
              <span className="font-semibold">JD</span>
            </div>
            <div>
              <p className="text-sm font-medium">Jane Doe</p>
              <p className="text-xs opacity-75">Chairperson</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
