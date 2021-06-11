import React from 'react';

export default function Sprite() {
    return <div
        style={{
            display: 'inline-block',
            height: '32px',
            width: '32px',
            backgroundImage: 'url(https://charactersprites.s3.us-west-1.amazonaws.com/m1.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0px 0px'
        }}/>
}