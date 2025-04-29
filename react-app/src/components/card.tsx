import { Fragment } from "react/jsx-runtime";

function Card() {
  return (
    <div className="card" style={{ width: "380px" }}>
      <div className="card-body"><Cardbody></Cardbody></div>
    </div>
  );
}

function Cardbody() {
  return (
    <Fragment>
      <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </Fragment>
  );
}

export default Card;
