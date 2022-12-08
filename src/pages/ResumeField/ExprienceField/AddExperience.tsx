import React, { useState } from "react";
import { AiOutlineCalendar } from 'react-icons/ai';

import AddButton from "../../../components/AddButton";

import './AddExperience.scss';

const AddExperience = (props: any) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleAddEducation = (event: React.MouseEvent<HTMLElement>) => {
        props.addEducation(value);
    }

    return (
        <div className='add-experience'>
            <div className="inline justify-content-space-between mt-30">
                <input value={value} onChange={handleChange} className="experience-input" />
            </div>
            <div className="inline justify-content-space-between mt-30">
                <div className="inline">
                    <div className="v-center"><p>From</p></div>
                    <div className="inline date-input-field v-center m-5">
                        <div className="v-center">
                            <input className="date-input" placeholder="00-00-0000" />
                        </div>
                        <div className="v-center">
                            <AiOutlineCalendar />
                        </div>
                    </div>
                </div>
                <div className="inline">
                    <div className="v-center"><p>Till</p></div>
                    <div className="inline date-input-field v-center m-5">
                        <div className="v-center">
                            <input className="date-input" placeholder="00-00-0000" />
                        </div>
                        <div className="v-center">
                            <AiOutlineCalendar />
                        </div>
                    </div>
                </div>
                <div className="v-center">
                    <AddButton onClick={handleAddEducation} />
                </div>
            </div>
        </div>
    );
}

export default AddExperience;