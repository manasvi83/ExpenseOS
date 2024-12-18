import { UserButton } from '@clerk/nextjs'
import React from 'react'

function TopNav() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between '>
    <div>
        SearchBar
    </div>
    <div>
        <UserButton/>
    </div>
    </div>
  )
}

export default TopNav