import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export const Addemployee = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [designation, setDesignation] = useState('');
    const [type,setType] =useState('')
    const [phone,setPhone] =useState('')
    const { addEmployee, employees } = useContext(GlobalContext);
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };


    let navigate = useNavigate();

    const onSubmit = e => {
        e.preventDefault();
        const newEmployee = {
            id: employees.length + 1,
            name,
            location,
            designation,
            type,
            phone,
            checked
        }
        addEmployee(newEmployee);
        navigate('/')
    }


    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name 
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                            phone
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Enter phone number" />
                    </div>

                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                            Type
                        </label>              
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={type} onChange={(e)=>setType(e.target.value)} >
                                <option value="personal" className='text-gray-700'>Personal</option>
                                <option value="office" className='text-gray-700'>Office</option>                   
                        </select>
                    </div>
                    <div className="w-full  mb-5">
                        <label className="inline-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mr-2" htmlFor="designation">
                            Is whatsapp
                        </label>
                        <input   type="checkbox"  checked={checked}  onChange={handleChange}/>
                    </div>


                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
                            Designation
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={designation} onChange={(e) => setDesignation(e.target.value)} type="text" placeholder="Enter designation" />
                    </div>


                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add Contact
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}