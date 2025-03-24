






// import { useEffect, useState } from 'react';
// import API from '../../api';
// import TransactionForm from '../components/TransactionForm';

// export default function Transactions() {
//   const [transactions, setTransactions] = useState([]);

//   const fetchTransactions = async () => {
//     try {
//       const res = await API.get('/transactions');
//       setTransactions(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const deleteTransaction = async (id: string) => {
//     await API.delete(`/transactions/${id}`);
//     fetchTransactions();
//   };

//   const formatDate = (timestamp: string) => {
//     return new Date(timestamp).toLocaleString();
//   };

//   return (
//     <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
//       {/* Left Side - Transaction Form */}
//       <div className="bg-white shadow-lg rounded-lg p-8 h-[600px]">
//         <TransactionForm onAdd={fetchTransactions} />
//       </div>

//       {/* Right Side - Transaction List with Scrollable Box */}
//       <div className="bg-white shadow-lg rounded-lg p-8 h-[600px] overflow-hidden">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Transaction History</h2>

//         <div className="overflow-y-auto h-[600px] space-y-4 pr-3">
//           {transactions.length === 0 ? (
//             <p className="text-center text-gray-500">No transactions found.</p>
//           ) : (
//             transactions.map((tx: any) => (
//               <div
//                 key={tx._id}
//                 className="bg-gray-100 shadow-md rounded-lg p-5 flex justify-between items-center hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div>
//                   <p className="text-xl font-semibold text-gray-700">
//                     {tx.category}
//                     {tx.subcategory && <span className="text-gray-500"> ({tx.subcategory})</span>}
//                   </p>
//                   <p className="text-gray-600 text-lg">${tx.amount} - {tx.description}</p>
//                   <p className="text-sm text-gray-400">📅 {formatDate(tx.date)} | 💳 {tx.paymentMethod}</p>
//                 </div>

//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
//                   onClick={() => deleteTransaction(tx._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from 'react';
// import API from '../../api';
// import TransactionForm from '../components/TransactionForm';

// export default function Transactions() {
//   const [transactions, setTransactions] = useState([]);
//   const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

//   const fetchTransactions = async () => {
//     try {
//       const res = await API.get('/transactions');
//       setTransactions(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const deleteTransaction = async (id: string) => {
//     await API.delete(`/transactions/${id}`);
//     fetchTransactions();
//   };

//   const formatDate = (timestamp: string) => {
//     return new Date(timestamp).toLocaleString();
//   };

//   // Group transactions by category
//   const groupedTransactions: { [key: string]: any[] } = transactions.reduce((acc: any, tx: any) => {
//     acc[tx.category] = acc[tx.category] || [];
//     acc[tx.category].push(tx);
//     return acc;
//   }, {});

//   // Toggle visibility for categories
//   const toggleCategory = (category: string) => {
//     setExpandedCategories((prev) => ({ ...prev, [category]: !prev[category] }));
//   };

//   return (
//     <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
//       {/* Left Side - Transaction Form */}
//       <div className="bg-white shadow-lg rounded-lg p-8 h-[600px]">
//         <TransactionForm onAdd={fetchTransactions} />
//       </div>

//       {/* Right Side - Transaction List with Scrollable Box */}
//       <div className="bg-white shadow-lg rounded-lg p-8 h-[600px] overflow-hidden">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Transaction History</h2>

//         <div className="overflow-y-auto h-[600px] space-y-4 pr-3">
//           {Object.keys(groupedTransactions).length === 0 ? (
//             <p className="text-center text-gray-500">No transactions found.</p>
//           ) : (
//             Object.entries(groupedTransactions).map(([category, txs]) => (
//               <div key={category} className="bg-gray-100 shadow-md rounded-lg p-5">
//                 {/* Category Header */}
//                 <div
//                   className="flex justify-between items-center cursor-pointer p-3 bg-gray-200 rounded"
//                   onClick={() => toggleCategory(category)}
//                 >
//                   <h3 className="text-xl font-bold text-gray-700">{category}</h3>
//                   <span className="text-gray-600">{expandedCategories[category] ? '▲' : '▼'}</span>
//                 </div>

