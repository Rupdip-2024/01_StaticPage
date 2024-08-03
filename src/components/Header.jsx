import Icon from "../images/icon.png"
import IconDark from "../images/react-dark-icon.png"

export default function Header(props) {
  return(
      <nav className={ props.darkMode ? "nav" : "nav-light"}>
        <img  src={ props.darkMode ? Icon : IconDark} className={ props.darkMode ? "nav--img" : "light-nav--img" }/>
        <h3 className={ props.darkMode ? "nav--title" : "nav-light--title"}>ReactFacts</h3>
        <div className={ props.darkMode ? "nav--info" : "nav-light--info"}>
          <h5>Dark</h5>
          <div
           className={ props.darkMode ? "darkMode-btn" : "lightMode-btn"}
          >
            <div className="mode" onClick={props.toggle}></div>
          </div>
          <h5>Light</h5>
        </div>
      </nav>
  )
}
