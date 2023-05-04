import React from 'react';
import InputField from '../../components/InputField/InputField';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='w-1/3 p-[25px] shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)] rounded-[10px]'>
                <h4 className="text-heading-4 text-center">Login</h4>

                <form className="mt-[37px]">
                    <InputField label="Email" id='email' page='login' />
                    <InputField label="Password" id='password' page='login' />
                    <p className='text-[10px] ml-[8px]'>Forgot Password ?</p>
                    <InputField type='submit' className='w-full bg-dark mt-[18px] py-[13px] rounded-[8px] text-dark-200' value="LOGIN" />
                </form>


                <div className='flex gap-[6px] justify-center mt-[11px] mb-[16px]'>
                    <p>New to Doctors Portal?</p>
                    <p>
                        <Link to='/register' className=' text-secondary'>Create new account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;