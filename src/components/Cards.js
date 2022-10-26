import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import Box from '@mui/material/Box';

const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  // console.log(data);

  
  const [search,setsearch] = useState("");


  const dispatch = useDispatch();


  const send = (e)=>{
    //console.log(e);
    dispatch(ADD(e));
  }
 

  return (
    <div className='container mt-3'>

      <div className='search'>
        <input type="text" onChange={(e)=>setsearch(e.target.value)} placeholder='search here...'/>
      </div>
      <strong>  <h2 style={{ color:'var(--primary)',fontWeight:"bold", padding:"20px 0" }} className='text-center'>Order Your Delicious Food Here !</h2> </strong>
    

      <div className="cardDiv row d-flex justify-content-center align-items-center">
        
        {
     

          data.filter((element)=>{
           
            if(search ==="")
          {  return element }

          else if(element.rname.toLowerCase().includes(search.toLowerCase())){

            return element
          }
          

          }).map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem' , border:"none" }} className="mx-2 my-4 card_style">

                  <Card.Img variant="top" src={element.imgdata} style={{height:"18rem"}} className="mt-3 cardImg" />
                  <Card.Body>
                    <Box sx={{display: 'flex',justifyContent: 'space-between ', alignItems: 'center'} } className="my-2"  >
                    <Box>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ <strong>{element.price}</strong>
                    </Card.Text>
                    </Box>
                    <Card.Text style={{backgroundColor:"var(--primary)",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> 	
                   {element.rating}★
                    </Card.Text>

                    </Box>
                  
                    
                    <div className="button_div d-flex justify-content-center">
                    <button  
                      onClick={()=> send(element)}
                     className='p-1' style={{backgroundColor:"var(--primary)",width :"80%" ,borderRadius:"5px", border:"none",color:"var(--second)"}}>
                      
                      Add Item</button>
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards