"use client"

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Todo from "./Component/Todo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import TodoModel from "../../../lib/models/TodoModel";



const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const [todoData, setTodoData] = useState<Array<number | string>>([]);

  const fetchToDos = async () => {
    const response = await axios('/api');
    setTodoData(response.data.todos);
  }
  useEffect(() => {
    fetchToDos();
  }, [])

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted with data:", formData);
  
    try {
      const response = await axios.post('/api', formData);
      toast.success(response.data.msg);
      setFormData({
        title: "",
        description: ""
      });
    } catch (error) {
      toast.error('Error');
    }
  };
  
  return (
    <div>
      <ToastContainer theme="dark" />
      <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 mx-auto">
      <input value={formData.title} onChange={onChangeHandler} type="text" name="title" placeholder="Enter title" className="px-3 py-2 border-2 w-full"/>
      <textarea value={formData.description} onChange={onChangeHandler}  name="description" placeholder="Enter description" className="px-3 py-2 border-2 w-full"></textarea>
      <button type="submit" className="bg-orange-600 hover:bg-orange-500 py-3 px-11 text-white border rounded-md">Add Todo</button>
      </form>
      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        <Todo />
        </tbody>
    </table>
</div>
    </div>
  );
}

export default Home;