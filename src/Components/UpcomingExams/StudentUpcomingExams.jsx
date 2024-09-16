import React from 'react'


const StudentUpcomingExams = () => {
    const exams = [
        { id: 1, subject: 'Mathematics', date: 'April 15, 2024', time: '9:00 AM' },
        { id: 2, subject: 'Physics', date: 'April 20, 2024', time: '10:30 AM' },
        { id: 3, subject: 'Biology', date: 'April 25, 2024', time: '11:00 AM' },
        { id: 4, subject: 'Chemistry', date: 'April 30, 2024', time: '2:00 PM' },
      ];
  // Dummy data for upcoming exams
  

  return (
    <div className="upcoming-exams-container">
      <h2>Upcoming Exams</h2>
      <table className="exam-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {exams.map(exam => (
            <tr key={exam.id}>
              <td>{exam.subject}</td>
              <td>{exam.date}</td>
              <td>{exam.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default StudentUpcomingExams;