//                 {/* Transactions List (Collapsible) */}
//                 {expandedCategories[category] && (
//                   <div className="mt-3 space-y-3">
//                     {txs.map((tx: any) => (
//                       <div
//                         key={tx._id}
//                         className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center hover:shadow-lg transition-shadow duration-300"
//                       >
//                         <div>
//                           <p className="text-lg font-semibold text-gray-700">
//                             {tx.subcategory && <span className="text-gray-500">({tx.subcategory}) </span>}
//                             ${tx.amount} - {tx.description}
//                           </p>
//                           <p className="text-sm text-gray-400">
//                             📅 {formatDate(tx.date)} | 💳 {tx.paymentMethod}
//                           </p>
//                         </div>

//                         <button
//                           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
//                           onClick={() => deleteTransaction(tx._id)}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




import { useEffect, useState } from 'react';
import API from '../../api';
import TransactionForm from '../components/TransactionForm';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [salary, setSalary] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

  const fetchTransactions = async () => {
    try {
      const res = await API.get('/transactions');
      setTransactions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchSalary = async () => {
    try {
      const res = await API.get('/auth/salary');
      setSalary(res.data.salary);
    } catch (err) {
      console.error('Error fetching salary:', err);
    }
  };

  useEffect(() => {
    fetchTransactions();
    fetchSalary();
  }, []);

  const deleteTransaction = async (id: string) => {
    await API.delete(`/transactions/${id}`);
    fetchTransactions();
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  // Group transactions by category
  const groupedTransactions: { [key: string]: any[] } = transactions.reduce((acc: any, tx: any) => {
    acc[tx.category] = acc[tx.category] || [];
    acc[tx.category].push(tx);
    return acc;
  }, {});

  // Calculate total spending
  const totalSpending = transactions.reduce((sum, tx: any) => sum + tx.amount, 0);
  const remainingBalance = salary - totalSpending;

  // Toggle visibility for categories
  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Side - Transaction Form */}
      <div className="bg-white shadow-lg rounded-lg p-8 h-[600px]">
        <TransactionForm onAdd={fetchTransactions} />
      </div>

      {/* Right Side - Transaction List with Balance Display */}
      <div className="bg-white shadow-lg rounded-lg p-8 h-[600px] overflow-hidden">
        {/* Remaining Balance Box */}
        <div className="bg-blue-100 text-blue-800 text-lg font-semibold p-3 rounded-lg shadow-md mb-4 flex justify-between items-center">
          <span> Remaining Balance:</span>
          <span className={`text-xl ${remainingBalance < 0 ? 'text-red-500' : 'text-green-600'}`}>
          ₹{remainingBalance.toFixed(2)}
          </span>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">Transaction History</h2>

        <div className="overflow-y-auto h-[520px] space-y-4 pr-3">
          {Object.keys(groupedTransactions).length === 0 ? (
            <p className="text-center text-gray-500">No transactions found.</p>
          ) : (
            Object.entries(groupedTransactions).map(([category, txs]) => (
              <div key={category} className="bg-gray-100 shadow-md rounded-lg p-5">
                {/* Category Header */}
                <div
                  className="flex justify-between items-center cursor-pointer p-3 bg-gray-200 rounded"
                  onClick={() => toggleCategory(category)}
                >
                  <h3 className="text-xl font-bold text-gray-700">{category}</h3>
                  <span className="text-gray-600">{expandedCategories[category] ? '▲' : '▼'}</span>
                </div>

                {/* Transactions List (Collapsible) */}
                {expandedCategories[category] && (
                  <div className="mt-3 space-y-3">
                    {txs.map((tx: any) => (
                      <div
                        key={tx._id}
                        className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center hover:shadow-lg transition-shadow duration-300"
                      >
                        <div>
                          <p className="text-lg font-semibold text-gray-700">
                            {tx.subcategory && <span className="text-gray-500">({tx.subcategory}) </span>}
                            ${tx.amount} - {tx.description}
                          </p>
                          <p className="text-sm text-gray-400">
                            📅 {formatDate(tx.date)} | 💳 {tx.paymentMethod}
                          </p>
                        </div>

                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                          onClick={() => deleteTransaction(tx._id)}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
