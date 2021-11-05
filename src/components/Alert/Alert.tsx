import react from 'react'
import './Alert.css'
import { StyledAlert } from './AlertStyle'
import { Props } from './AlertTypes'
import { ReactComponent as CloseBlack } from '../../assets/CloseBlack.svg'
import { ReactComponent as CloseWhite } from '../../assets/CloseWhite.svg'

const Alert: React.FC<Props> = ({ setActive, onClick, active, text, error }) => {
    const closeAlert = () => {
        setActive(false)
    }
    if (active === true) {
        setTimeout(closeAlert, 3000);
    }
    return (
        <StyledAlert
            active={active}
            error={error}
        >
            <span>{text}</span>

            {error ?
                <CloseWhite
                    onClick={onClick}
                    className='closeAlert' /> :
                <CloseBlack
                    onClick={onClick}
                    className='closeAlert' />}

        </StyledAlert>
    )
}
export default Alert