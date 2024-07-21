import Icon from "../images/icon.png"

export default function Header() {
  return(
      <nav className="nav">
        <img src={Icon} className='nav--img' />
        <h3 className="nav--title">ReactFacts</h3>
        <h4 className="nav--info">React Course-Project 1</h4>
      </nav>
  )
}
