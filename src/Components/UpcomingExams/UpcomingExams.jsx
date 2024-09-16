import React,{useState} from 'react';
import './UpcomingExams.css';

const UpcomingExams = () => {
  // Dummy data for upcoming exams
  const examsdata = [
    { id: 1, subject: 'Mathematics', date: 'April 15, 2024', time: '9:00 AM' },
    { id: 2, subject: 'Physics', date: 'April 20, 2024', time: '10:30 AM' },
    { id: 3, subject: 'Biology', date: 'April 25, 2024', time: '11:00 AM' },
    { id: 4, subject: 'Chemistry', date: 'April 30, 2024', time: '2:00 PM' },
  ];

  

    const [exams, setExams] = useState([]);
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
  
    const handleAddExam = () => {
      setExams([...exams, { id: Date.now(), subject, date, time }]);
      setSubject('');
      setDate('');
      setTime('');
    };
  
  return (
    <div>
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
          {examsdata.map(exam => (
            <tr key={exam.id}>
              <td>{exam.subject}</td>
              <td>{exam.date}</td>
              <td>{exam.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>







    <div className="upcoming-exams-container">
      <h2>Upcoming Exams</h2>
      <div className="exam-form">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date (e.g., April 15, 2024)"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Time (e.g., 9:00 AM)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={handleAddExam}>Add</button>
      </div>
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
    </div>
  );
};


export default UpcomingExams;
