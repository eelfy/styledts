import React, { useState } from 'react';
import Button from './components/Button/Button';
import Alert from './components/Alert/Alert'
import './App.css';


const App: React.FC = () => {
    const [Active, setActive] = useState<boolean>(false)
    return (
        <>
            <div className='App' style={{ display: "flex" }}>

                <Button
                    onClick={(): void => {

                        console.log(123);
                        setActive(true)
                    }}
                    width="150px"
                    themeName="orangeMedium"
                    margin='30px'
                    marginBottom='0px'
                    disabled={false}
                >
                    Button
                </Button>

            </div>
            <br />
            <br />
            <br />
            {/* <div className='App'> */}
            <Alert
                setActive={(active: boolean) => setActive(active)}
                onClick={(): void => setActive(false)}
                active={Active}
                error={false}
                text="success"
            />
            {/* <Alert
                    active={Active}
                    text="error"
                    error={true}
                /> */}
            {/* </div> */}
        </>
    )
};

export default App;
