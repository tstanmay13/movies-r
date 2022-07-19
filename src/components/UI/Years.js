import React from 'react';
import Slider from "@mui/material/Slider";

function valuetext(value) {
    return `${value}°C`;
}

const Years = ({searchId,changeSlider}) => {
    const [value, setValue] = React.useState([1945, 2022])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    React.useEffect(() => {
        setValue([1945,2022])
    }, [searchId]);

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


