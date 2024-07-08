import { useEffect, useRef, useState } from "react"
import { useParams  } from "react-router-dom"
import AXIOS from 'axios'
//import usestate


function EditPage()
{
    const params = useParams()
    const RefElement = useRef()
    useEffect(()=>
    {
         AXIOS.get(`http://localhost:9003/editdata/${params.id}`)
         .then((res)=>
        {
            const student = res.data[0]
            RefElement.current['name'].value = student.name
            RefElement.current['address'].value = student.address
            RefElement.current['phone'].value = student.phone
            RefElement.current['course'].value = student.course
            RefElement.current['college'].value = student.college

        })
    },[])

    const [student,setStudent] = useState({})

    const handleChange = (e)=>
    {
        setStudent({...student,[e.target.name] : e.target.value})
    }
    const handleSubmit = (e)=>
    {
        e.preventDefault()
        console.log(student)

        const header = {id:params.id}
        AXIOS.post(' http://localhost:9003/updatedata',student,{headers : header})
        .then((res)=>
        {
            alert(res.data)
        })
    }
    return(
        <>
          <form action="" method="post" ref={RefElement} onSubmit={handleSubmit}>
            <div className="container2">
                <input type="text" name="name" onChange={handleChange}></input>
            </div>
            <br/>

            <div className="container2">
                <input type="text" name="address"  onChange={handleChange}></input>
            </div>
            <br/>

            <div className="container2">
                <input type="text" name="phone"  onChange={handleChange}></input>
            </div>
            <br/>

            <div className="container2">
                <input type="text" name="course"  onChange={handleChange}></input>
            </div>
            <br/>

            <div className="container2">
                <input type="text" name="college"  onChange={handleChange}></input>
            </div>
            <br/>

            <div className="container2">
                <button type="submit">Update</button>
            </div>
          </form>
        </>
    )
}
export default EditPage