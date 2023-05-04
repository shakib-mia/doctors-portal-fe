import React from 'react';

const InputField = (props) => {
    const { label, id } = props;
    // console.log(!!label);
    return <>
        {label && <>
            <label className='ml-[8px] text-sm mb-[3px]' htmlFor={id}>{label}</label>
            <br />
        </>}
        <input className={`rounded-[8px] px-[19px] ${id !== 'password' && 'mb-[19px]'} focus:outline-none ${props.page === 'login' || props.page === 'register' ? 'border-[1px] border-[#CFCFCF] py-[9px] w-full' : 'w-full lg:w-1/3 py-[15px]'}`} {...props} />
    </>;
};

export default InputField;