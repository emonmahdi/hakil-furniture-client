import React from "react";

const Advertised = () => {
  return (
    <div className="py-12 container mx-auto">
      <h2 className="text-2xl text-primary font-bold py-8 text-center">
        Advertised Items{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl m-4 lg:m-0">
            <figure>
              <img src="https://placeimg.com/400/400/arch" alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Awesome furniture for your Living Room!</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque fuga possimus sed corrupti accusantium id! Incidunt.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Visit</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card items-center lg:card-side bg-base-100 shadow-xl m-4 lg:m-0"> 
           <figure>
              <img className="" src="https://placeimg.com/400/400/arch" alt="Album" />
            </figure> 
            <div className="card-body">
              <h2 className="card-title">Awesome furniture for your Bed Room!</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi molestiae debitis explicabo non neque.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Visit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertised;
