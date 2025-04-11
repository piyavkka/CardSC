import './App.css';
import styled from 'styled-components';
import img from './img.jpg';


function App() {
    return (
        <div className="App">
            <Card>
                <Photo/>
                <Label>Headline</Label>
                <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                <Button1>See more</Button1>
                <Button2>Save</Button2>
            </Card>
        </div>
    );
}

export default App;

const Card = styled.div`
    width: 300px;
    height: 350px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);    
`;

const Photo = styled.div`
    width: 280px;
    height: 170px;
    border-radius: 10px;
    margin: 10px;
    background-size: cover;
    background-image: url('${img}');
    
`;

const Label = styled.h2`
    font-weight: 700;
    font-size: 16px;
    margin-left: 20px;
    margin-top: 20px;
`;

const Text = styled.p`
    font-weight: 500;
    font-size: 12px;
    color: #ABB3BA;
    line-height: 20px;
    margin: 20px;
`;

const Button1 = styled.button`
    font-weight: 700;
    font-size: 10px;
    background: #4E71FE;
    border: none;
    color: white;
    border-radius: 5px;
    width: 86px;
    height: 30px;
    text-align: center;
    margin-left: 20px;
`;

const Button2 = styled.button`
    font-weight: 700;
    font-size: 10px;
    border: 2px solid #4E71FE;
    color: #4E71FE;
    background: white;
    border-radius: 5px;
    width: 86px;
    height: 30px;
    text-align: center;
    margin-left: 10px;
`;