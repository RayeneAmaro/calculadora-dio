import { Container, Content, Row } from "./style";
import Input from './components/Input'
import Button from './components/Button'
import { useState } from "react";

function App() {

  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

 //pegar numero 
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

//limpar
  const handleOnClear = () => {
    setCurrentNumber('0')
  }

//adicao
  const handleSumNumbers = () => {
    setOperation('+')
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
    }
  }

//subtração
  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    } else {
      const minus = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(minus))
    }
  }

  //multiplicacao
  const handleMultNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
    }
  }

  //divisao
  const handleDivNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    } else {
      const divs = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(divs))
    }
  }

//igual
  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      console.log("If");
      switch(operation){
        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleMinusNumbers();
          break;

        case '*':
          handleMultNumbers();
          break;

        case '/':
          handleDivNumbers();
          break;

        default:
          break;
      }
    }else{
      console.log("ELSE");
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="9" onClick={()=> handleAddNumber('9')}/>
          <Button label="8" onClick={()=> handleAddNumber('8')}/>
          <Button label="7" onClick={()=> handleAddNumber('7')}/>
          <Button label="/" onClick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="6" onClick={()=> handleAddNumber('6')}/>
          <Button label="5" onClick={()=> handleAddNumber('5')}/>
          <Button label="4" onClick={()=> handleAddNumber('4')}/>
          <Button label="*" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="3" onClick={()=> handleAddNumber('3')}/>
          <Button label="2" onClick={()=> handleAddNumber('2')}/>
          <Button label="1" onClick={()=> handleAddNumber('1')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="x" onClick={()=> handleOnClear()}/>
          <Button label="0" onClick={()=> handleAddNumber('0')}/>
          <Button label="=" onClick={handleEquals}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
