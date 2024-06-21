import { Component } from "react";
import diplom1 from "../../assets/images/diplom1.png";
import diplom2 from "../../assets/images/diplom2.png";
import diplom3 from "../../assets/images/diplom3.png";
import diplom4 from "../../assets/images/diplom4.png";
import diplom5 from "../../assets/images/diplom5.png";
import "../main/Diplom.scss";

class Diplom extends Component {
  render() {
    return (
      <div className="Diplom">
        <div className="container">
          <div className="diplom">
            <div className="start">
              <p>Качество продукции подтверждают</p>
              <p className="yellow"> сертификаты</p>
            </div>
            <div className="end">
              <img src={diplom1} alt="" />
              <img src={diplom2} alt="" />
              <img src={diplom3} alt="" />
              <img src={diplom4} alt="" />
              <img src={diplom5} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Diplom;
