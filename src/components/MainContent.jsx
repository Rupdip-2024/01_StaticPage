export default function MainContent(props) {
  return(
    <main className={ props.darkMode ? "main" : "main-light"}>
    <h1 className="main--title">Fun facts about React</h1>
        <ul className={ props.darkMode ? "main--facts" : "light-main--facts"} >
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousand of enterprise apps, including mobile apps</li>
        </ul>
    </main>
  )
}
