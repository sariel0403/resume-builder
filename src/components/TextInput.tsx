import React from 'react'

import './TextInput.scss'

interface InputProps {
    placeholder: string,
}

const TextInput = (props: InputProps) => {
    return (
        <div className="text-input">
            <input placeholder={props.placeholder} />
        </div>
    );
}

export default TextInput;