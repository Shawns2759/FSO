import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';




    ReactDOM.render(
      <React.StrictMode>
        <App/>,
      </React.StrictMode>,
      document.getElementById('root')
    );


//   const promise = axios
//   .get('http://localhost:3001/notes')
//   .then(res => {
//     ReactDOM.render(
//       <React.StrictMode>
//         <App notes={res.data}/>,
//       </React.StrictMode>,
//       document.getElementById('root')
//     );
// })






