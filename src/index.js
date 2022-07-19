import React from "react";
import { Provider } from 'react-redux'
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';

import App from "./App";
import Alerts from "./layout/Alerts";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Alerts/>
                <App />
        </PersistGate>
    </Provider>
);