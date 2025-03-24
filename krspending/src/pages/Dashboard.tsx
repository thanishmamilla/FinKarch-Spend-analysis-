




// import { useEffect, useState } from 'react';
// import { IndianRupee } from 'lucide-react';
// import API from '../../api';
// import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, Legend, ResponsiveContainer } from 'recharts';

// export default function Dashboard() {
//   const [transactions, setTransactions] = useState([]);
//   const [salary, setSalary] = useState('');
//   const [storedSalary, setStoredSalary] = useState('');
//   const [totalSpending, setTotalSpending] = useState(0);

//   useEffect(() => {
//     API.get('/transactions').then(res => {
//       setTransactions(res.data);
//       setTotalSpending(res.data.reduce((sum: number, t: any) => sum + t.amount, 0));
//     });
//     API.get('/auth/salary').then(res => setStoredSalary(res.data.salary || ''));
//   }, []);

//   // Calculate spending percentage
//   const spendingPercentage = storedSalary ? (totalSpending / storedSalary) * 100 : 0;

//   // Get financial status message & color
//   let statusMessage = "You're managing finances well! ✅";
//   let statusColor = "bg-green-500";

//   if (spendingPercentage > 70 && spendingPercentage <= 90) {
//     statusMessage = "Warning: High spending! ⚠️";
//     statusColor = "bg-yellow-500";
//   } else if (spendingPercentage > 90) {
//     statusMessage = "Critical: You're over budget! 🚨";
//     statusColor = "bg-red-500";
//   }

//   return (
// <div className="p-6 mx-auto bg-white shadow-lg rounded-lg max-w-screen-xl h-full">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">📊 Dashboard</h1>

//       <div className="grid grid-cols-12 gap-6">
//         {/* Salary & Financial Health */}
//         <div className="col-span-4 bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold">Set Your Salary</h2>
//           <input
//             type="number"
//             value={salary}
//             onChange={(e) => setSalary(e.target.value)}
//             className="border p-2 rounded w-full mt-2"
//             placeholder="Enter salary"
//           />
//           <button onClick={() => API.put('/auth/salary', { salary: parseFloat(salary) }).then(() => setStoredSalary(salary))} 
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-2">
//             Save
//           </button>
//           {storedSalary && <p className="text-gray-600 mt-2 text-lg">Your Salary: <strong>₹{storedSalary}</strong></p>}
          
//           {/* Financial Status Bar */}
//           <div className="mt-6">
//             <h2 className="text-lg font-semibold">📈 Financial Status</h2>
//             <div className="w-full bg-gray-300 rounded-full h-4">
//               <div className={`${statusColor} h-4 rounded-full`} style={{ width: `${spendingPercentage}%` }}></div>
//             </div>
//             <p className={`text-white p-2 mt-2 rounded ${statusColor} text-center font-semibold`}>
//               {statusMessage} ({spendingPercentage.toFixed(1)}% of salary spent)
//             </p>
//           </div>
//         </div>

