import { useEffect, useState } from 'react';

import Loading from './components/Loading/Loading';
import CarsSlider from './components/Cars/CarsSlider';

const url = 'https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96';

function App() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setIsLoading(false);
      setCars(data.cars);
      return;
    } catch (error) {
      setError(error.response);
      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Loading />;
      </main>
    );
  }
  if (error) {
    return (
      <main>
        something went wrong when getting the data, Please reload the page
      </main>
    );
  }
  return (
    <main>
      <div className='container'>
        <CarsSlider cars={cars} />
      </div>
    </main>
  );
}

export default App;
