import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Auth = () => {
  return (
    <div>
      <form action="">
        <Box 
        maxWidth={400}
        display="flex" 
        flexDirection={'column'} 
        alignItems='center' 
        justifyContent={'center'} 
        boxShadow="10px 10px 30px #bbb"
        padding={3}
        margin='auto'
        marginTop={5}
        marginBottom={5}
        borderRadius="5" >
          <Typography padding={3} textAlign='center' variant='h3'>Login</Typography>
          <TextField placeholder='Name' margin='normal'/>
          <TextField type={'email'} placeholder='Email' margin='normal'/>
          <TextField type={'password'} placeholder='Password' margin='normal'/>
          <Button variant='contained' sx={{margin: 2, background: '#F07167', borderRadius: 2, color: 'white'}}>Submit</Button>
          <Button sx={{marginTop: 1, color: 'black'}}>SignUp Here!</Button>
        </Box>
      </form>
      </div>
  )
}

export default Auth