//         {/* Pie Chart */}
//         <div className="col-span-4 bg-gray-50 p-4 shadow-md rounded-lg">
//           <h2 className="text-lg font-semibold mb-4 text-center">📌 Expense Breakdown</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie data={transactions} dataKey="amount" nameKey="category" outerRadius={90} fill="#8884d8">
//                 {transactions.map((entry, index) => (
//                   <Cell key={index} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff8042'][index % 4]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Bar Chart */}
//         <div className="col-span-4 bg-gray-50 p-4 shadow-md rounded-lg">
//           <h2 className="text-lg font-semibold mb-4 text-center">📌 Expenses by Category</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={transactions}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="category" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="amount" fill="#82ca9d" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Subcategory Bar Chart */}
//         <div className="col-span-6 bg-gray-50 p-4 shadow-md rounded-lg">
//           <h2 className="text-lg font-semibold mb-4 text-center">📌 Subcategory Expenses</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={transactions}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="subcategory" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="amount" fill="#ff8042" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Payment Method Chart */}
//         <div className="col-span-6 bg-gray-50 p-4 shadow-md rounded-lg">
//           <h2 className="text-lg font-semibold mb-4 text-center">💳 Payment Methods</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie data={transactions} dataKey="amount" nameKey="paymentType" outerRadius={90} fill="#ffc658">
//                 {transactions.map((entry, index) => (
//                   <Cell key={index} fill={['#ffc658', '#ff8042', '#8884d8', '#82ca9d'][index % 4]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Line Chart for Monthly Spending */}
//         <div className="col-span-12 bg-gray-50 p-4 shadow-md rounded-lg">
//           <h2 className="text-lg font-semibold mb-4 text-center">📆 Monthly Spending Trend</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={transactions}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from 'react';
import API from '../../api';
import {
  PieChart, Pie, Cell, Tooltip,
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, LineChart, Line,
  Legend, ResponsiveContainer
} from 'recharts';

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [salary, setSalary] = useState('');
  const [storedSalary, setStoredSalary] = useState('');
  const [totalSpending, setTotalSpending] = useState(0);

  useEffect(() => {
    API.get('/transactions').then(res => {
      setTransactions(res.data);
      setTotalSpending(res.data.reduce((sum, t) => sum + t.amount, 0));
    });
    API.get('/auth/salary').then(res => setStoredSalary(res.data.salary || ''));
  }, []);

  const spendingPercentage = storedSalary ? (totalSpending / storedSalary) * 100 : 0;

  let statusMessage = "You're managing finances well! ✅";
  let statusColor = "bg-green-500";

  if (spendingPercentage > 70 && spendingPercentage <= 90) {
    statusMessage = "Warning: High spending! ⚠️";
    statusColor = "bg-yellow-500";
  } else if (spendingPercentage > 90) {
    statusMessage = "Critical: You're over budget! 🚨";
    statusColor = "bg-red-500";
  }

  return (
    <div className="p-4 sm:p-6 mx-auto bg-white shadow-lg rounded-lg max-w-screen-xl h-full">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">📊 Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Salary & Financial Health */}
        <div className="lg:col-span-4 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold">Set Your Salary</h2>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="border p-2 rounded w-full mt-2 text-sm sm:text-base"
            placeholder="Enter salary"
          />
          <button
            onClick={() => API.put('/auth/salary', { salary: parseFloat(salary) }).then(() => setStoredSalary(salary))}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-2 text-sm sm:text-base">
            Save
          </button>
          {storedSalary && <p className="text-gray-600 mt-2 text-base">Your Salary: <strong>₹{storedSalary}</strong></p>}
          
          <div className="mt-6">
            <h2 className="text-base sm:text-lg font-semibold">📈 Financial Status</h2>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div className={`${statusColor} h-4 rounded-full`} style={{ width: `${spendingPercentage}%` }}></div>
            </div>
            <p className={`text-white p-2 mt-2 rounded ${statusColor} text-center font-semibold text-sm sm:text-base`}>
              {statusMessage} ({spendingPercentage.toFixed(1)}% of salary spent)
            </p>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="lg:col-span-4 bg-gray-50 p-4 shadow-md rounded-lg">
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-center">📌 Expense Breakdown</h2>
          <div className="w-full h-64 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={transactions} dataKey="amount" nameKey="category" outerRadius={90} fill="#8884d8">
                  {transactions.map((entry, index) => (
                    <Cell key={index} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff8042'][index % 4]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="lg:col-span-4 bg-gray-50 p-4 shadow-md rounded-lg">
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-center">📌 Expenses by Category</h2>
          <div className="w-full h-64 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transactions}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subcategory Bar Chart */}
        <div className="lg:col-span-6 bg-gray-50 p-4 shadow-md rounded-lg">
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-center">📌 Subcategory Expenses</h2>
          <div className="w-full h-64 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transactions}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subcategory" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#ff8042" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Payment Method Pie Chart */}
        <div className="lg:col-span-6 bg-gray-50 p-4 shadow-md rounded-lg">
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-center">💳 Payment Methods</h2>
          <div className="w-full h-64 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={transactions} dataKey="amount" nameKey="paymentType" outerRadius={90} fill="#ffc658">
                  {transactions.map((entry, index) => (
                    <Cell key={index} fill={['#ffc658', '#ff8042', '#8884d8', '#82ca9d'][index % 4]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Spending Line Chart */}
        <div className="lg:col-span-12 bg-gray-50 p-4 shadow-md rounded-lg">
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-center">📆 Monthly Spending Trend</h2>
          <div className="w-full h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={transactions}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
