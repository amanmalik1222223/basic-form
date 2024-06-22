import React, { useState, useEffect } from 'react';

function Form() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [querytype, setQuerytype] = useState('');

    const handleLnameChange = (event) => {
        setLname(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleFnameChange = (event) => {
        setFname(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const checker = () => {
        document.getElementById('unchecked').classList.toggle('hidden')
        document.getElementById('checked').classList.toggle('hidden')
    }

    const generalcheck = () => {
        if (document.getElementById('support').classList.contains('bg-green-200')) {
            document.getElementById('support').classList.remove('bg-green-200')
            document.getElementById('support').classList.remove('border-green-700')
            document.getElementById('support').classList.remove('text-green-900')
            document.getElementById('support').classList.remove('border-[2px]')
            document.getElementById('support-circle-dot').classList.add('hidden')
            document.getElementById('support-circle').classList.remove('hidden')

        }
        document.getElementById('general').classList.add('bg-green-200')
        document.getElementById('general').classList.add('border-green-700')
        document.getElementById('general').classList.add('text-green-900')
        document.getElementById('general').classList.add('border-[2px]')
        document.getElementById('general-circle-dot').classList.remove('hidden')
        document.getElementById('general-circle').classList.add('hidden')
        setQuerytype('General Query')

    }
    const supportcheck = () => {
        if (document.getElementById('general').classList.contains('bg-green-200')) {
            document.getElementById('general').classList.remove('bg-green-200')
            document.getElementById('general').classList.remove('border-green-700')
            document.getElementById('general').classList.remove('text-green-900')
            document.getElementById('general').classList.remove('border-[2px]')
            document.getElementById('general-circle-dot').classList.add('hidden')
            document.getElementById('general-circle').classList.remove('hidden')
        }
        document.getElementById('support').classList.add('bg-green-200')
        document.getElementById('support').classList.add('border-green-700')
        document.getElementById('support').classList.add('text-green-900')
        document.getElementById('support').classList.add('border-[2px]')
        document.getElementById('support-circle-dot').classList.remove('hidden')
        document.getElementById('support-circle').classList.add('hidden')
        setQuerytype('Support Query')

    }
    const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });

    const showAlert = (message, type = 'success') => {
        setAlert({ show: true, message, type });
        // Automatically hide alert after 3 seconds (adjust timing as needed)
        setTimeout(() => {
            setAlert({ show: false, message: '', type: 'success' });
        }, 3000);
    };

    const submit = () => {

        if (fname === '') {
            document.getElementById('f-name').classList.remove('hidden')
            document.getElementById('f-i-name').classList.add('border-red-800')
        }
        else {
            document.getElementById('f-name').classList.add('hidden')
            document.getElementById('f-i-name').classList.remove('border-red-800')
        }
        if (lname === '') {
            document.getElementById('l-name').classList.remove('hidden')
            document.getElementById('l-i-name').classList.add('border-red-800')
        }
        else {
            document.getElementById('l-name').classList.add('hidden')
            document.getElementById('l-i-name').classList.remove('border-red-800')
        }
        if (message === '') {
            document.getElementById('m-name').classList.remove('hidden')
            document.getElementById('m-i-name').classList.add('border-red-800')
        }
        else {
            document.getElementById('m-name').classList.add('hidden')
            document.getElementById('m-i-name').classList.remove('border-red-800')
        }
        if (document.getElementById('checked').classList.contains('hidden')) {
            document.getElementById('c-name').classList.remove('hidden')

        }
        else {
            document.getElementById('c-name').classList.add('hidden')
        }
        if (!document.getElementById('support').classList.contains('bg-green-200') && !document.getElementById('general').classList.contains('bg-green-200')) {
            document.getElementById('q-name').classList.remove('hidden')
        }
        else {
            document.getElementById('q-name').classList.add('hidden')
        }
        if (email === '') {
            document.getElementById('f-email-name').classList.remove('hidden')
            document.getElementById('e-i-name').classList.add('border-red-800')
            return;
        }
        else {
            document.getElementById('f-email-name').classList.add('hidden')
            document.getElementById('e-i-name').classList.remove('border-red-800')
        }
        if (!isValidEmail(email)) {
            console.log('Email is not valid');
            document.getElementById('email-name').classList.remove('hidden')
            return;
        }
        else {
            document.getElementById('email-name').classList.add('hidden')
        }

        const formData = {
            fname,
            lname,
            email,
            querytype,
            message
        };


        localStorage.setItem('formData', JSON.stringify(formData));
        console.log(formData)

        showAlert('Form submitted successfully!', 'success');


        setFname('');
        setLname('');
        setEmail('');
        setMessage('');
        document.getElementById('unchecked').classList.toggle('hidden')
        document.getElementById('checked').classList.toggle('hidden')
        document.getElementById('general').classList.remove('bg-green-200')
        document.getElementById('general').classList.remove('border-green-700')
        document.getElementById('general').classList.remove('text-green-900')
        document.getElementById('general').classList.remove('border-[2px]')
        document.getElementById('general-circle-dot').classList.add('hidden')
        document.getElementById('general-circle').classList.remove('hidden')
        document.getElementById('support').classList.remove('bg-green-200')
        document.getElementById('support').classList.remove('border-green-700')
        document.getElementById('support').classList.remove('text-green-900')
        document.getElementById('support').classList.remove('border-[2px]')
        document.getElementById('support-circle-dot').classList.add('hidden')
        document.getElementById('support-circle').classList.remove('hidden')



    };



    return (
        <div className='flex items-center justify-center md:p-[40px] p-[50px] '>
            <div className='bg-white flex flex-col rounded-2xl md:w-2/4 sm:3/4 w-5/6 px-8 py-10 text-green-950 '>
                {alert.show && (
                    <div className={`mt-4 p-3 rounded ${alert.type === 'success' ? 'bg-green-200' : 'bg-red-200'} text-green-800`}>
                        {alert.message}
                    </div>
                )}
                <h1 className='text-2xl font-semibold mb-8'>Contact Us</h1>

                <div className='flex flex-col md:flex-row justify-between text-md text-gray-500 gap-3'>
                    <div className='gap-3 md:w-1/2 w-full p-2'>
                        <div>
                            <span>First Name </span>
                            <span className='text-green-800 text-lg'>*</span>
                        </div>
                        <input
                            type="text"
                            id='f-i-name'
                            value={fname}
                            onChange={handleFnameChange}
                            className="border border-gray-500 px-3 py-2 outline-none rounded-lg flex w-full cursor-pointer hover:border-green-800 hover:border-[2px]"
                        />
                        <div>
                            <span id="f-name" className='text-sm text-red-700 hidden'>This field is required</span>
                        </div>
                    </div>
                    <div className='gap-3 md:w-1/2 w-full p-2'>
                        <div>
                            <span>Last Name </span>
                            <span className='text-green-800 text-lg'>*</span>
                        </div>
                        <input
                            type="text"
                            id='l-i-name'
                            value={lname}
                            onChange={handleLnameChange}
                            className="border border-gray-500 px-3 py-2 outline-none rounded-lg flex w-full cursor-pointer hover:border-green-800 hover:border-[2px]"
                        />
                        <div>
                            <span id="l-name" className='text-sm text-red-700 hidden'>This field is required</span>
                        </div>



                    </div>
                </div>

                <div className='text-gray-500 gap-3 p-2'>
                    <div>
                        <span>Email </span>
                        <span className='text-green-800 text-lg'>*</span>
                    </div>
                    <input
                        type="email"
                        id='e-i-name'
                        value={email}
                        onChange={handleEmailChange}
                        className="border border-gray-500 px-3 py-2 outline-none rounded-lg flex w-full cursor-pointer hover:border-green-800 hover:border-[2px]"
                    />
                    <div>
                        <span id="email-name" className='text-sm text-red-700 hidden'>Please enter a valid email address</span>
                    </div>
                    <div>
                        <span id="f-email-name" className='text-sm text-red-700 hidden'>This field is required</span>
                    </div>
                </div>

                <div className='flex flex-col justify-between text-md text-gray-500 gap-3'>
                    <div className='gap-3 w-1/2 p-2'>
                        <span>Query Type </span>
                        <span className='text-green-800 text-lg'>*</span>
                    </div>
                    <div className='gap-3 p-2 flex flex-col md:flex-row'>
                        <div
                            id='general'
                            onClick={generalcheck}
                            className='items-center flex gap-4 md:w-1/2 h-[50px] w-full border cursor-pointer border-gray-500 px-3 py-2 rounded-lg'>
                            <i id='general-circle' className="fa-regular fa-circle text-gray-600 font-thick"></i>
                            <i id='general-circle-dot' className="fa-regular fa-circle-dot text-gray-600 font-thick hidden"></i>
                            <span>General Enquiry</span>
                        </div>
                        <div
                            id='support'
                            onClick={supportcheck}
                            className='items-center flex gap-4 md:w-1/2 h-[50px] w-full border cursor-pointer border-gray-500 px-3 py-2 rounded-lg'>
                            <i id='support-circle' className="fa-regular fa-circle text-gray-600 font-thick"></i>
                            <i id='support-circle-dot' className="fa-regular fa-circle-dot text-gray-600 font-thick hidden"></i>
                            <span>Support Request</span>
                        </div>
                    </div>
                    <div>
                        <span id="q-name" className='text-sm text-red-700 hidden'>Please select a query type</span>
                    </div>
                </div>

                <div className='text-gray-500 gap-3 p-2'>
                    <div>
                        <span>Message </span>
                        <span className='text-green-800 text-lg'>*</span>
                    </div>
                    <textarea
                        value={message}
                        id='m-i-name'
                        onChange={handleMessageChange}
                        className="border h-[130px] border-gray-500 px-3 py-2 outline-none rounded-lg flex w-full cursor-pointer hover:border-green-800 hover:border-[2px]"
                    />
                    <div>
                        <span id="m-name" className='text-sm text-red-700 hidden'>This field is required</span>
                    </div>
                </div>

                <div className='text-gray-500 gap-4 flex  p-2 flex-col'>
                    <div onClick={checker}
                        className='flex items-center gap-3'>
                        <i id='unchecked' className="fa-regular fa-square text-gray-600 font-thick "></i>
                        <i id='checked' className="fa-regular fa-square-check text-gray-600 font-thick hidden"></i>
                        <div>
                            <span>I consent to being contacted by the team </span>
                            <span className='text-green-800 text-lg'>*</span>
                        </div>
                    </div>
                    <div>
                        <span id="c-name" className='text-sm text-red-700 hidden'>To submit this form, please consent to being contacted</span>
                    </div>
                </div>

                <div className='text-gray-500 gap-4 flex items-center p-2'>
                    <button
                        className='hover:bg-green-900 text-white bg-green-700 w-full py-3 rounded-lg text-xl'
                        onClick={submit}
                    >
                        Submit
                    </button>
                </div>

            </div>

        </div>
    );
}

export default Form;
