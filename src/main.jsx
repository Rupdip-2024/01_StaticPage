import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const page = (
//   <div>
//     <img src={Icon} width="40px" />
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousand of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// )

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>,
)

