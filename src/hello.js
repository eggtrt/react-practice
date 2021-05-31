import React from 'react';

function Hello({ name, color }) {
    return <div style ={{ color }}>
        안녕하세요 제 이름은 { name } 입니다.
    </div>
}

Hello.defaultProps = {
    name: '이름없음',
    color: 'black'
}

export default Hello;
