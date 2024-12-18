'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../components/ui/dialog.jsx"
import { Input } from "../../../../../components/ui/input.jsx"
import EmojiPicker from 'emoji-picker-react'
import { Button } from '../../../../../components/ui/button.jsx';
import { db } from '../../../../../utils/dbConfig.js'
import { Budgets } from '../../../../../utils/schema.js'
import { useUser } from '@clerk/nextjs'

function CreateBudget() {

  const [emojiIcon, setEmojiIcon] = useState('😊');
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const [name,setName] = useState('');
  const [amount,setAmount] = useState('');

  const {user} = useUser();
  const onCreateBudget=async()=>{
    const result=await db.insert(Budgets)
    .values({
      name:name,
      amount:amount,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      icon:emojiIcon
    }).returning({insertedId:Budgets.id})

    if(result){
      toast('New Budget Created');
    }
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className='bg-slate-100 p-10 rounded-md items-center 
        flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md'>
            <h2 className='text-3xl'>+</h2>
            <h2>Create New Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <div className='mt-5'>
                <Button variant="outline"
                size="lg"
                className="text-lg"
                onClick = {()=>setOpenEmojiPicker(!openEmojiPicker)}
                >{emojiIcon}</Button>
                <div className='absolute'> 
                  <EmojiPicker
                  open={openEmojiPicker}
                  onEmojiClick={(e)=>{
                    setEmojiIcon(e.emoji)
                    setOpenEmojiPicker(false)
                  }}/>
                </div>
                <div className='mt-2'>
                  <h2 className='text-black font-medium my-1'>Budget Name</h2>
                  <Input 
                  placeholder="e.g Home Decor"
                  onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='mt-2'>
                  <h2 className='text-black font-medium my-1'>Budget Amount</h2>
                  <Input 
                  type="number"
                  placeholder="e.g 5000$"
                  onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <Button 
                disabled={!(name || amount)}
                onClick={()=>onCreateBudget()}
                className="mt-5 w-full">Create Budget</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default CreateBudget