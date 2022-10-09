import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { authActions } from '../store'
import {useNavigate} from 'react-router-dom'

const Auth = () => {

  const  navigate = useNavigate()

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [isSignUp, setIsSignUp] = useState(false)

  const handleChange = (e) => {
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const sendRequest = async (type='login') => {
    const res = await axios.post(`http://localhost:5000/api/user/${type}`, {
      name: inputs.name,
      email : inputs.email,
      password: inputs.password
    }).catch(error=>console.log(error))
    try {
      const dat = await res.data;
      return dat; 
    } catch (error) {
      console.log(error)
    }
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
    
    if (isSignUp) {
      sendRequest('signup').then((data)=>localStorage.setItem("userId", data.user._id))
      .then(()=>dispatch(authActions.signup())).then(()=> navigate("/blogs"))
      .then(data=>console.log(data))
    }
    else{
      sendRequest().then((data)=>localStorage.setItem("userId", data.user._id))
      .then(()=>dispatch(authActions.login())).then(()=> navigate("/blogs"))
      .then(data=>console.log(data))
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <Typography padding={3} textAlign='center' variant='h3'>{isSignUp? "SignUp" : "Login"}</Typography>
          {isSignUp && <TextField name='name' onChange={handleChange} value={inputs.name} placeholder='Name' margin='normal'/>}
          <TextField name='email' onChange={handleChange} value={inputs.email} type={'email'} placeholder='Email' margin='normal'/>
          <TextField name='password' onChange={handleChange} value={inputs.password} type={'password'} placeholder='Password' margin='normal'/>
          <Button type='submit' variant='contained' color='error' sx={{margin: 2, background: '#F07167', borderRadius: 2, color: 'white'}}>{isSignUp? "Register" : "Login"}</Button>
          <Button onClick={()=> setIsSignUp(!isSignUp)} sx={{marginTop: 1, color: 'black'}}>{isSignUp? "Login Here" : "Register Now!"} </Button>
        </Box>
      </form>
      </div>
  )
  }
export default Auth