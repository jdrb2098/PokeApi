import React from 'react'
import { useLocation, useParams } from 'react-router-dom'


const PokeInfoScreen = ({ match }) => {
  
  const {id} = useParams()
  const location = useLocation();
  console.log(location)
  return (
    <div  className="">
      <div className="">
        <img
          src={location.state.sprites.front_default}
          alt={location.state.name}
          className=""
        />
      </div>
      <div className="">
        <div className="">
          <h3>{location.state.name}</h3>
          <div>#{location.state.id}</div>
        </div>
        <div className="">
          <div className="">
            {location.state.types.map((type, idx) => {
              return (
                <div key={idx} className="">
                  {type.type.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokeInfoScreen