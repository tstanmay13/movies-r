import React from 'react';
import Slider from "@mui/material/Slider";

function valuetext(value) {
    return `${value}°C`;
}

const Years = ({changeSlider}) => {
    const [value, setValue] = React.useState([1945, 2022])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    function callParent(){
        changeSlider(value)
    }

    return (
        <div>
            <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                aria-label="Always visible"
                onChange={handleChange}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
                min={1945}
                max={2022}
                onChangeCommitted={callParent}
            />
        </div>
    );
}

export default Years;


