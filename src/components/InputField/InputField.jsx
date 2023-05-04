import React from 'react';

const InputField = (props) => {
    const { label, id } = props;
    // console.log(!!label);
    return <>
        {label && <label htmlFor={id}>{label}</label>}
        <input {...props} />
    </>;
};

export default InputField;