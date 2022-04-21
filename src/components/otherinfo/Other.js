import React from 'react'

const Other = ({setFormData, formData}) => {
  return (
    <div className='other'>
    <input type="text" placeholder = "Enter Nationality..." value={formData.Nationality} 
      onChange={(event)=>{setFormData({...formData, Nationality: event.target.value})}}/>
    <input type="text" placeholder = "Enter Recovery email..." value={formData.AltEmail} 
      onChange={(event)=>{setFormData({...formData, AltEmail: event.target.value})}}/>
    <input type="text" placeholder = "other..." value={formData.Other} 
      onChange={(event)=>{setFormData({...formData, Other: event.target.value})}}/>
    </div>
  )
}

export default Other