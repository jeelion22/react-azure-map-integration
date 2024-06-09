import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import AzureMaps from "./AzureMaps";
import UseRef from "./UseRef";

function App() {
  const dealers = [
    {
      id: 1,
      name: "Harry",
      position: [-122.33, 47.6],
      address: "123 Main St, City, State",
    },
    {
      id: 2,
      name: "Harry",
      position: [-122.34, 47.7],
      address: "123 Main St, City, State",
    },
    {
      id: 3,
      name: "Harry",
      position: [-122.35, 47.8],
      address: "123 Main St, City, State",
    },
    {
      id: 4,
      name: "Harry",
      position: [-122.36, 47.9],
      address: "123 Main St, City, State",
    },
    {
      id: 5,
      name: "Harry",
      position: [-122.37, 47.1],
      address: "123 Main St, City, State",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <AzureMaps dealers={dealers} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 ms-3">
              {dealers.map((dealer) => (
                <div className="card mb-3" style={{ width: "13rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
