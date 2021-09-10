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

    const {animation, loop, width, height} = props;
    const options = {...defaultOptions, animationData: animation, loop: loop};
    return (
            <Lottie
                options={options}
                width={width}
                height={height}
            />
    );
};

export default Animation;