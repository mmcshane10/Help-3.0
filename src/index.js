import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';

// import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

const render = (Component) => {

    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <HashRouter>
                    <Component />
                </HashRouter>
            </AppContainer>
        </Provider>,
        document.getElementById('root')
    );
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
render(App);
/*eslint-disable*/
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}
/*eslint-enable*/