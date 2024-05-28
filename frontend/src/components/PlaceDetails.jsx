import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PlaceDetails = () => {

  const { id } = useParams();
  const [placeData, setPlaceData] = useState(null);

  const getPlaceById = async () => {
    const res = await fetch('http://localhost:5000/place/getbyid/' + id);
    const data = await res.json();
    console.log(data);
    setPlaceData(data);
  }

  useEffect(() => {
    getPlaceById();
  }, [])

  const displayPlace = () => {
    if (placeData !== null) {
      return <div className='card mt-5'>
        <div className="card-body">

          <h1 className='display-2  fw-bold text-center page-title'> {placeData.location}  </h1>
          <img src={'http://localhost:5000/' + placeData.image} className='img-fluid' alt="" />

          <h3>{placeData.title}</h3>
          <div>
        
          
           

           
            
            <p>Owner Name:{placeData.name}</p>
            <p>Phone number:{placeData.number}</p>
            <p>Email:{placeData.email}</p>
            <h5 className='mt-3'> <i class="fa-solid fa-location-dot"></i> Address <h5>{placeData.address}</h5></h5>
           
            
            <p className='text-bold'>No of Bedrooms:{placeData.bedrooms}</p>
            <p>No of Bathrooms:{placeData.bathrooms}</p>
            <p>Price in $:{placeData.price}</p>
            <h5>Description</h5>
            <p>{placeData.description}</p>
          </div>
        </div>






      </div>

    }
  }

  return (
    <section>

      <div className="container-fluid">

        <div className="card" style={{ backgroundColor: 'black' }}>
          <div className="card-body">
            <div className="col-md-9 mx-auto">
              <div className="row mt-4">{displayPlace()}</div>


            </div>
          </div>
        </div>

      </div>





    </section>










  )
}

export default PlaceDetails;