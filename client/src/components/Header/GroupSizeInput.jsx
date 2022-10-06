import React from 'react';
import AutoCompleteInput from './AutoCompleteInput';
import { groupSizeBoundaries } from '../../Data/groupSizeBoundaries';

function DestinationInput(props) {

  const groupSizeOptions = Array.from(new Array(groupSizeBoundaries.max - groupSizeBoundaries.min + 1),
    (_, i) => (i + groupSizeBoundaries.min).toString());

  return (
    <AutoCompleteInput options={groupSizeOptions} img={'/groupsize.png'}
      state='groupSize' />
  )
}

export default DestinationInput;