import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './ShapeCard.css'





// const Card = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 70px;
// margin: 10vh auto;
// border: 20px;
// width: 50%;
// height: auto;
// background-color: bisque;
// `;

const ShapeCard = ({ style, color, id, title, deleteShape}) => (
    <div className={style} color={title} key={id}>
      {color}
      <br></br>
      <DeleteIcon onClick={() => deleteShape(id)}/>
    </div>
);

export default ShapeCard;

