import React from 'react';
//Libs
import Lottie from "react-lottie";

const defaultOptions = {
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Animation = (props) => {

    const {animation} = props;
    const options = {...defaultOptions, animationData: animation, loop: false};
    return (
            <Lottie
                options={options}
                width={"150px"}
                height={"150px"}
            />
    );
};

export default Animation;