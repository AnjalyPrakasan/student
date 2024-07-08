import {Routes,Route} from 'react-router-dom'
import Home from './student/home'
import AddStudent from './student/addStudent'
import ViewStudent from './student/viewstudent'
import EditPage from './student/editpage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/addstudent' element= {<AddStudent/>}></Route>
        <Route path='/viewstudents' element= {<ViewStudent/>}></Route>
        <Route path='/editstudent/:id' element={<EditPage/>}></Route>

      </Routes>
    </>
  )
}

export default App
