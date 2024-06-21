import { Component } from "react";
import logo from "../../assets/images/logo.svg";
import vk from "../../assets/images/vk.svg";
import fb from "../../assets/images/fb.svg";
import linkedin from "../../assets/images/linkedin.svg";
import "../footer/Footer.scss";
import backtop from "../../assets/images/bactop.svg";

class Footer extends Component {
  backTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <div className="Footer">
        <div className="container">
          <div className="footer">
            <div className="start">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="logo2">
                <img src={vk} alt="" />
                <img src={fb} alt="" />
                <img src={linkedin} alt="" />
              </div>
            </div>
            <div className="border"></div>
            <div className="word">
              <div className="word1">
                <div className="box">
                  <h2>Продукция</h2>
                  <p>Ламинатные тубы</p>
                  <p>Экструзионные тубы</p>
                  <p>Другая упаковка</p>
                </div>
                <div className="box">
                  <h2>Компания</h2>
                  <p>О нас</p>
                  <p>Наша команда</p>
                  <p>Сертификаты</p>
                </div>
                <div className="box">
                  <h2>Разделы</h2>
                  <p>Контакты</p>
                  <p>Новости</p>
                  <p>Вакансии</p>
                </div>
              </div>
              <div className="word2">
                <div className="number">
                  <div className="num">
                    <h3>Беларусь</h3>
                    <p>+375 (17) 270 53 77</p>
                    <p>+375 (17) 270 53 78</p>
                  </div>
                  <div className="num2">
                    <h3>Европа</h3>
                    <p>+48 73 1111 044 </p>
                  </div>
                </div>
                <div className="number2">
                  <div className="num">
                    <h3>Беларусь</h3>
                    <p>+375 (17) 270 53 77</p>
                    <p>+375 (17) 270 53 78</p>
                  </div>
                  <div className="num2">
                    <h3>Европа</h3>
                    <p>+48 73 1111 044 </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="end">
              <p>
                © 2022 Leangroup. All Rights Reserved. Разработка и продвижение
                сайтов SkyWeb.by
              </p>
            </div>
          </div>
        </div>
        <button onClick={this.backTop}>
          <img src={backtop} alt="" />
        </button>
      </div>
    );
  }
}
export default Footer;
