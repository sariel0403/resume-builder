import React, { useState } from "react";

import AddButton from "../../../components/AddButton";

import './AddEducation.scss';

const AddEducation = (props: any) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleAddEducation = (event: React.MouseEvent<HTMLElement>) => {
        props.addEducation(value);
    }

    return (
        <div className='add-education inline justify-content-space-between'>
            <input value={value} onChange={handleChange} />
            <AddButton onClick={(e: any) => handleAddEducation(e)} />
        </div>
    );
}

export default AddEducation;