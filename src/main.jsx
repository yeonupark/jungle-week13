import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './components/App.jsx'
import Router from './components/Router.jsx';

import store from "./redux/config/configStore";
import { Provider } from "react-redux";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router />
  </Provider>
)
