'use client'
import React, { useEffect } from 'react'
import SideNav from './_components/SideNav.jsx'
import TopNav from './_components/TopNav.jsx'
import { db } from '../../../utils/dbConfig.js'
import { useUser } from '@clerk/nextjs'
import { Budgets } from '../../../utils/schema.js'
import { eq } from 'drizzle-orm'
import { useRouter } from 'next/navigation.js'


function DashboardLayout({ children }) {

  const {user} = useUser();
  const router = useRouter();
  // useEffect(()=>{
  //   user&&checkUserBudgets();
  // },[user])

  useEffect(() => {
    console.log(user); // This will show the structure of the user object
    if (user) {
      checkUserBudgets();
    }
  }, [user]);

  // const checkUserBudgets = async() => {
  //   const result  = await db.select()
  //   .from(Budgets)
  //   .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))

  //   console.log(result);
  // }

  const checkUserBudgets = async () => {
    try {
      const result = await db.select()
        .from(Budgets)
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
  
      console.log(result);
       if(result?.length==0){
        router.replace('/dashboard/budget')
       }
    } catch (error) {
      console.error("Error fetching budgets:", error); // Handle potential errors
    }
  };

  return (
    <div>
      <div className='fixed md:w-64 hidden md:block'>
        <SideNav /></div>
      <div className='md:ml-64'>
        <TopNav/>
        {children}</div>
    </div>
  )
}

export default DashboardLayout