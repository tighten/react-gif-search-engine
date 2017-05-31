import React from 'react';

const GifItem = (image) => {
    return (
        <li>
            <img src={image.gif.url} />
        </li>
    )
};

export default GifItem;
