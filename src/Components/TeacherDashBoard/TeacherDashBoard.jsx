import React from 'react'
import Analysis from '../Analysis/Analysis'
import Navbar from '../NavBar/NavBar'
import Banner from '../Banner/Banner'
import StudentNavBar from '../StudentNavBar/StudentNavBar'
import CardInfo from '../TeacherProfile/TeacherProfile'
import ImageSlider from '../ImageSlider/ImageSlider'
import DepartmentDetails from '../Departments/DepartmentDetails'
import Departments from '../Departments/Departments'

const TeacherDashBoard = () => {
  return (
    <div>
        < Navbar/>
        < Banner />
        <Departments/>
        < ImageSlider  />
      < Analysis  />
      
      
    </div>
  )
}

export default TeacherDashBoard
