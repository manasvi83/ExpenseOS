'use client'
import { UserButton } from '@clerk/nextjs'
import { LayoutGridIcon, PiggyBank, ReceiptIndianRupee, TowerControlIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {
    const menuList = [
        {
            id:1,
            name: "Dashboard",
            icon: LayoutGridIcon,
            path: '/dashboard'
        },{
            id:2,
            name: "Budget",
            icon: PiggyBank,
            path: '/dashboard/budget'
        },{
            id:3,
            name: "Expenses",
            icon: ReceiptIndianRupee,
            path: '/dashboard/expenses'
        },{
            id:4,
            name: "Tools",
            icon: TowerControlIcon,
            path: '/dashboard/tools'
        },
    ]

    const path = usePathname();

    useEffect(()=> {
        console.log(path)
    },[path])

  return (
    <div className='h-screen p-5 border shadow-sm'>
        <Image
        className='mb-12 m-5'
        alt='logo'
        src={'/darklogo.webp'}
        width={160}
        height={100}
        />
        <div>
            {menuList.map((menu,index)=>(
                <Link key={menu.id} href={menu.path}>
                <h2  className={`flex items-center gap-2 mb-4 font-medium
                 text-slate-700 p-5 cursor-pointer rounded-md
                 hover:text-primary hover:bg-blue-100 ${path == menu.path && 'text-primary bg-blue-100'}`}> 
                    <menu.icon className="w-5 h-5" />
                    {menu.name}
                </h2>
                </Link>
            ))}
        </div>
        <div className='fixed bottom-10 p-5 flex gap-2 items-center'>
            <UserButton/>
            Profile
        </div>
    </div>
  )
}

export default SideNav