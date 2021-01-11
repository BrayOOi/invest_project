import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({options, label, getOptionLabel = option => option, ...props}) => (
  <Autocomplete
    {...props}
    // freeSolo
    options={options}
    getOptionLabel={getOptionLabel}
    renderInput={(params) => (
      <TextField 
        {...params}
        placeholder={label}
        margin="normal" 
        variant="outlined"
        InputLabelProps={{
          shrink: false,
        }}
        InputProps={{
          ...params.InputProps,
          // startAdornment: params.InputProps.startAdornment
          startAdornment: 
          <InputAdornment position="start">
            <SearchIcon style={{marginLeft: 5, color: "#d9d9d9"}} />
          </InputAdornment> 
        }}
      />
    )}
  />
);

export default SearchBar;
