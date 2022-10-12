import axios from 'axios'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const labelStyles = {mt:1, mb:2, fontSize:'24px', fontWeight:'bold'}

const AddBlog = () => {

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageUrl: ""
  })

  const handleChange = (e) => {
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const sendRequest = async () => {
    const res = await axios.post("http://localhost:5000/api/blog/create", {
      title: inputs.title,
      description: inputs.description,
      image: inputs.imageUrl,
      user: localStorage.getItem("userId")
    })
    .catch((err) => console.log(err));

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
    sendRequest().then(data=>console.log(data))
  }

  return (
    <div>
      <Box marginTop={'3%'}>
      <form onSubmit={handleSubmit}>
        <Box border={3} borderColor='linear-gradient(to right, #348f50, #56b4d3)' borderRadius={10} boxShadow="10px 10px 20px #ccc" padding={3} margin={'auto'} 
        display="flex" flexDirection='column' width={"80%"}>
          <Typography fontWeight={'bold'} padding={3} color='grey' variant='h4' textAlign={'center'}>Create A Post</Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField name='title' onChange={handleChange} value={inputs.title} margin='normal' variant='outlined'/>
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField name='description' onChange={handleChange} value={inputs.description} margin='normal' variant='outlined'/>
          <InputLabel sx={labelStyles}>Image URL</InputLabel>
          <TextField name='imageUrl' onChange={handleChange} value={inputs.imageUrl} margin='normal' variant='outlined'/>
          <Button variant='contained' color='error' sx={{margin: 2, background: '#F07167', borderRadius: 2, color: 'white'}} type='submit'>Submit</Button>
        </Box>
      </form>
      </Box>
    </div>
  )
}

export default AddBlog