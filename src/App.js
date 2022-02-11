import logo from "./logo.svg";
import "./App.css";

import Data from "./bottles3.json";

function App() {
  console.log(Data);
  const Bottles = Data;
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>Shelf 1</h1>
          <div className style={{ clear: "both" }} />
          <br />
        </div>
        <div
          className="row shelf-rows"
          style={{ borderBottom: "5px solid #0000004f" }}
        >
          {Bottles
            ? Bottles.map((item, id) =>
                item.name && item.year != "NV" ? (
                  <div className="bottles-div">
                    <div className="single-bottle">
                      {/* <p style={{ fontWeight: "bolder" }}>Producer</p> */}
                      <br />
                      <div
                        className="wine-background"
                        style={{ backgroundImage: `url(${item.img})` }}
                      ></div>
                      <p>
                        <span>Name: </span> {item.name}
                      </p>
                      <p>
                        <span>Year: </span>
                        {item.year}
                      </p>
                      <p>
                        <span>Color: </span>
                        {item.color}
                      </p>
                      <p>
                        <span>Region: </span>
                        {item.region}
                      </p>
                      <p>
                        <span>Varietal: </span>
                        {item.varietal}
                      </p>
                    </div>
                  </div>
                ) : null
              )
            : null}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h1>Shelf 2</h1>
          <div className style={{ clear: "both" }} />
          <br />
        </div>
        <div
          className="row shelf-rows"
          style={{ borderBottom: "5px solid #0000004f" }}
        >
          <div className="bottles-div">
            <div className="single-bottle">
              <p style={{ fontWeight: "bolder" }}>Producer</p>
              <br />
              <div className="wine-background" />
              <p>Name</p>
              <p>Information</p>
            </div>
          </div>
          <div className="bottles-div">
            <div className="single-bottle">
              <p style={{ fontWeight: "bolder" }}>Producer</p>
              <br />
              <div className="wine-background" />
              <p>Name</p>
              <p>Information</p>
            </div>
          </div>
          <div className="bottles-div">
            <div className="single-bottle">
              <p style={{ fontWeight: "bolder" }}>Producer</p>
              <br />
              <div className="wine-background" />
              <p>Name</p>
              <p>Information</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h1>Shelf 3</h1>
          <div className style={{ clear: "both" }} />
          <br />
        </div>
        <div
          className="row shelf-rows"
          style={{ borderBottom: "5px solid #0000004f" }}
        >
          <div className="bottles-div">
            <div className="single-bottle">
              <p style={{ fontWeight: "bolder" }}>Producer</p>
              <br />
              <div className="wine-background" />
              <p>Name</p>
              <p>Information</p>
            </div>
          </div>
          <div className="bottles-div">
            <div className="single-bottle">
              <p style={{ fontWeight: "bolder" }}>Producer</p>
              <br />
              <div className="wine-background" />
              <p>Name</p>
              <p>Information</p>
            </div>
          </div>
          <div className="bottles-div">
            <div className="single-bottle">
              <p style={{ fontWeight: "bolder" }}>Producer</p>
              <br />
              <div className="wine-background" />
              <p>Name</p>
              <p>Information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
