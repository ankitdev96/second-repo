import React from 'react';
import './Singer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Singer = (props) => {
     const {img,name,age,country,Role,salary} = props.singer;
     const element = <FontAwesomeIcon icon={faShoppingCart} />
     


    return (
        <div className="card">
            <img src={img} alt="" />
            
            <p><span>Singer Name : </span> {name}</p>
            <p><span>Age : </span> {age}</p>
            <p><span>Country : </span> {country}</p>
            <p><span>Role : </span>{Role}</p>
            <p><span>Salary : </span>{salary}</p>

            <button onClick={()=>props.addToCartHandler(props.singer)}> 
           {element} Add To Cart 
            </button>

            


        </div>
    );
};

export default Singer;