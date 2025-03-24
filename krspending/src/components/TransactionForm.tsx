// import { useState } from 'react';
// import API from '../../api';

// interface Props {
//   onAdd: () => void;
// }

// export default function TransactionForm({ onAdd }: Props) {
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('Food');
//   const [description, setDescription] = useState('');

//   const addTransaction = async () => {
//     await API.post('/transactions', {
//       amount: parseFloat(amount),
//       category,
//       description,
//     });
//     setAmount('');
//     setDescription('');
//     onAdd();
//   };

//   return (
//     <div className="mb-4">
//       <input
//         className="border p-2 mr-2"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <select
//         className="border p-2 mr-2"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       >
//         <option>Food</option>
//         <option>Travel</option>
//         <option>Bills</option>
//       </select>
//       <input
//         className="border p-2 mr-2"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button
//         className="bg-green-500 text-white px-3 py-2 rounded"
//         onClick={addTransaction}
//       >
//         Add
//       </button>
//     </div>
//   );
// }



// import { useState } from 'react';
// import API from '../../api';

// interface Props {
//   onAdd: () => void;
// }

// export default function TransactionForm({ onAdd }: Props) {
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('Food');
//   const [subcategory, setSubcategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('Cash');

//   const subcategories = {
//     Food: ['Groceries', 'Restaurant', 'Snacks'],
//     Travel: ['Flight', 'Hotel', 'Taxi'],
//     Bills: ['Electricity', 'Water', 'Internet'],
//   };

//   const addTransaction = async () => {
//     await API.post('/transactions', {
//       amount: parseFloat(amount),
//       category,
//       subcategory: subcategory || null,
//       description,
//       paymentMethod,
//     });

//     setAmount('');
//     setDescription('');
//     setSubcategory('');
//     onAdd();
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
//       <h3 className="text-xl font-semibold mb-4 text-gray-700">Add Transaction</h3>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         <input
//           className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400"
//           type="number"
//           placeholder="Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />

//         <select
//           className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400"
//           value={category}
//           onChange={(e) => {
//             setCategory(e.target.value);
//             setSubcategory('');
//           }}
//         >
//           <option>Food</option>
//           <option>Travel</option>
//           <option>Bills</option>
//         </select>

//         {subcategories[category] && (
//           <select
//             className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400"
//             value={subcategory}
//             onChange={(e) => setSubcategory(e.target.value)}
//           >
//             <option value="">Select Subcategory</option>
//             {subcategories[category].map((sub) => (
//               <option key={sub} value={sub}>
//                 {sub}
//               </option>
//             ))}
//           </select>
//         )}

//         <input
//           className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <select
//           className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400"
//           value={paymentMethod}
//           onChange={(e) => setPaymentMethod(e.target.value)}
//         >
//           <option>Cash</option>
//           <option>Credit Card</option>
//           <option>Bank Transfer</option>
//         </select>
//       </div>

//       <button
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
//         onClick={addTransaction}
//       >
//         Add Transaction
//       </button>
//     </div>
//   );
// }



import { useState } from 'react';
import API from '../../api';

interface Props {
  onAdd: () => void;
}

export default function TransactionForm({ onAdd }: Props) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [subcategory, setSubcategory] = useState('');
  const [description, setDescription] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash');

  const subcategories = {
    Food: ['Groceries', 'Restaurant', 'Snacks'],
    Travel: ['Flight', 'Hotel', 'Taxi'],
    Bills: ['Electricity', 'Water', 'Internet'],
  };

  const addTransaction = async () => {
    await API.post('/transactions', {
      amount: parseFloat(amount),
      category,
      subcategory: subcategory || null,
      description,
      paymentMethod,
    });

    setAmount('');
    setDescription('');
    setSubcategory('');
    onAdd();
  };

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Add Transaction</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <input
          className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-300 bg-white"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-300 bg-white"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSubcategory('');
          }}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Bills</option>
        </select>

        {subcategories[category] && (
          <select
            className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-300 bg-white"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          >
            <option value="">Select Subcategory</option>
            {subcategories[category].map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        )}

        <input
          className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-300 bg-white"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-300 bg-white"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option>Cash</option>
          <option>Credit Card</option>
          <option>Bank Transfer</option>
        </select>
      </div>

      <button
        className="mt-4 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
        onClick={addTransaction}
      >
        Add Transaction
      </button>
    </div>
  );
}
