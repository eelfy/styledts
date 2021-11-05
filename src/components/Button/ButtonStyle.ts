import styled from 'styled-components'
import { Props, Theme } from './ButtonTypes'

export const StylingButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  height: ${props => props.theme.height};
  width: ${props => props.width};
  background-color: ${props => props.theme.color};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  margin-right: ${props => props.margin};
  margin-bottom: ${props => props.marginBottom};
  padding-left: ${props => props.theme.padding};
  padding-right: ${props => props.theme.padding};
  color: ${props => props.theme.textColor};
  font-weight: bold;
  font-size: ${props => props.theme.fontSize};
  line-height: 20px;
  cursor: ${props => props.theme.cursor || 'pointer'};
  &:hover{
    background-color: ${props => props.theme.hoverColor};
    border: ${props => props.theme.hoverBorder};
  }
  &:focus{
    background-color: ${props => props.theme.hoverColor};
    border: 1px solid ${props => props.theme.hoverBorder};
  }
  &:active{
    background-color: ${props => props.theme.activeColor};
    border: 1px solid ${props => props.theme.activeBorder};
  }
`;

export const store: Theme = {
    orangeMedium: {
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
        borderRadius: '16px',
        hoverColor: '#DBDBDB',
        hoverBorder: '1px solid#DBDBDB',
        activeBorder: '1px solid #DFE1E6',
        activeColor: '#DFE1E6',
    },
    disabled: {
        color: '#E9E9E9',
        border: '1px solid #DBDDE0',
        textColor: '#A8A8A8',
        cursor: 'default',
    },
};