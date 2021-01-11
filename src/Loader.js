import React from 'react';

const Loader = () => {
    return(<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '.5rem 0'}}><div className="lds-dual-ring"></div></div>);
};

export default Loader;
