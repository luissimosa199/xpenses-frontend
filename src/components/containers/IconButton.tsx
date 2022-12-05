import { FunctionComponent } from "react";
import styled from 'styled-components'

interface IconButtonProps {
    onClick: React.MouseEventHandler;
    children: JSX.Element;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-left: auto;

`
 
const IconButton: FunctionComponent<IconButtonProps> = ({ onClick, type, children }) => {
    return ( 
        <Button onClick={onClick} type={type}>
            {children}
        </Button>
     );
}
 
export default IconButton;