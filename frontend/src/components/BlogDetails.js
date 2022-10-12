import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {

  const [blog, setBlog] = useState()

  const id = useParams().id; 

  const fetchDetails = async () => {
    const res = axios.get(`http://localhost:5000/api/blog/${id}`).catch(
      err=>console.log(err)
    )
    const data = await res.data;
    return data;
  }

  useEffect(()=> {
    fetchDetails().then(data=>setBlog(data))
  },[id]);

  console.log(blog)

  return (
    <div>BlogDetails</div>
  )
}

export default BlogDetails