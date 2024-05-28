import React, { useEffect, useState } from 'react';
// import React, { useRef, useState } from 'react';
// Import Swiper React components;
// Import Swiper styles;
import 'swiper/css';
import 'swiper/css/navigation';





import { Link, useParams } from 'react-router-dom';
import './style.css';


const ViewPlaces = () => {


  const { location } = useParams();
  const [placeList, setPlaceList] = useState([]);


  const fetchPlaces = async () => {
    const res = await fetch('http://localhost:5000/place/getbylocation/' + location);

    const data = await res.json();

    console.log(data);
    setPlaceList(data);
  }

  useEffect(() => {
    fetchPlaces();
  }, [])

  const deletePlace = async (id) => {
    const res = await fetch('http://localhost:5000/place/delete/' + id, {
      method: 'DELETE'
    });
    console.log(res.status);
    if (res.status === 200) {
      fetchPlaces();
    }
  };
  const updatePlace = async (id) => {
    const res = await fetch('http://localhost:5000/place/update/' + id, {
      method: 'UPDATE'
    });
    console.log(res.status);
    if (res.status === 200) {
      fetchPlaces();
    }

  };
  

  const displayPlaces = () => {
    return placeList.map(place => (
      <div className='col-md-4' key={place._id}>
        <div className="card">
          <img className='my-img' src={'http://localhost:5000/' + place.image} alt="" />
          <div className="card-body">
            <h3>{place.title}</h3>
            <h3>{place.number}</h3>
            <h2>{place.email}</h2>
            <h3>No of Bedrooms:{place.bedrooms}</h3>
            <h3>No of Bathrooms:{place.bathrooms}</h3>
            <h3>Price in $:{place.price}</h3>
            <p>{place.description.slice(0, 100)} ...</p>
          </div>
          <div className="card-footer">
            <p>{place.footer}</p>
            <Link className='btn btn-success' to={'/placedetails/' + place._id}>View More</Link>
            <div className='card-footer'>

              <button onClick={() => deletePlace(place._id)} className="btn btn-danger">Delete</button>

              <Link to={'/updateplace/' + place._id} className="btn btn-primary">Update</Link>
              






            </div>
          </div>

        </div>
      </div >
    ));
  };


  return (

    <>
      <section>
        <div className="View Places">

          <h1 className="display-4 fw-bold text-center page-title" >Popular Destination

          </h1>
          <p className="display-6 text-center page-title">Tours give you the opportunity to see a lot, within a time frame
          </p>

          <section>
            <div className="container">

              <h2 className='display-7 fsw-bold text-left page-title'>
                Places to Visit in  {location}
              </h2>

              <div className="row mt-5">
                {displayPlaces()}
              </div>
            </div>
            <div>
              {/* <ul>
                {place.List.map((place) => (
                  <li key={place.id}>
                    {place.list} <button onClick={() => deletePlace(place.id)}>Delete</button>
                  </li>
                ))};
              </ul> */}
            </div>

          </section>
        </div>
      </section>
    </>

  )
}


export default ViewPlaces;