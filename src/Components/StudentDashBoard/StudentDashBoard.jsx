import React from 'react'
import Analysis from '../Analysis/Analysis'
import StudentNavbar from '../StudentNavBar/StudentNavBar'
import Banner from '../Banner/Banner'
const StudentDashBoard = () => {
  return (
    <div>
      <StudentNavbar/>
      <Banner/>
      <Analysis/>
    </div>
  )
}

export default StudentDashBoard
