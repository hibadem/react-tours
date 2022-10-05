import React from 'react';
import Tour from './Tour';
const Tours = ({tours}) => {
    return (
        <section className='tours'>
          <h1 className='tours__title'>Our Tours</h1>
            {tours.map(tour => {
              return (
                <Tour key={tour.id} {...tour} />
              )
            })}
        </section>
    )
}

export default Tours;