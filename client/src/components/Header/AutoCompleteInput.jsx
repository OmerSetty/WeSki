import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';
import { RequestDataContext } from './Header';

function AutoCompleteInput({ options, img, state }) {
  const { data, setData } = useContext(RequestDataContext)[state];

  return (
    <div>
      <Autocomplete
        sx={{
          width: '288.67px',
          height: '44px',
          mr: 1,
        }}
        value={data}
        onChange={(_, newValue) => {
          setData(newValue);
        }}
        disablePortal
        freeSolo
        id="combo-box-demo"
        options={options}
        renderInput={(params) => <TextField {...params} InputLabelProps={{ shrink: false }}
          sx={{ border: '1px solid #C2C8D6', borderRadius: '8px' }}
          size="small"
          InputProps={{
            ...params.InputProps,
            startAdornment: (<InputAdornment position="start"> <img src={img} alt="abc" />
            </InputAdornment>),
          }} />}
      />
    </div>
  );
}

export default AutoCompleteInput;