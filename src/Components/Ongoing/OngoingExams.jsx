import React from 'react';
import './OngoingExams.css';

const OngoingExams = () => {
  // Sample ongoing exams data
  const ongoingExams = [
    { id: 1, subject: 'Mathematics', date: 'April 25, 2022', time: '10:00 AM - 12:00 PM', location: 'Room 101' },
    { id: 2, subject: 'Science', date: 'April 26, 2022', time: '9:00 AM - 11:00 AM', location: 'Room 102' },
    { id: 3, subject: 'History', date: 'April 27, 2022', time: '1:00 PM - 3:00 PM', location: 'Room 103' },
  ];

  return (
    <div className="ongoing-exams-container">
      <h2>Ongoing Exams</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {ongoingExams.map((exam) => (
            <tr key={exam.id}>
              <td>{exam.subject}</td>
              <td>{exam.date}</td>
              <td>{exam.time}</td>
              <td>{exam.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OngoingExams;
