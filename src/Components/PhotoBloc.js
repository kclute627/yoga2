import React from 'react';


const PhotoBlock = (props) =>{



    return (
        <div className="photos__block">
            <img src={props.img} alt={props.alt}/>
        </div>
    )
}

export default PhotoBlock;