import Button from '@mui/material/Button';

interface ButtonBasicProps {
    onClick: () => void;
}

function ButtonBasic({ onClick }: ButtonBasicProps) {
    return (
        <Button variant="contained" onClick={onClick}>?</Button>
    )
}

export default ButtonBasic;