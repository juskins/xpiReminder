import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './Donutchart.scss'


const data = [
     { name: 'Expired', value: 10 },
     { name: 'Fresh', value: 30 },
     { name: 'Soon to Expire', value: 20 },
   ];

const COLORS = ['#FF0000', '#008000', '#131A4E'];

const DonutChart = () => {
     return (
      <div className="featured">
           <div className='flex'>
               <div className='flex'>
                    <div className='line' style={{backgroundColor:'#FF0000'}}></div>
                    <p>Expired</p>
               </div>
               <div className='flex'>
                    <div className='line' style={{backgroundColor:'#131A4E'}}></div>
                    <p>Soon to Expire</p>
               </div>
               <div className='flex'>
                    <div className='line' style={{backgroundColor:'#008000'}}></div>
                    <p>Fresh</p>
               </div>
               
          </div>
          <ResponsiveContainer width="100%" height={400}>
         

          <PieChart>
          <Pie
               data={data}
               cx="50%"
               cy="50%"
               innerRadius={100}
               outerRadius={150}
               fill="#8884d8"
               paddingAngle={0}
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
   
