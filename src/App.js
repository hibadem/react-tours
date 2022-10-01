import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading'
import Tours from './Tours';
//const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const url = 'https://course-api.com/react-tours-project';
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
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
