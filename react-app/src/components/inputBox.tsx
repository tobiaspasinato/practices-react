import TextField from '@mui/material/TextField';

function InputBox ({ label, input, setInput }: { label: string, input: string, setInput: (value: string) => void }) {
    return <TextField value={input} label={label} variant="outlined" onChange={(e) => setInput(e.target.value)} />
}

export default InputBox;