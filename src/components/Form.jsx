import React from 'react';

function Form() {
    return (
        <div className='flex items-center justify-center p-[100px]'>
            <div className='bg-white flex flex-col rounded-2xl w-2/4 px-8 py-10 text-green-950'>
                <h1 className='text-2xl font-semibold mb-8'>Contact Us</h1>

                <div>
                    <div className='flex flex-col md:flex-row justify-between text-md text-gray-500 gap-3 '>
                        <div className='gap-3 w-1/2 p-2'>
                            <h3>First Name</h3>
                            <input
                                type="text"
                                class="border border-gray-500 px-3 py-2 outline-none rounded-lg flex w-full"
                            />
                        </div>
                        <div className='gap-3 w-1/2 p-2'>
                            <h3>Last Name</h3>
                            <input
                                type="text"
                                class="border border-gray-500 px-3 py-2 outline-none rounded-lg flex w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className='text-gray-500 gap-3  p-2'>
                    <h3>Email</h3>
                    <input
                        type="email"
                        class="border border-gray-500 px-3 py-2 outline-none rounded-lg flex w-full"
                    />
                </div>


                <div>
                    <div className='flex flex-col justify-between text-md text-gray-500 gap-3 '>

                        <div className='gap-3 w-1/2 p-2'>
                            <h3>Query Type</h3>
                        </div>
                        <div className='gap-3 p-2'>
                            <div className='w-1/2 border border-gray-500'>
                            
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Form;