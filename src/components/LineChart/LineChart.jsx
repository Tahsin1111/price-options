import { LineChart as LChart, Line, XAxis, YAxis, } from 'recharts';

const LineChart = () => {
    
    const students = [
        { id: 1, name: "Student 1", mathMarks: 85, physicsMarks: 75, chemistryMarks: 88 },
        { id: 2, name: "Student 2", mathMarks: 92, physicsMarks: 80, chemistryMarks: 91 },
        { id: 3, name: "Student 3", mathMarks: 78, physicsMarks: 70, chemistryMarks: 82 },
        { id: 4, name: "Student 4", mathMarks: 88, physicsMarks: 85, chemistryMarks: 90 },
        { id: 5, name: "Student 5", mathMarks: 95, physicsMarks: 88, chemistryMarks: 94 },
        { id: 6, name: "Student 6", mathMarks: 79, physicsMarks: 72, chemistryMarks: 84 },
        { id: 7, name: "Student 7", mathMarks: 91, physicsMarks: 83, chemistryMarks: 89 },
        { id: 8, name: "Student 8", mathMarks: 87, physicsMarks: 78, chemistryMarks: 88 },
        { id: 9, name: "Student 9", mathMarks: 83, physicsMarks: 75, chemistryMarks: 81 },
        { id: 10, name: "Student 10", mathMarks: 90, physicsMarks: 81, chemistryMarks: 87 }
      ];
      
      
    return (
        <div>
            <LChart width={700} height={400} data={students}>
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
              <Line dataKey="mathMarks" stroke='red'></Line>
              <Line dataKey="physicsMarks" stroke='yellow'></Line>
              <Line dataKey="chemistryMarks" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;