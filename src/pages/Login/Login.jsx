import React from 'react';
import InputField from '../../components/InputField/InputField';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
            .then(res => {
                if (res) {
                    localStorage.setItem('token', res.user.accessToken);
                    navigate('/')
                    window.location.reload();
                }
            })
    }

    if (user) {
        console.log(user);
    }

    return (
        <div className='h-screen w-screen absolute top-0 flex items-center justify-center'>
            <div className='w-11/12 lg:w-1/3 p-[25px] shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)] rounded-[10px]'>
                <h4 className="text-heading-4 text-center">Login</h4>

                <form onSubmit={handleLogin} className="mt-[37px]">
                    <InputField label="Email" name='email' id='email' page='login' />
                    <InputField type='password' label="Password" name='password' id='password' page='login' />
                    <p className='text-[10px] ml-[8px]'>Forgot Password ?</p>

                    {error && <span className='text-[red]'>{error.message.split(": ")[1]}</span>}
                    <InputField type='submit' disabled={loading} className='w-full disabled:bg-dark-400 bg-dark mt-[18px] py-[13px] rounded-[8px] text-dark-200 cursor-pointer disabled:cursor-not-allowed' value={loading ? 'LOGGING IN...' : "LOGIN"} />
                </form>


                <div className='flex gap-[6px] justify-center mt-[11px] text-[12px]'>
                    <p>New to Doctors Portal?</p>
                    <p>
                        <Link to='/register' className=' text-secondary'>Create new account</Link>
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

export default Login;