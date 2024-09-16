import React, { useState, useEffect } from 'react';
import { db } from '../../Components/firebase'; // Import Firestore
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import './TimeTable.css';

const TimeTable = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ day: '', periods: [] });
  const [timeTableEntries, setTimeTableEntries] = useState([]);

  // Fetch departments from Firebase
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'departments'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDepartments(data);
      } catch (error) {
        console.error('Error fetching departments: ', error);
      }
    };

    fetchDepartments();
  }, []);

  // Fetch timetable data for selected department
  useEffect(() => {
    const fetchTimeTable = async () => {
      if (!selectedDepartment) return;

      try {
        const q = query(collection(db, 'timeTable'), where('department', '==', selectedDepartment));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTimeTableEntries(data);
      } catch (error) {
        console.error('Error fetching timetable data: ', error);
      }
    };

    fetchTimeTable();
  }, [selectedDepartment]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.day || formData.periods.some(period => !period.subjectName || !period.teacherName)) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Add the new timetable entry to Firebase
      await addDoc(collection(db, 'timeTable'), { ...formData, department: selectedDepartment });
      setTimeTableEntries(prevEntries => [...prevEntries, { id: Date.now(), ...formData }]);
      setFormData({ day: '', periods: [] });
      setShowForm(false);
    } catch (error) {
      console.error('Error adding timetable data: ', error);
    }
  };

  const handleAddPeriod = () => {
    setFormData(prevState => ({ ...prevState, periods: [...prevState.periods, { subjectName: '', teacherName: '' }] }));
  };

  const handlePeriodChange = (index, field, value) => {
    setFormData(prevState => {
      const updatedPeriods = [...prevState.periods];
      updatedPeriods[index][field] = value;
      return { ...prevState, periods: updatedPeriods };
    });
  };

  return (
    <div>
      <div className="department-buttons">
        <h2>Select Department</h2>
        {departments.map(dept => (
          <button key={dept.id} onClick={() => setSelectedDepartment(dept.id)}>
            {dept.id}
          </button>
        ))}
      </div>

      {selectedDepartment && (
        <div className="timetable-container">
          <h2>Time Table for {selectedDepartment}</h2>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Period 1</th>
                <th>Period 2</th>
                <th>Period 3</th>
                <th>Period 4</th>
                <th>Period 5</th>
              </tr>
            </thead>
            <tbody>
              {timeTableEntries.map(entry => (
                <tr key={entry.id}>
                  <td>{entry.day}</td>
                  {Array.from({ length: 5 }, (_, i) => (
                    <td key={i + 1}>
                      {entry.periods && entry.periods[i] ? (
                        <span>{entry.periods[i].subjectName} - {entry.periods[i].teacherName}</span>
                      ) : (
                        <span>No class</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={() => setShowForm(true)}>Add Time Table</button>

          {showForm && (
            <div className="form-modal">
              <h3>Add Time Table</h3>
              <form onSubmit={handleFormSubmit}>
                <label>
                  Day:
                  <input type="text" value={formData.day} onChange={e => setFormData({ ...formData, day: e.target.value })} />
                </label>
                {formData.periods.map((period, index) => (
                  <div key={index}>
                    <label>
                      Subject Name:
                      <input type="text" value={period.subjectName} onChange={e => handlePeriodChange(index, 'subjectName', e.target.value)} />
                    </label>
                    <label>
                      Teacher Name:
                      <input type="text" value={period.teacherName} onChange={e => handlePeriodChange(index, 'teacherName', e.target.value)} />
                    </label>
                  </div>
                ))}
                <button type="button" onClick={handleAddPeriod}>Add Period</button>
                <button type="submit">Add</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TimeTable;
