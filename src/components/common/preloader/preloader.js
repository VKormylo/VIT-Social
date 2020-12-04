import React from 'react';
import preloader from './../../../assets/images/loader.gif';

let Preloader = (props) => {
    return (
    <div>
        <img height="120" src={preloader}/>
    </div>
    )
}

export default Preloader;