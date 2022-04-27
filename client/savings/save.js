import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';





function Save(){
    var savingsAmount = 0

    const[saves, setSaves] = useState([{
        title: ''
    }])

    useEffect(() => {
        fetch("http://localhost:3005/save").then(res =>{ 
            if(res.ok){

                return res.json()
            }
        }).then(jsonRes => setSaves(jsonRes)
        );
       
    })

    function add(){
        saves.map(save => {
            return savingsAmount = savingsAmount +  save.title
        })
    }

    add();

    const [input,setInput] = useState({
        title: ''
    })

    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInput =>{
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const newSave = {
            title: input.title
        }

        axios.post('http://localhost:3005/create', newSave)
    }

    return <center><div className='container'>
        <h1 style={{color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"}}>Savings page</h1>
    <div>
            <h2 style={{fontSize: "20px",fontFamily: "Roboto",color: "blue"}}>Amount in savings</h2>
            <h4 style={{fontSize: "20px",fontFamily: "Roboto",color: "red"}}>₹{savingsAmount}</h4>
            
            <br/>
        </div>
        <form>
            <div className='form-group'>
                <input onChange={handleChange} name="title" value={input.title} autocomplete="off" className='form-control' placeholder="Type here"></input>
            </div>
            <br/>
            <div className='form-group'>
                <button variant="contained" onClick={handleClick} /*className="btn btn-lg btn-info"*/>Add amount</button>
            </div>
        </form>
        <br/>
        

           
    </div></center>
}

export default Save;