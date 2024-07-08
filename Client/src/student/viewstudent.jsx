import { useState, useEffect } from 'react'
import AXIOS from 'axios'

function ViewStudent()
{
    const [record,setRecord] = useState([])

    useEffect(()=>
    {
        //axios
        AXIOS.get('http://localhost:9003/fetchdata')
        .then((res)=>
        {
            setRecord(res.data)
        })
        .catch(err => console.log(err))
    },[record])

    //to delete
    function DeleteData(id)
    {
        AXIOS.delete(`http://localhost:9003/deletedata/${id}`)
        .then((res)=>
        {
            alert(res.data)
        })
        .catch(err => console.log(err))
    }
    return(
        <>
          <table border={1}>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                    <th>PHONE</th>
                    <th>COURSE</th>
                    <th>COLLEGE</th>
                    <th colSpan={2}>ACTION</th>
                </tr>
            </thead>

            <tbody>
                
                    {record.map((student,index)=>
                    {
                        return(
                            <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.address}</td>
                            <td>{student.phone}</td>
                            <td>{student.course}</td>
                            <td>{student.college}</td>
                            <td><button onClick={()=>
                                {
                                    DeleteData(student._id)
                                }
                            }>Delete</button></td>

                            <td><a href={`/editstudent/${student._id}`}>Edit</a></td>
                            </tr>
                        )
                    })}
                    
                
            </tbody>
          </table>
        </>
    )
}
export default ViewStudent