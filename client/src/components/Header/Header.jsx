import React, { useState } from 'react';
import DestinationInput from './DestinationInput';
import GroupSizeInput from './GroupSizeInput';
import DatesInput from './DatesInput';
import Search from './Search';
import '../../css/header.css';

export const RequestDataContext = React.createContext();

function Header() {
  const [destination, setDestination] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [datesRange, setDatesRange] = useState('10/06/2022 - 10/06/2022');

  return (
    <RequestDataContext.Provider value={{
      destination: { data: destination, setData: setDestination },
      groupSize: { data: groupSize, setData: setGroupSize },
      datesRange: { data: datesRange, setData: setDatesRange },
    }} >
      <div className="header-container">
        <div className='header'>
          <img className='logo' src='/weski.png' alt="abc" />
          <DestinationInput />
          <GroupSizeInput />
          <DatesInput />
          <Search />
        </div>
      </div>
    </ RequestDataContext.Provider>
  );
}

export default Header;