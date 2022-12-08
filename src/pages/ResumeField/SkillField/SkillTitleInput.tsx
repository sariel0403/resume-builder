import React, { useState, useEffect } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import { HiMagnifyingGlass } from 'react-icons/hi2';

import './SkillTitleInput.scss';

const options = ['React', 'Angular', 'Vue'];

const SkillTitleInput = (props: any) => {
    const [skill, setSkill] = useState<string>('');
    useEffect(() => {
        props.setSkill(skill);
    }, [skill]);
    return (
        <div className="skill-title-input inline justify-content-space-between">
            <div className="inline v-center">
                <label>
                    <Autocomplete
                        sx={{
                            display: 'inline-block',
                            '& input': {
                                width: 200,
                                bgcolor: 'background.paper',
                                color: (theme) =>
                                    theme.palette.getContrastText(theme.palette.background.paper),
                            },
                        }}
                        id="custom-input-demo"
                        options={options}
                        renderInput={(params) => {
                            if (params.inputProps.value === undefined)
                                setSkill("");
                            else
                                setSkill(params.inputProps.value.toString());
                            return (<div ref={params.InputProps.ref}>
                                <input type="text" {...params.inputProps} placeholder="Skill Title" />
                            </div>)
                        }}
                    />
                </label>
            </div>
            <div className="inline v-center">
                <HiMagnifyingGlass />
            </div>
        </div>
    );
}

export default SkillTitleInput;