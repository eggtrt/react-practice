import React from 'react';

function Wrapper ({ children, style }) {
    return (
        <div style={style}>{children}</div>
    )
}

export default Wrapper;