import React from "react";

//css written in index.css

const Loader = () => {
    return (
        <div className="load-bar">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    );
};

export default Loader;