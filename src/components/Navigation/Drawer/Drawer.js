import { Component } from "react";
import { NavLink } from "react-router-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";
import s from "./Drawer.module.css";

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks(links) {
    return links.map((link, i) => {
      return (
        <li key={i}>
          <NavLink
            to={link.to}
            className={({ isActive }) => (isActive ? s.active : undefined)}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }
  render() {
    const cls = [s.Drawer];
    if (!this.props.isOpen) {
      cls.push(s.close);
    }

    const links = [
      {
        to: "/",
        label: "Список",
      },
    ];

    console.log("auth", this.props.isAuthenticated);

    if (this.props.isAuthenticated) {
      links.push({
        to: "/quiz-creator",
        label: "Создать тест",
      });
      links.push({
        to: "/logout",
        label: "Выйти",
      });
    } else {
      links.push({
        to: "/auth",
        label: "Авторизация",
      });
    }

    return (
      <>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    );
  }
}

export default Drawer;
