import Button from '@mui/material/Button';

interface ButtonBasicProps {
    onClick: () => void;
    className?: string;
}

function ButtonBasic({ onClick }: ButtonBasicProps) {
    return (
        <Button variant="contained" onClick={onClick}>Search</Button>
    )
}

export default ButtonBasic;