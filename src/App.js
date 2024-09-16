import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from './Components/firebase'; // Adjust the path accordingly
import { onAuthStateChanged } from 'firebase/auth';

// Import your components
import './App.css';
import TeacherLoginPage from './Components/TeacherLogin/TeacherLogin';
import UserPage from './Components/UserPage/UserPage';
import StudentLoginPage from './Components/StudentLogin/StudentLogin';
import TeacherDashBoard from './Components/TeacherDashBoard/TeacherDashBoard';
import TimeTable from './Components/TimeTable/TimeTable';
import StudentDashBoard from './Components/StudentDashBoard/StudentDashBoard';
import StudentTimeTable from './Components/StudentTimeTable/StudentTimeTable';
import UpcomingExams from './Components/UpcomingExams/UpcomingExams';
import StudentUpcomingExams from './Components/UpcomingExams/StudentUpcomingExams';
import TeacherProfile from './Components/Profile/TeacherProfile';
import StudentProfile from './Components/Profile/StudentProfile';
import StudentSettings from './Components/Settings/StudentSettings';
import TeacherSettings from './Components/Settings/TeacherSettings';
import OngoingExams from './Components/Ongoing/OngoingExams';
import Placements from './Components/Placements/Placements';
import TeacherRegisterPage from './Components/TeacherLogin/TeacherRegister';
import StudentRegisterPage from './Components/StudentLogin/StudentRegister';
import SPlacementsPage from './Components/StudentPlacements/Placements/Placements';
import AddTeacher from './Components/Profile/AddTeacher';
import DepartmentDetails from './Components/Departments/DepartmentDetails';
import CardInfo from './Components/TeacherProfile/TeacherProfile';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <div className="App">
        {/* You can place any global elements here */}
      </div>

      <Routes>
        <Route path='/teacher-login' element={<TeacherLoginPage />} />
        <Route path='/' element={<UserPage />} />
        <Route path='/student-login' element={<StudentLoginPage />} />
        <Route path='/TeacherDashBoard' element={<TeacherDashBoard />} />
        <Route path='/timetable' element={<TimeTable />} />
        <Route path='/studenttimetable' element={<StudentTimeTable />} />
        <Route path='/StudentDashBoard' element={<StudentDashBoard />} />
        <Route path='/upcoming' element={<UpcomingExams />} />
        <Route path='/studentupcoming' element={<StudentUpcomingExams />} />
        <Route path='/teacherprofile' element={currentUser ? <TeacherProfile /> : <TeacherLoginPage />} />
        <Route path='/studentprofile' element={<StudentProfile />} />
        <Route path='/studentsettings' element={<StudentSettings />} />
        <Route path='/teachersettings' element={<TeacherSettings />} />
        <Route path='/logout' element={<UserPage />} />
        <Route path='/ongoing' element={<OngoingExams />} />
        <Route path='/placements' element={<Placements />} />
        <Route path='/register' element={<TeacherRegisterPage />} />
        <Route path='/student-register' element={<StudentRegisterPage />} />
        <Route path='/Splacements' element={<SPlacementsPage />} />
        <Route path='/addteacher' element={<AddTeacher />} />

        <Route path="/department/:id" element={<DepartmentDetails />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
