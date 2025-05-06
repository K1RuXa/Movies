import React, { useState } from "react";

const RateSwitch = ({ popularity }) => {
    const [show, setShow] = useState(true);

    const toggleRate = () => {
        setShow(!show);
    };

    return (
        <div className="show-rate">
            <span onClick={toggleRate}>
                {show
                    ? "Show Rate"
                    : `Popularity: ${popularity} | Hide Rate`}
            </span>
        </div>
    );
};

export default RateSwitch;
