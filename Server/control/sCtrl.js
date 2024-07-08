//import model
const studentModel = require('../model/schema')

const addStudent = async (req,res)=>
{
    try{
        const {name,address,phone,course,college} = req.body

    //db code
    studentModel.create(
        {
            name,address,phone,course,college
        }
    )
    console.log(name)
    res.json('Student Added Successfully..')
    }
    catch(err)
    {
        res.json(err.message)
    }
}

//to fetch
const fetchData = async (req,res)=>
{
    try{
        let record = await studentModel.find()
    if(record.length>0)
    {
        res.json(record)
    }
    else{
        res.json([])
    }
    }
    catch{}
}

//to delete
const deleteData = async (req,res)=>
{
    const idno = req.params.id 
    await studentModel.deleteOne({_id:idno})

}

//to edit
const editData = async (req,res)=>
{
    const idno = req.params.id
    const record = await studentModel.find({_id:idno})
    if(record.length>0)
    {
        res.json(record)
    }
    else
    {
        res.json([])
    }
}

//to update
const updateData = async (req,res)=>
{
    const idno = req.headers.id
    const {name,address,phone,course,college} = req.body
    await studentModel.updateOne(
        {_id:idno},
        {name,address,phone,course,college}
    )
    res.json('Student Data Updated!')


}
module.exports = {addStudent,fetchData,deleteData,editData,updateData}