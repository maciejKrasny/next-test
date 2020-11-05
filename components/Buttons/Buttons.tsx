import { Button } from '@material-ui/core'
import React from 'react'

export const Buttons: React.FC<{onClick: (slug: string) => void}> = ({onClick}) => {
    const a = ['iXbTFpcIP6c', 'OwlpnsrILQI', 'QLS3Pu4YBgE', 'iXbTFpcIP6c', 'OwlpnsrILQI', 'QLS3Pu4YBgE', 'iXbTFpcIP6c', 'OwlpnsrILQI', 'QLS3Pu4YBgE', 'iXbTFpcIP6c', 'OwlpnsrILQI', 'QLS3Pu4YBgE'];
    const handleOnClick = () => {
        const random = Math.floor(Math.random() * 10)
        onClick(a[random]);
    }
    return (
        <div>
            <Button onClick={handleOnClick} >TEST</Button>
        </div>
    )
}
