import { Component } from "react";
import "../main/Crem.scss";
import crem1 from "../../assets/images/crem1.png";
import crem2 from "../../assets/images/crem2.png";
import crem3 from "../../assets/images/crem3.png";
import crem4 from "../../assets/images/crem4.png";
import crem5 from "../../assets/images/crem5.png";

export class Crem extends Component {
  render() {
    return (
      <div className="Crem">
        <div className="container">
          <div className="crem">
            <div className="start">
              <p>Наша </p>
              <p className="yellow">продукция</p>
            </div>
            <div className="btn1">
              <button>Ламинатные тубы</button>
              <button>Экструзионные тубы</button>
              <button>Другая упаковка</button>
            </div>
            <div className="imegs">
              <img src={crem1} alt="" />
              <img src={crem2} alt="" />
              <img src={crem3} alt="" />
              <img src={crem4} alt="" />
              <img src={crem5} alt="" />
            </div>
            <div className="btn2">
              <button>Перейти в каталог</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Crem;
