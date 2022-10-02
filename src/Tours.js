import React from 'react';
import Tour from './Tour';
const Tours = ({tours}) => {
    return (
        <section className='tours'>
            {tours.map(tour => {
              return (
                <Tour key={tour.id} {...tour} />
              )
            })}
        </section>
    )
}

export default Tours;