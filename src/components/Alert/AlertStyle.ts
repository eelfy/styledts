import styled from 'styled-components'
import { Props } from './AlertTypes'

export const StyledAlert = styled.div<Props>`
    position: absolute;
    top: 16px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    
    /* display: ${props => props.active ? 'flex' : 'none'}; */
    transition: .2s linear;
    align-items: center;
    opacity: ${props => props.active ? '1' : '0'};
    /* pointer-events: none; */
    border-radius: 8px;
    padding: 12px 16px;
    width: fit-content;
    background: ${props => props.error ? "#E92C2C" : "#CEFACE"};
    
    color:${props => props.error ? "white" : "#212528"};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
`;