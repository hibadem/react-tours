import React, { useState } from "react";

const Tour = ({id, image, info, price, name, removeTour}) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className="tour">
            <img class="tour__image" src={image} alt={name} />
            <div className="tour__header">
                <h2 className="tour__title">{name}</h2>
                <span className="tour__price">${price}</span>
            </div>
            <div className="tour__info">{readMore ? info : info.substring(0, 255)}
                <a onClick={() =>  setReadMore(!readMore)} className="tour__readmore">
                    { readMore ? ' show less' : '...read more' }
                </a>
            </div>
            <button className="tour__button" onClick={() => removeTour(id)}>NOT INTERESTED</button>
        </article>
    )
}

export default Tour;