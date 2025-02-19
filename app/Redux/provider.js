'use client'
import { Provider } from 'react-redux';
import store from './store'; // Adjust the path to your store

const ReduxProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;