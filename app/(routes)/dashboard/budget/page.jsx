import React from 'react'
import BudgetList from './_components/BudgetList.jsx'


function Budget() {
  return (
    <div className='p-10'>
      {/* <CreateBudget/> */}
      <h2 className='font-bold text-3xl'> My Budgets</h2>
      <BudgetList />
      
    </div>
  )
}

export default Budget