import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const Contact = () => {
    let [ user , setUser ] = useState({ firstName  : "" , LastName : '' , email : "" , Phone : ''})
    let [ success , setsuccess ] = useState(false)
    const changehandler = (e)=>{
        let name = e.target.name
        let value = e.target.value
        setUser({...user , [name] : value})
        localStorage.setItem(name,value)
      }
      const toggle = ()=>{
        setsuccess(!success)
        setUser({ firstName  : "" , LastName : '' , email : "" , Phone : ''})
      }
  return (
    <div>
    {  success ?   <Stack sx={{ width: '100%' }} spacing={2} >
      <Alert severity="success">Form Submit successfully</Alert>
    </Stack> : <div></div>}
      <div name='contact' className='w-full h-screen bg-gradient-to-b
     from-white to-gray-200 text-black '>
     <div className='flex flex-col p-4 justify-center 
      max-w-screen-lg mx-auto h-full '>
      <div className='pb-8'>
        <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
        <div  className='flex justify-center py-4'>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" type='text' name='firstName'
       value={user.firstName} onChange={changehandler}  label="First Name" variant="standard" />
      <TextField id="standard-basic" 
      value={user.LastName} onChange={changehandler} type='text' name='LastName'   label="Last Name" variant="standard" />
      <TextField id="standard-basic"
      value={user.email}  onChange={changehandler} type='email' name='email'   label="E-mail" variant="standard" />
      <TextField id="standard-basic"
       value={user.Phone}   onChange={changehandler} type='number' name='Phone'    label="Phone Number" variant="standard" />
    </Box>
          </div>
     <div className='py-6'>    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={toggle}>Submit</Button>
    </Stack>
    </div> 
      </div>
     </div>
    </div>
    </div>
  )
}

export default Contact
