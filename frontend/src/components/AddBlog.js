import { Box, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'

const labelStyles = {mt:1, mb:2, fontSize:'24px', fontWeight:'bold'}

const AddBlog = () => {
  return (
    <div>
      <Box marginLeft={'10%'}>
      <form action="">
        <Box border={3} borderColor='green' borderRadius={10} boxShadow="10px 10px 20px #ccc" padding={3} margin={3} 
        display="flex" flexDirection='column' width={"80%"}>
          <Typography fontWeight={'bold'} padding={3} color='grey' variant='h4' textAlign={'center'}>Create A Post</Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField margin='normal' variant='outlined'/>
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField margin='normal' variant='outlined'/>
          <InputLabel sx={labelStyles}>Image URL</InputLabel>
          <TextField margin='normal' variant='outlined'/>
        </Box>
      </form>
      </Box>
    </div>
  )
}

export default AddBlog