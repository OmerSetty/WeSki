import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

export const ResortsDataContext = React.createContext();

function App() {

  const [resortsData, setResortsData] = useState();
  const [requestData, setRequestData] = useState();

  return (
    <ResortsDataContext.Provider value={{ resortsData, setResortsData, requestData, setRequestData }}>
      <Header />
      <Content />
    </ResortsDataContext.Provider>
  );
}

export default App;
