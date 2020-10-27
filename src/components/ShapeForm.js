import React, { useState } from 'react';
import styled from "styled-components";
import ShapeCard from './ShapeCard';
import { SketchPicker } from 'react-color';
import './ShapeCard.css'

const theme = {
    blue: {
      default: "bisque",
      hover: "#6D9CDA"
    },
    green: {
        default: "#8fbc8f",
        hover: "#556b2f"
    }
};

const Button = styled.button`
  background-color: ${props => theme[props.theme].default};
  color: "#3f51b5";
  font-size: 20px;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${props => theme[props.theme].hover};
`;


Button.defaultProps = {
    theme: "blue"
};


const Input = styled.input`
 background-color: ${props => theme[props.theme].default};
 color: "#3f51b5";
 font-size: 20px;
 padding: 10px 60px;
 border-radius: 5px;
 margin: 20px 0px;
 
 text-align: center;
 cursor: pointer;
 transition: ease background-color 250ms;
 &:hover {
  background-color: ${props => theme[props.theme].hover};
`;

Input.defaultProps = {
    theme: "blue"
};

const Select = styled.select`
  background-color: ${props => theme[props.theme].default};
  color: "#3f51b5";
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 20px 0px;
  text-align: center;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
     background-color: ${props => theme[props.theme].hover}
    };
`;

Select.defaultProps = {
    theme: "blue"
};


const FlexForm = styled.div `
    display: flex;
    background-color: "#f1f1f1";
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 10px;
    padding: 20px;
    width: 100%;
    font-size: 30px;
`;

const Form = styled.form `
    display: flex;
    background-color: "#f1f1f1";
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding:10px;
    font-size: 30px;
`



const Container = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-evenly;
   align-items: center;
   margin: 5px;
   padding: 5px;
   width: 100%;
   text-align: center;
   height: 200px;
`;

const deleteShape = (id, shapes, setShapes) => {
    setShapes(shapes.filter(shape => shape.id !== id))
}

const handleSubmit = (e, shape, setShape,  shapes, setShapes, text, setText, color, setColor) => {
    e.preventDefault();
    const id = (shapes.length) ? shapes[shapes.length - 1].id + 1 : 0

    setShapes([...shapes, {id: id, shape: shape, text: text, color: color}]);
    setText('');
    setColor('');
    setShape('');
}



const ShapeForm = () => {
  const optionShapes = ["square", "circle", "triangle", "rectangle"];

  const [shapes, setShapes] = useState([]);
  const [shape, setShape] = useState('');
  const [text, setText] = useState('');
  const [color, setColor] = useState('');
  const [showColorPicker, setShowColorPicker] = useState(false);


    return (
        <FlexForm>
            <Form onSubmit={(e) => handleSubmit(e, shape, setShape, shapes, setShapes, text, setText, color, setColor)}>
                <Select 
                  onChange={(e) => setShape(e.target.value)}
                  value={shape} 
                >
                    <option value="" disabled>Choose Shape</option>
                    {optionShapes.map((shape, index) => (
                        <option value={shape} key={index}>{shape}</option>
                    ))}
                </Select>
                <Input 
                    onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}
                    onChange={(e) => setColor(e.target.value)}
                    value={color} 
                    type="text"
                    placeholder={showColorPicker ? ' Close color picker' : 'Choose a color'}
                />
                { showColorPicker && (
                    <SketchPicker
                        color={color} 
                        onChange={updatedColor => setColor(updatedColor.hex)} 
                    />
                )} 
                <Input 
                    onChange={(e) => setText(e.target.value)}  
                    type="text"
                    value={text} 
                    placeholder="Text Input" 
                />
                <Button theme="green" type="submit">Add</Button>
            </Form>
            <Container>
            {shapes.map((shape, id) => (
               <ShapeCard
                 key={shape.id}
                 shape={shape}
                 deleteShape={(id) => deleteShape(id, shapes, setShapes)} 
                /> 
            ))}
            </Container>
        </FlexForm>
    )
};


export default ShapeForm;





