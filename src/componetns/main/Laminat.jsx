import { Component } from "react";
// import moxit from "../../assets/images/photo1.png";
import "../main/Laminat.scss";

class Laminat extends Component {
  render() {
    return (
      <div className="Laminat">
        <div className="container">
          <div className="laminat">
            <div className="word">
              <a href="#">LEANGROUP - тубы и этикетки</a>
              <h2>Ламинатные тубы</h2>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button>Каталог</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Laminat;
