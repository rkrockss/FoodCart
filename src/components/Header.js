import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {  useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/actions/action';
import { BsFillPersonXFill ,BsFillPersonCheckFill } from "react-icons/bs";
import { FaShopify} from "react-icons/fa";
import { Box } from '@mui/system';
import { UserAuth } from '../context/AuthContext';





const Header = () => {




   const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();
  
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      if (user != null) {
        navigate('/');
      }
    }, [user]); 



    const [price,setPrice] = useState(0);
    // console.log(price);
    

        const getdata = useSelector((state)=> state.cartreducer.carts);
        // console.log(getdata);

      

        const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id)=>{
        dispatch(DLT(id))
    }


    const total = ()=>{
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])




    return (
        <>
            <Navbar id="head" style={{ height: "60px",backgroundColor:"var(--primary)" }}>
                <Container>
              
                    <Nav   className="me-auto">
                        <strong>   <NavLink to="/" className=" text-decoration-none text-light">
                         <FaShopify size={28}/>
                            
                            </NavLink></strong>
                     
                    </Nav>
                    <div  >

                    { user == null ?   <BsFillPersonXFill style={{marginRight:"1rem",color:"white",cursor:"pointer"}} size={27}
                        onClick={handleGoogleSignIn}  
                    
                    /> : <BsFillPersonCheckFill style={{marginRight:"1rem",color:"white",cursor:"pointer"}} size={27}/>

                    }
                  

                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>
                  


                    </div>
                   

                </Container>


                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ? 
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                              
                                <tbody>
                                    {
                                        getdata.map((e)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>   
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>

                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                          
                                </tbody>
                            </Table>

                            <Box sx={{display:"flex",justifyContent:"space-between",   alignItems:"center"   }}>

                                <p style={{fontWeight:"bold"}} className='text-center'>Total :₹ {price}</p>

                                <p style={{color:"white",backgroundColor:"var(--primary)",padding:"3px 15px",borderRadius:"5%",cursor:"pointer"}}>Proceed To Pay</p>

                            </Box>

                        </div>:
                        
                     <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>

                        <i className='fas fa-close smallclose'

                         onClick={handleClose}

                         style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                         
                         <p style={{fontSize:22}}>Your carts is empty</p>

                     </div>

                    }

                </Menu>

            </Navbar>

        </>

    )

}

export default Header