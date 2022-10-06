import React from 'react';
import AutoCompleteInput from './AutoCompleteInput';
import { resortsIdentifiers } from '../../Data/resortsIdentifiers';

function DestinationInput(props) {

  return (
    <AutoCompleteInput options={resortsIdentifiers.map(resort => resort.name)} img={'/destination.png'}
    state='destination'/>
  )
}

export default DestinationInput;