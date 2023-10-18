import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './Donutchart.scss'
import {
  Icon, // Material-UI Icon component
  ReportProblem, // Expired icon
  CheckCircle, // Fresh icon
  HourglassEmpty, // Soon to Expire icon
} from '@mui/icons-material';

const data = [
     { name: 'Expired', value: 10 },
     { name: 'Fresh', value: 30 },
     { name: 'Soon to Expire', value: 20 },
   ];

const COLORS = ['#FF0000', '#008000', '#131A4E'];

const DonutChart = () => {
     return (
      <div className="featured">
          <ResponsiveContainer width="100%" height={400}>
          <PieChart>
          <Pie
               data={data}
               cx="50%"
               cy="50%"
               innerRadius={60}
               outerRadius={80}
               fill="#8884d8"
               paddingAngle={5}
               dataKey="value"
          >
          {data.map((entry, index) => 
               (
               <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
               ))}
          </Pie>
          </PieChart>
     </ResponsiveContainer>
      </div>
     );
   };
   
   export default DonutChart;
   
