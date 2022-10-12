import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from 'react-router-dom'

const Blog = ({title, description, imageUrl, userName, isUser, id}) => {
  
  const navigate = useNavigate();

  const handleEdit = (e) => {
    navigate(`/myBlogs/${id}`)
  }

  const handleDelete = (e) => {

  }

  return (
    <div>
      <Card sx={{backgroundColor: "#ffb4a2" ,width: "40%", margin: 'auto', marginTop: 2, padding: 2, boxShadow: "5px 5px 10px #ccc", ":hover":{
        boxShadow: "10px 10px 20px #ccc"
      } }}>

        {isUser && (
          <Box display='flex'>
            <IconButton onClick={handleEdit} sx={{marginLeft: 'auto'}}><ModeEditIcon /></IconButton>
            <IconButton onClick={handleDelete}><DeleteIcon /></IconButton>
          </Box>
        )}

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {userName}
            </Avatar>
          }
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={imageUrl}
          alt="Blog Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <b>{userName}</b>{": "} {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;
