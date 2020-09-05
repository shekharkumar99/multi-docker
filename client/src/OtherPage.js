import React from 'react';
import {Link} from 'react-router-dom';

export default() =>{
    return(
        <div>
            Im Some Other Page!
            <Link to="/">GO Back Home</Link>
        </div>
    );
};