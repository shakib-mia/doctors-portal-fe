import React from 'react';
import InputField from '../../components/InputField/InputField';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import app from '../../firebase.config';
import { url } from '../../constants';
import GoogleSignIn from '../../components/GoogleSignIn/GoogleSignIn';


const Register = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    const handleRegister = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(e.target.email.value, e.target.password.value)
            .then(res => {
                if (res?.user) {
                    const config = {
                        headers: {
                            email: e.target.email.value,
                            name: e.target.name.value
                        }
                    }

                    axios.get(url + 'register', config)
                        .then((res) => {
                            localStorage.setItem('token', res.data.token);
                            window.location.reload()
                            navigate('/')
                        })
                }
            })
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center absolute top-0 z-0'>
            <div className='w-11/12 lg:w-1/3 p-[25px] shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)] rounded-[10px]'>
                <h4 className="text-heading-4 text-center">Register</h4>

                <form onSubmit={handleRegister} className="mt-[37px]">
                    <InputField name='name' label="Name" id='name' page='register' />
                    <InputField name='email' label="Email" id='email' page='register' />
                    <InputField type='password' name='password' label="Password" id='password' page='register' />
                    <p className='text-[red] first-letter:capitalize font-medium mt-3'>{error && error.message?.split("(")[1]?.split(")")[0]?.split('/')[1]?.split("-").join(" ")}</p>
                    <InputField type='submit' disabled={loading} className='w-full bg-dark disabled:bg-dark-400 mt-[18px] py-[13px] rounded-[8px] text-dark-200 cursor-pointer disabled:cursor-not-allowed' value="REGISTER" />
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

                <GoogleSignIn />
            </div>
        </div>
    );
};

export default Register;