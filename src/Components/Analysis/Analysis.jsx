import React, { Component } from 'react';
import studentsData from '../../Assets/studentsData'; 
import CanvasJSReact from '@canvasjs/react-charts';
import './Analysis.css'; // Importing CSS file

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Analysis extends Component {
  render() {
    // Extracting grades from student data for pie chart
    const grades = studentsData.map(student => student.academicInfo.grade);

    // Counting occurrences of each grade for pie chart
    const gradeCounts = {};
    grades.forEach(grade => {
      gradeCounts[grade] = (gradeCounts[grade] || 0) + 1;
    });

    // Converting gradeCounts into an array of objects for pie chart data
    const pieDataPoints = Object.entries(gradeCounts).map(([grade, count]) => ({
      y: count,
      label: grade
    }));

    // Extracting social networking data from student data for bar chart
    const socialNetworkData = studentsData.map(student => ({
      label: student.personalInfo.firstName, // Changed to use name
      y: student.academicInfo.totalmarks // Changed to use totalmarks
    }));
    

    const pieOptions = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Grades Distribution"
      },
      data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: true,
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: pieDataPoints
      }]
    };

    const barOptions = {
      animationEnabled: true,
      theme: "light2",
      title:{
        text: "Total Marks Comparision"
      },
      axisX: {
        title: "Students",
        reversed: true,
      },
      axisY: {
        title: "Marks",
        includeZero: true,
      },
      data: [{
        type: "bar",
        dataPoints: socialNetworkData
      }]
    };

    return (
      <div className="analysis-container">
        <div className="chart-container">
          <div className="chart">
            <h2>Pie Chart</h2>
            <CanvasJSChart options={pieOptions} />
          </div>
          <div className="chart">
            <h2>Bar Chart</h2>
            <CanvasJSChart options={barOptions} />
          </div>
        </div>
      </div>
    );
  }
}

export default Analysis;
