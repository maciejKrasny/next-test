import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import { Buttons } from '../Buttons/Buttons'

export default function Video() {
    const [sluge, setSlug] = useState('ysz5S6PUM-U');
    const handleOnChange = (slug: string) => {
        setSlug(slug)
    }
    return (
        <div>
            <Buttons onClick={handleOnChange} />
            <ReactPlayer url={`https://www.youtube.com/watch?v=${sluge}`} />
        </div>
    )
}
