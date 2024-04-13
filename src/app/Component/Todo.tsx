import React from 'react'

function Todo() {
  return (
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td className="px-6 py-4">
                    Study
                </td>
                <td className="px-6 py-4">
                    Code
                </td>
                <td className="px-6 py-4">
                    Completed
                </td>
                <td className="px-6 py-4 space-x-3">
                 <button className='py-2 px-4 bg-red-500 hover:bg-red-400 text-white border rounded-md'>Delete</button>
                 <button className='py-2 px-4 bg-green-500 hover:bg-green-400 text-white border rounded-md'>Completed</button>
                </td>
            </tr>
  )
}

export default Todo