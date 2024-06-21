import { Component } from "react";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import people4 from "../../assets/images/people4.png";
import people5 from "../../assets/images/people5.png";
import "../main/Person.scss";

class Person extends Component {
  render() {
    return (
      <div className="Person">
        <div className="container">
          <div className="person">
            <div className="start">
              <p>Наша </p>
              <p className="yellow">команда</p>
            </div>
            <div className="main">
              <div className="box">
                <img src={people1} alt="" />
                <h4>Войнич Дарья</h4>
                <p className="name">Заместитель директора по продажам</p>
                <p>+375 (17) 270-53-77 </p>
                <p className="coll">(317) +375 00 000 00 00 </p>
                <p>email@com</p>
              </div>
              <div className="box">
                <img src={people2} alt="" />
                <h4>Мисько Екатерина</h4>
                <p className="name">Начальник отдела сопровождения</p>
                <p>+375 (17) 270-53-77 (115)</p>
                <p className="coll"> +375 29 112-73-48 </p>
                <p>k.melnichenko@leangroup.by</p>
              </div>
              <div className="box">
                <img src={people3} alt="" />
                <h4>Дмитроченко Дмитрий</h4>
                <p className="name">Начальник отдела допечатной подготовки</p>
                <p>+375 (17) 270-53-77 (333) </p>
                <p className="coll"> +375 29 360-32-26</p>
                <p>dmitrochenko@leangroup.by</p>
              </div>
              <div className="box">
                <img src={people4} alt="" />
                <h4>Антух Евгений</h4>
                <p className="name">Начальник отдела снабжения</p>
                <p>+375 (17) 270-53-77 (148) </p>
                <p className="coll"> +375 44 764-16-28</p>
                <p>j.antuh@leangroup.by</p>
              </div>
              <div className="box">
                <img src={people5} alt="" />
                <h4>Мисник Елена</h4>
                <p className="name">Специалист по работе с клиентами</p>
                <p>+375 (17) 270-53-77 (322)</p>
                <p className="coll"> +375 29 329-34-03</p>
                <p>e.misnik@leangroup.by</p>
              </div>
            </div>
            <button>Наша команда</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Person;
