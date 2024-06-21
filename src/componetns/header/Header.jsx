import { Component } from "react";
import logo from "../../assets/images/logo.svg";
import "../header/Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  }

  render() {
    const { isDropdownOpen } = this.state;
    return (
      <div className="Header">
        <div className="container">
          <div className="header">
            <div className="over">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="word">
                <a href="#" onClick={this.toggleDropdown}>
                  Продукция
                </a>
                {isDropdownOpen && (
                  <div className="dropdown">
                    <a href="#">Ламинатные тубы</a>
                    <a href="#">Экструзионные тубы</a>
                    <a href="#">Другая упаковка</a>
                  </div>
                )}
                <div className="border"></div>
                <a href="#">Сертификаты</a>
                <div className="border"></div>
                <a href="#">Наша команда</a>
                <div className="border"></div>
                <a href="#">О нас</a>
                <div className="border"></div>
                <a href="#">Новости</a>
                <div className="border"></div>
                <a href="#">Вакансии</a>
                <div className="border"></div>
                <a href="#">Контакты</a>
              </div>
              <div className="language">
                <a href="#">RU</a>
                <div className="border"></div>
                <a href="#">EN</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
