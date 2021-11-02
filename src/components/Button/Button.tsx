import React from 'react';
import styled from 'styled-components'

interface Props{
    children?: string;
    themeName:any;
    width?:string;
    margin?:string;
    marginBottom?:string;
    text?:string;
    active:boolean
}

// const Items {
    
// }

interface Theme{
    [key:string]: {
        [key:string]:string 
        // color?:string | undefined,
        // border?:string,
        // borderRadius?:string,
        // padding?:string,
        // fontSize?:string,
        // textColor?:string,
        // hoverColor?:string,
        // hoverBorder?:string,
        // activeBorder?:string,
        // activeColor?:string,
    }
}

const StylingButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.themeName.height};
  width: ${props => props.width};
  background-color: ${props => props.themeName.color};
  border: ${props => props.themeName.border};
  border-radius: ${props => props.themeName.borderRadius};
  margin-right: ${props => props.margin};
  margin-bottom: ${props => props.marginBottom};
  padding-left: ${props => props.themeName.padding};
  padding-right: ${props => props.themeName.padding};
  color: ${props => props.themeName.textColor};
  font-weight: bold;
  font-size: ${props => props.themeName.fontSize};
  line-height: 20px;
  cursor: pointer;
  &:hover{
    background-color: ${props => props.themeName.hoverColor};
    border: ${props => props.themeName.hoverBorder};
  }
  &:focus{
    background-color: ${props => props.themeName.hoverColor};
    border: 1px solid ${props => props.themeName.hoverBorder};
  }
  &:active{
    background-color: ${props => props.themeName.activeColor};
    border: 1px solid ${props => props.themeName.activeBorder};
  }
`;

const store:Theme = {
    orangeMedium: {
        height: '32px',
        color: '#FB6308',
        border: '1px solid #FB6308',
        borderRadius: '8px',
        padding: '12px',
        fontSize: '14px',
        textColor: '#FFFFFF',
        hoverColor: '#FF863D',
        hoverBorder: '1px solid #FF863D',
        activeBorder: '1px solid #E95C08',
        activeColor: '#E95C08',
      },
      orangeLarge: {
        height: '40px',
        color: '#FB6308',
        border: '1px solid #FB6308',
        borderRadius: '8px',
        padding: '12px',
        fontSize: '16px',
        textColor: '#FFFFFF',
        hoverColor: '#FF863D',
        hoverBorder: '1px solid #FF863D',
        activeBorder: '1px solid #E95C08',
        activeColor: '#E95C08',
      },
      grayMedium: {
        height: '32px',
        color: '#FFFFFF',
        border: '1px solid #DFE1E6',
        borderRadius: '8px',
        padding: '12px',
        fontSize: '14px',
        textColor: 'var(--color-gray-1)',
        hoverColor: '#ECECEC',
        hoverBorder: '1px solid #DFE1E6',
        activeBorder: '1px solid #DFE1E6',
        activeColor: '#DFE1E6',
      },
      grayLarge: {
        height: '40px',
        color: '#FFFFFF',
        border: '1px solid #DFE1E6',
        borderRadius: '8px',
        padding: '12px',
        fontSize: '16px',
        textColor: 'var(--color-gray-1)',
        hoverColor: '#ECECEC',
        hoverBorder: '1px solid #DFE1E6',
        activeBorder: '1px solid #DFE1E6',
        activeColor: '#DFE1E6',
      },
      icon: {
        height: '32px',
        borderRadius: '16px',
        hoverColor: '#DBDBDB',
        hoverBorder: '1px solid#DBDBDB',
        activeBorder: '1px solid #DFE1E6',
        activeColor: '#DFE1E6',
      },
  };
  const Button:React.FC <Props> = ({children, themeName, width, margin, marginBottom,active})=>{
    debugger
    return(
        <StylingButton 
            themeName={store[themeName]}
            width={width}
            margin={margin}
            marginBottom={marginBottom}
            active={active}
            // {...{ ...props}}
        >
            {children}
        </StylingButton>
    )
}
export default Button
