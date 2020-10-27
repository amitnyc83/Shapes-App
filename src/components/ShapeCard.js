import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './ShapeCard.css'



const ShapeCard = ({shape, color, deleteShape}) => (
  <div className={shape.shape} style={{ backgroundColor: shape.color } } key={shape.id}>
    <p>{shape.text}</p>
    <br></br>
    <div>
      {shape ? <DeleteIcon onClick={() => deleteShape(shape.id)}/> : <p>Loading...</p>}
    </div>
  </div>     
);




export default ShapeCard;