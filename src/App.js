import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import KalaList from './Components/KalaList';
import KalaListHeading from './Components/KalaListHeading';
import SearchBox from './Components/SearchBox';
import AddFavourite from './Components/AddFavourites';

const App = () => {
  const [kalas, setKalas] = useState(
    []
  );
    const getMovieRequest = async () => {
      const url = 'https://kalavithi-service-team-01-dev.herokuapp.com/api/images';

      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      setKalas(responseJson.images);
    };

    useEffect(() => {
      getMovieRequest();
    }, []);

  return <div className='container-fluid kala-app'>
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <KalaListHeading heading='Kalavithi'/>
      <SearchBox/>
    </div>
    <div className='d-flex flex-wrap'>
      <KalaList kalas={kalas} favouriteComponent = {AddFavourite}/>
    </div>
  </div>; 
};

export default App;
