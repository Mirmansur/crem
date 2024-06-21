import { Component } from "react";
import news1 from "../../assets/images/news1.png";
import news2 from "../../assets/images/news2.png";
import news3 from "../../assets/images/news3.png";
import "../main/News.scss";

class News extends Component {
  render() {
    return (
      <div className="News">
        <div className="container">
          <div className="news">
            <div className="start">
              <p>Новости</p>
            </div>
            <div className="main">
              <div className="box">
                <img src={news1} alt="" />
                <p className="data">28.01.2022</p>
                <p>ЛеанГрупп серебряный призер EcoVadis!</p>
              </div>
              <div className="box">
                <img src={news2} alt="" />
                <p className="data">21.01.2022</p>
                <p>ЛеанГрупп серебряный призер EcoVadis!</p>
              </div>
              <div className="box">
                <img src={news3} alt="" />
                <p className="data">16.12.2021</p>
                <p>Туба, как вид упаковки</p>
              </div>
            </div>
            <button></button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
