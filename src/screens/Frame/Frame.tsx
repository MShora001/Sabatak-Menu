import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { 
  Building2, 
  Coins, 
  Settings, 
  Users, 
  Store, 
  FileText, 
  Briefcase,
  Handshake,
  ShoppingCart,
  Percent,
  UserCheck,
  Database,
  User,
  LogOut,
  ChevronRight,
  Home
} from "lucide-react";

const NavItem = ({ icon: Icon, label, badge = null, active = false, hasSubmenu = false }) => (
  <div 
    className={`
      w-full px-6 py-3 flex items-center justify-start cursor-pointer
      transition-all duration-200 ease-in-out
      ${active 
        ? 'bg-white/10 border-r-4 border-white' 
        : 'hover:bg-white/5 hover:translate-x-1'
      }
    `}
  >
    <div className="flex items-center gap-3 flex-1">
      <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-white/70'}`} />
      <span className={`text-sm ${active ? 'text-white font-medium' : 'text-white/70'}`}>
        {label}
      </span>
    </div>
    {badge && (
      <span className="bg-[#f0b31a] text-[#3b2a13] text-xs px-2.5 py-1 rounded-full font-medium min-w-[20px] text-center">
        {badge}
      </span>
    )}
    {hasSubmenu && (
      <ChevronRight className="w-4 h-4 text-white/50" />
    )}
  </div>
);

export const Frame = (): JSX.Element => {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside className="bg-[#3b2a13] w-[280px] h-full flex flex-col shadow-xl">
        {/* Logo container */}
        <div className="mt-8 mb-10 flex justify-center">
          <img
            className="w-[60px] h-[58px] object-contain"
            alt="Sabatak logo"
            src="/component-1-1.png"
          />
        </div>

        {/* Navigation items */}
        <nav className="flex-1 py-2">
          <NavItem icon={Home} label="Dashboard" active={true} />
          <NavItem icon={Building2} label="Company Management" hasSubmenu={true} />
          <NavItem icon={Coins} label="Currency Management" hasSubmenu={true} />
          <NavItem icon={Settings} label="Financial Settings" hasSubmenu={true} />
          <NavItem icon={Store} label="Warehouse Definitions" hasSubmenu={true} />
          <NavItem icon={FileText} label="Warehouse Operations" hasSubmenu={true} />
          <NavItem icon={Store} label="Warehouse Information" hasSubmenu={true} />
          <NavItem icon={Users} label="Employee Management" hasSubmenu={true} />
          <NavItem icon={Handshake} label="Partner Management" hasSubmenu={true} />
          <NavItem icon={ShoppingCart} label="Store" badge="0" />
          <NavItem icon={Percent} label="Discounts & Offers" hasSubmenu={true} />
          <NavItem icon={UserCheck} label="Customer Preferences" hasSubmenu={true} />
          <NavItem icon={Database} label="Data Recovery" />
          <NavItem icon={Settings} label="Settings" hasSubmenu={true} />
        </nav>

        {/* Enhanced bottom account section */}
        <div className="mt-auto border-t border-white/10 pt-4 pb-6">
          <div className="px-6 py-4 mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <User className="w-5 h-5 text-white/70" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-medium">My Account</span>
                <span className="text-white/50 text-xs">Administrator</span>
              </div>
            </div>
          </div>
          <NavItem icon={LogOut} label="Sign Out" />
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 bg-[#3b2a13]/5">
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dashboard cards */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-[#3b2a13]">Total Sales</h3>
                  <ShoppingCart className="w-5 h-5 text-[#f0b31a]" />
                </div>
                <p className="text-3xl font-bold text-[#3b2a13]">$24,500</p>
                <p className="text-sm text-[#3b2a13]/60 mt-2">+12% from last month</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-[#3b2a13]">Active Users</h3>
                  <Users className="w-5 h-5 text-[#f0b31a]" />
                </div>
                <p className="text-3xl font-bold text-[#3b2a13]">1,234</p>
                <p className="text-sm text-[#3b2a13]/60 mt-2">+8% from last week</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-[#3b2a13]">Revenue</h3>
                  <Coins className="w-5 h-5 text-[#f0b31a]" />
                </div>
                <p className="text-3xl font-bold text-[#3b2a13]">$128,250</p>
                <p className="text-sm text-[#3b2a13]/60 mt-2">+15% from last month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};