export interface Props {
    onClick?: any
    children?: string;
    theme?: any;
    themeName?: any;
    width?: string;
    margin?: string;
    marginBottom?: string;
    text?: string;
    disabled: boolean
}

export interface Theme {
    [key: string]: {
        [key: string]: string
    }
}