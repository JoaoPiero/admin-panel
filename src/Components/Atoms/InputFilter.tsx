import { TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { FlexDiv } from '../../Styles/Global.styled';

interface InputFilterProps {
  filterText: string;
  onFilterTextChange: (text: string) => void;
}

function InputFilter({ onFilterTextChange }: InputFilterProps) {
  const [localFilterText, setLocalFilterText] = useState('');

  const handleFilterTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setLocalFilterText(newText);
    onFilterTextChange(newText);
  };

  return (
    <div>
      <TextField 
        label="Filter "
        variant="outlined"
        type="text"
        id="filter"
        value={localFilterText}
        onChange={handleFilterTextChange}
      />
    </div>
  );
}

export default InputFilter;
