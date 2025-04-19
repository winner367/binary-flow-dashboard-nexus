
import { HomeIcon, BarChart, Settings, Shield, Play } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navigationItems = [
  { name: "Dashboard", icon: HomeIcon, path: "/" },
  { name: "Market Analysis", icon: BarChart, path: "/market-analysis" },
  { name: "Strategy Configuration", icon: Settings, path: "/strategy" },
  { name: "Risk Management", icon: Shield, path: "/risk" },
  { name: "Bot Settings", icon: Settings, path: "/bot-settings" },
  { name: "Bot Management", icon: Play, path: "/bot-management" },
];

export function SidebarNav() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Binary Trading Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
