import React from "react";

const Tour = ({id, image, info, price, name }) => {
    return (
        <article className="tour">
            <img class="tour__image" src={image} alt={name} />
            <h2 className="tour__title">{name}</h2>
            <span className="tour__price">{price}</span>
            <div className="tour__info">{info}</div>
        </article>
    )
}

export default Tour;