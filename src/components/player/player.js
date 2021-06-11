import React from 'react';
import Actor from '../actor/actor';
import spriteUrls from '../../spriteUrls';
import useKeyPress from '../../hooks/use-key-press/use-key-press';
import useWalk from '../../hooks/use-walk/use-walk';

export default function Player({ skin }) {
    const { dir, step, walk } = useWalk(3);
    const data = {
        h: 32,
        w: 32
    };

    useKeyPress(e => {
        const dir = e.key.replace('Arrow', '').toLowerCase();
        walk(dir); 
        e.preventDefault();
    });

    return (
        <Actor
            sprite={spriteUrls[skin]}
            data={data}
            step={step}
            dir={dir}
        />
    );
}