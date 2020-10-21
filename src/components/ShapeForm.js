import React, { useState } from 'react';
import styled from "styled-components";
import { SketchPicker } from 'react-color';
// import DeleteIcon from '@material-ui/icons/Delete';
import ShapeCard from './ShapeCard';




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
    background-color: ${props => theme[props.theme].hover};
  `;

  Select.defaultProps = {
      theme: "blue"
  };





const deleteShape = (id, shapes, setShapes) => {
    setShapes(shapes.filter(shape => shape.id !== id))
}




const ShapeForm = () => {
    const optionShapes = [ 'square', 'circle', 'rectangle','triangle'];

    const [shapes, setShapes] = useState([]);
    const [value, setValue] = useState('');

    const [color, setColor] = useState('');
    const [title, setTitle] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(false);

    
    const handleSubmit = (e, value, setValue, shapes, setShapes, title, setTitle, color, setColor) => {
        e.preventDefault();
        const id = (shapes.length) ? shapes[shapes.length - 1].id + 1 : 0
    
        setShapes([...shapes, {id: id, style: value, color: color, title: title }]);
        console.log(shapes)
        setTitle("");
        setColor('');
        setValue("");
    }
 

    

    return (
        <div>
        <div className="wrapper">
         <form onSubmit={(e) => handleSubmit(e, value, setValue, shapes, setShapes, color, setColor, title, setTitle)}>
             <Select 
              onChange={(e) => setValue(e.target.value)}
              value={value}
              >
                 <option value="" disabled selected>Choose Shape</option>
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
                     color={color.backgroundColor} 
                     onChange={updatedColor => setColor(updatedColor.hex)} 
                   />
               )}  
               <Input 
                 onChange={(e) => setTitle(e.target.value)} 
                 
                 type="text"
                 value={title} 
                 placeholder="Text Input" 
              />
             <Button theme="green" type="submit">Add</Button>
         </form>
        </div>
        <div className="shape-list-wrapper">
             {shapes.map((shape, index) => (
                 <ShapeCard className={shape.style} 
                     key={shape.id}
                     index={index} 
                     title={shape.title} 
                     color={shape.color}
                     id={shape.id} 
                     deleteShape={(id) => deleteShape(id, shapes, setShapes)} 
                  />  
               ))}
           </div>
        </div>
    );
}

export default ShapeForm;








