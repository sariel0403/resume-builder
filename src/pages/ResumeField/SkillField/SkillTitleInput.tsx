import React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import { HiMagnifyingGlass } from 'react-icons/hi2';

import './SkillTitleInput.scss';

const options = ['React', 'Angular', 'Vue'];

const SkillTitleInput = () => {
    return (
        <div className="skill-title-input mt-30">
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
                    renderInput={(params) => (
                        <div ref={params.InputProps.ref}>
                            <input type="text" {...params.inputProps} placeholder="Skill Title" />
                        </div>
                    )}
                />
            </label>
            <HiMagnifyingGlass />
        </div>
    );
}

export default SkillTitleInput;