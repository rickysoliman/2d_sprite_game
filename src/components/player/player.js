import React from 'react';
import Actor from '../actor/actor';
import spriteUrls from '../../spriteUrls';

export default function Player({ skin }) {
    const data = {
        h: 32,
        w: 32
    };
    return (
        <Actor sprite={spriteUrls[skin]} data={data} />
    );
}