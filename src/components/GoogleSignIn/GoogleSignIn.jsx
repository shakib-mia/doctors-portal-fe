import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.config';
import axios from 'axios';
import { url } from '../../constants';

const GoogleSignIn = () => {
    const auth = getAuth(app)
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogle = () => {
        signInWithGoogle();
    }
    if (error) {
        console.log(error);
    }

    if (user) {
        // console.log(user);
        const link = url + 'google-user';
        const config = {
            headers: {
                email: user.user.email,
                name: user.user.displayName
            }
        }
        axios.get(link, config)
            .then(res => localStorage.setItem('token', res.data.token))
    }

    return <button onClick={handleGoogle} disabled={loading} className='w-full text-center py-[13px] rounded-[8px] border-[1px] border-dark hover:bg-dark hover:text-white disabled:bg-dark-600 disabled:text-white'>CONTINUE WITH GOOGLE</button>;
};

export default GoogleSignIn;