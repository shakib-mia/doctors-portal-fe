import React from 'react';
import InputField from '../../components/InputField/InputField';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center absolute top-0 z-0'>
            <div className='w-11/12 lg:w-1/3 p-[25px] shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)] rounded-[10px]'>
                <h4 className="text-heading-4 text-center">Register</h4>

                <form className="mt-[37px]">
                    <InputField label="Name" id='name' page='register' />
                    <InputField label="Email" id='email' page='register' />
                    <InputField label="Password" id='password' page='register' />
                    <InputField type='submit' className='w-full bg-dark mt-[18px] py-[13px] rounded-[8px] text-dark-200' value="LOGIN" />
                </form>


                <div className='flex gap-[6px] justify-center mt-[11px] text-[12px]'>
                    <p>Already have an account?</p>
                    <p>
                        <Link to='/login' className=' text-secondary'>Login</Link>
                    </p>
                </div>

                <div className="flex mt-[16px] mb-[25px] items-center gap-[16px]">
                    <hr className='w-full h-[1px] bg-[#CFCFCF] ml-[5px]' />
                    <span>OR</span>
                    <hr className='w-full h-[1px] bg-[#CFCFCF] mr-[5px]' />
                </div>

                <button className='w-full text-center py-[13px] rounded-[8px] border-[1px] border-dark hover:bg-dark hover:text-white'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;