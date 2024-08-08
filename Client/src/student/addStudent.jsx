import { useState } from "react"
import AXIOS from 'axios'
import Navbar from "./navbar"

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Grid, Stack, Typography } from "@mui/material";

function AddStudent()
{
  
    const [student,setStudent] = useState({})

    const handleChange = (e)=>
    {
        setStudent({...student,[e.target.name] : e.target.value})
    }

    const handleSubmit = (e)=>
    {
        e.preventDefault()
        console.log(student)

        //axios
        AXIOS.post('http://localhost:9003/adddata',student)
        .then((res)=>
        {
          alert(res.data)
        })

    
    }
    return(
        <>
        <Navbar/>
        <Box>
          <Grid container justifyContent={"center"} alignItems={'center'}>
            <Grid item lg={8}>
              <Typography variant="h4">
                Sign Up!
              </Typography>

            <form action="" method="post" onSubmit={handleSubmit}>

              <Stack spacing={2}> 

            
            <div className="container">
            <TextField label="Name" variant="standard" type="text" name="name" placeholder="Enter name!" onChange={handleChange}/>
           
            </div>
            <br/>

            <div className="container">
            <TextField label="Address" variant="standard" type="text" name="address" placeholder="Enter Address!" onChange={handleChange}/>
            
            </div>
            <br/>

            <div className="container">
            <TextField label="Phone" variant="standard" type="text" name="phone" placeholder="Enter Contact!" onChange={handleChange}/>
            
            </div>
            <br/>

           <div className="container">
           <TextField type="text" label="Course" variant="standard" name="course" placeholder="Enter Course!" onChange={handleChange}/>
           
           </div>
           <br/>

            <div className="container">
            <TextField label="College" variant="standard" type="text" name="college" placeholder="Enter College!" onChange={handleChange}/>
            <br/>
            </div>
            <br/>

           <div className="container">
           <Button variant="contained" color="success" size="medium"  type="submit">Add Student</Button>
           </div>


         

              </Stack>
              </form>
            </Grid>

          </Grid>
        </Box>
          
        </>
    )
}
export default AddStudent