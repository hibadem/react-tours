import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
    return (
        <section className='tours'>
          <h1 className='tours__title'>Our Tours</h1>
            {tours.map(tour => {
              return (
                <Tour key={tour.id} {...tour} removeTour={removeTour}/>
              )
            })}
        </section>
    )
}

export default Tours;