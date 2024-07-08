import { useState } from "react"
import AXIOS from 'axios'
import Navbar from "./navbar"

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
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="container">
            <input type="text" name="name" placeholder="Enter name!" onChange={handleChange}></input>
            <br/>
            </div>

            <div className="container">
            <input type="text" name="address" placeholder="Enter Address!" onChange={handleChange}></input>
            <br/>
            </div>

            <div className="container">
            <input type="text" name="phone" placeholder="Enter Contact!" onChange={handleChange}></input>
            <br/>
            </div>

           <div className="container">
           <input type="text" name="course" placeholder="Enter Course!" onChange={handleChange}></input>
           <br/>
           </div>

            <div className="container">
            <input type="text" name="college" placeholder="Enter College!" onChange={handleChange}></input>
            <br/>
            </div>

           <div className="container">
           <button type="submit">Add Student</button>
           </div>


          </form>
        </>
    )
}
export default AddStudent