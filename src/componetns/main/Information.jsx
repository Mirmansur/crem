import { Component } from "react";
import "../main/Information.scss";
import people from "../../assets/images/icon1.svg";
import coll from "../../assets/images/icon2.svg";
export class Information extends Component {
  render() {
    return (
      <div className="Information">
        <div className="container">
          <div className="information">
            <div className="start">
              <p>Получить подробную </p>
              <p className="yellow">информацию</p>
            </div>
            <p>
              Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее
              время
            </p>
            <div className="input">
              <div className="inp1">
                <input type="text" src={people} placeholder="Ваше имя" />
                <input type="text" src={coll} placeholder="+375 (29) 0000000" />
              </div>
              <div className="inp2">
                <input type="text" placeholder="Комментарий" />
              </div>
            </div>
            <button>Получить информацию</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
