import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container } from "./wishli";

var stylingObject = {
    div: {
      color: "red",
      border: "1px solid red"
    }, input: {
      margin: "2px",
      padding: "5px"
    }
  }

function Wish(){

    const [wish, setWish] = useState([{
        title: ''
    }])

    useEffect(() => {
        fetch("http://localhost:3001/wish")
        .then(res => {
            if(res.ok){
                console.log(res);
                return res.json()
            }
        }).then(jsonRes => setWish(jsonRes)
        )
        
    })


    const [input, setInput] = useState({
        title: ''
    })

    function handleChange(event){
       const {name, value} = event.target;

       setInput(prevInput => {
           return {
               ...prevInput,
               [name]: value
           }
       })
    }

    function handleClick(event){
        event.preventDefault();
        const newWish = {
            title:input.title
        }
        axios.post('http://localhost:3001/create',newWish)
    }

    function handleDelete(id){
        axios.delete('http://localhost:3001/delete/' + id);
        alert("item deleted");
    }

   
    return <center><div className='Container'>
        <h1 style={{color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Roboto"}}>Wishlist page</h1>
        <br/>
        <h4 style={{color: "Blue",fontSize: "20px",fontFamily: "Roboto"}}>Enter the items!!</h4>
        <form>
            <div className='main-header'>
                <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className="form-control" placeholder="Type here"></input>
            </div>
            <br/>
            <div className='main-header'>
                <button onClick={handleClick} className="btn btn-lg btn-info">ADD</button>
            </div>
        </form>
        <h2 style={{color: "Blue",fontSize: "20px",fontFamily: "Roboto"}}>Added items are:</h2>

        {wish.map(wish =>
        <div>
            
            <h5 style={{color: "Black",fontSize: "20px",fontFamily: "Roboto"}} >{wish.title}</h5>
            <button onClick={() => handleDelete(wish.title)}>Delete</button>
            
        </div>
            )}

    </div></center>
    
}

export default Wish;