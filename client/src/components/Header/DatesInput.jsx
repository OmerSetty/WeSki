import React, { useEffect, useContext } from 'react';
import $ from 'jquery';
import daterangepicker from 'daterangepicker';
import { RequestDataContext } from './Header';
import '../../css/header.css';

function DestinationInput(props) {
  const { data, setData } = useContext(RequestDataContext).datesRange;

  useEffect(() => {
    $('input[name="daterange"]').daterangepicker();
    $('input[name="daterange"]').on('apply.daterangepicker', function(ev) {
      setData(ev.target.value)
    });
  }, [setData])

  return (
    <div>
      <input readOnly type="text" className='date-picker' name="daterange" value={data}/>
    </div>
  )
}


export default DestinationInput;