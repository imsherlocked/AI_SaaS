"use client"

import { cn } from "@/lib/utils";
import { Code2, ImageIcon, LayoutDashboard, MessageSquare, Music2, Settings2, VideoIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";

const monserrat=Montserrat({weight:"600" , subsets:['latin']});


const routes=[
    {
        label:"Dashboard",
        icon:LayoutDashboard,
        href:"/dashboard",
        color:"text-sky-400"
    },
    {
        label:"Conversation",
        icon:MessageSquare,
        href:"/conversation",
        color:"text-violet-400"
    },
    {
        label:"Image Generation",
        icon:ImageIcon,
        href:"/image",
        color:"text-pink-700"
    },
    {
        label:"Video Generation",
        icon:VideoIcon,
        href:"/video",
        color:"text-orange-700"
    },
    {
        label:"Music Generation",
        icon:Music2,
        href:"/music",
        color:"text-emerald-400"
    },
    {
        label:"Code Generation",
        icon:Code2,
        href:"/code",
        color:"text-green-700"
    },
    {
        label:"Setting",
        icon:Settings2,
        href:"/setting",
        
    },
]

const Sidebar=()=>{
    const pathName=usePathname();
    return(
        <div className="space-y-4 flex flex-col h-full bg-gray-800 text-white">
            <div className="px-3 py-2 flex-1">
                <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
                <div className="relative w-8 h-8 mr-4">
                <Image fill alt="logo" src="/logo.png" />
                </div>
                <h1 className={cn("text-2xl font-bold", monserrat.className)}>Genius</h1>
                
                </Link>
                <div className="space-y-1">
                    {routes.map((route)=>(
                        <Link className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition",
                            pathName=== route.href? "text-white bg-white/10": "text-zinc-400")}
                        href={route.href} 
                        key={route.href}>
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar;