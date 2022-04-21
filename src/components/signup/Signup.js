import React from 'react'

const Signup = ({setFormData, formData}) => {
  return (
    <div className='signup'>
      <input type="text" placeholder = "Enter your Email..." value={formData.Email} 
      onChange={(event)=>{setFormData({...formData, Email: event.target.value})}}/>
      <input type="text" placeholder = "Enter your Password..." value={formData.Password} 
      onChange={(event)=>{setFormData({...formData, Password: event.target.value})}}/>
      <input type="text" placeholder = "Confirm Password..." value={formData.ConfirmPassword}
      onChange={(event)=>{setFormData({...formData, ConfirmPassword: event.target.value})}}/>
    </div>
  )
}

export default Signup