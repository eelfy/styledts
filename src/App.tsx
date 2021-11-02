import React from 'react';
import Button from './components/Button/Button';

const App:React.FC = ()=> (
    <>
        <Button 
            width="150px" 
            themeName="orangeMedium"
            margin='30px'
            marginBottom='0px'
            active={true}
        >
            Button
        </Button>
    </>
)

export default App;
