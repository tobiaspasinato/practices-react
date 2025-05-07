//import * as React from 'react';
import TextField from '@mui/material/TextField';

interface InputBasicProps {
  value: string;
  setInputValue: (value: string) => void;
}

export default function InputBasic({ value, setInputValue } : InputBasicProps) {
  return (
      <TextField id="InputBasic" label="Nombre del Pokemon" variant="standard" value={value} onChange={(evento) =>{
        console.log(evento)
        setInputValue(evento.target.value)
      }} sx={{
        input: { color: 'white' },
      }}/>
  );
}