
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <main
          className={cn(
            "flex-1 p-4 md:p-6 transition-all duration-300 overflow-auto",
            isMobile && sidebarOpen ? "opacity-50" : "opacity-100"
          )}
        >
          {children}
        </main>
        <footer className="border-t py-4 px-6 text-center text-sm text-muted-foreground">
          © 2025 Strata Savvy. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
