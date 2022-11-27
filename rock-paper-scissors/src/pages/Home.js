import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <div className="row">
        <div className="col-sm-12 ">
          {/* <h3>Taş Kağıt Makas Oyunu</h3> */}
          <p>Taş kağıt makas oyununa hoş geldiniz. Bu oyunda, iki tane oyun modu bulunmaktadır.</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-sm-6">
          <Link to={"/modeOne"}>
            <button className="btn btn-outline-success">Oyun Modu 1</button>
          </Link>
        </div>
        <div className="col-sm-6">
          <Link to={"/modeTwo"}>
            <button className="btn btn-outline-success">Oyun Modu 2</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
