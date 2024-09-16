import TimeTableData from '../../Assets/TimeTableData';
import React from 'react'

const StudentTimeTable = () => {
  return (
    <div>
      <div className="timetable-container">
      <h2>Time Table</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            {Array.from({ length: 5 }, (_, i) => (
              <th key={i + 1}>Period {i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TimeTableData.map(day => (
            <tr key={day.id}>
              <td className='daycolor'>{day.day}</td>
              {Array.from({ length: 5 }, (_, i) => {
                const subject = day.subjects[i];
                return (
                  <td key={i + 1}>
                    {subject && (
                      <span className="subject-name">
                        <h3>{subject.name}</h3>: {subject.teachers.join(', ')}
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default StudentTimeTable
