import React from 'react'

const Personal = ({setFormData, formData}) => {
  return (
    <div className='personal'>
    <input type="text" placeholder = "Enter First Name..." value={formData.FirstName} 
      onChange={(event)=>{setFormData({...formData, FirstName: event.target.value})}}/>
    <input type="text" placeholder = "Enter Last Name..." value={formData.LastName} 
      onChange={(event)=>{setFormData({...formData, LastName: event.target.value})}}/>
    <input type="text" placeholder = "Enter UserName..." value={formData.UserName} 
      onChange={(event)=>{setFormData({...formData, UserName: event.target.value})}}/>
    </div>
  )
}

export default Personal