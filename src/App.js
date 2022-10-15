import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading'
import Tours from './Tours';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const url = 'https://course-api.com/react-tours-project';

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  },[]);

  if (loading) {
    return (
      <main className='homepage'>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main className='notfound'>
        <h2> No Tours Left</h2>
        <button className="tour__button tour__button--refresh" onClick={() => fetchTours()}>Refresh</button>
      </main>
    )
  }
  return (
    <main className='homepage'>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
