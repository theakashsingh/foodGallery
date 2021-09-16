import React from 'react'

const GalleryCard = ({items}) => {
    return (
        <>
           <div className="food-container">
        {items.map(currElem => {
            const {id, name, image, description, price} = currElem;
          return (
            <>
              <div className="food-card" key={id}>
                <div className="food-img">
                  <img src={image} alt="food-image" />
                </div>
                <div className="food-info">
                  <div className="name-info">
                    <h1>{name}</h1>
                    <p>
                      {description}
                    </p>
                  </div>
                  <div className="price-info">
                    <h2>Price : {price}</h2>
                    <button className="btn-order">Order Now</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div> 
        </>
    )
}

export default GalleryCard
