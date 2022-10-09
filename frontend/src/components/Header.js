import React, { useState } from 'react'
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state=> state.isLoggedIn);

  const [value, setValue] = useState()

  return (
    // sc prop allows us to add some styles in material Ui components
    <AppBar position='sticky' sx={{background: 'linear-gradient(to right, #348f50, #56b4d3)'}}>
      <Toolbar>
        <Typography variant='h4'>Blog Web App</Typography>
        {/* Box acts like a div in material Ui */}
        {isLoggedIn && <Box display='flex' marginLeft={'auto'} marginRight='auto'>
          <Tabs textColor='inherit' value={value} onChange={(e, val)=> setValue(val)}>
            <Tab LinkComponent={Link} to="/blogs" label='All Blogs'/>
            <Tab LinkComponent={Link} to="/myBlogs" label='My Blogs'/>
            <Tab LinkComponent={Link} to="/blog/create" label='Create A Blog Post'/>
          </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn &&  <><Button LinkComponent={Link} to="/auth" variant='contained' color='error' sx={{margin: 2, background: '#F07167', borderRadius: 2, color: 'white'}}>Login</Button>
          <Button LinkComponent={Link} to="/auth" variant='contained' color='error' sx={{margin: 2, background: '#F07167', borderRadius: 2, color: 'white'}}>SignUp</Button></>}
          {isLoggedIn && <Button onClick={()=> dispatch(authActions.logout())} LinkComponent={Link} to="/auth" variant='contained' color='error' sx={{margin: 2, background: '#F07167', borderRadius: 2, color: 'white'}}>Logout</Button>}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header