import React from "react";
import "./styleHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import { faTags } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pizza from "./pizza.jpg"
import roti from "./roti.jpeg"
import geprek from "./geprek.jpg"
import burger from "./burger.png"
import boba from "./boba.jpg"

const Login = () => {

    return(
        <React.Fragment>
            {/* <input className="search" type="text" />
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i><FontAwesomeIcon icon={faBars}/></i>
                </label>
                
                <label className="logo">MyMart</label>
                <ul>
                    <li><FontAwesomeIcon icon={faCartShopping}/></li>
                    <li><FontAwesomeIcon icon={faUser}/></li>
                    <li><a className="active" href="">Keranjang</a></li>
                </ul>
            </nav> */}

            <div className="navbar">
                <input className="search" type="text" placeholder="Cari barang..."/>
                <h4>MyMart</h4>
                <li><FontAwesomeIcon icon={faCartShopping}/></li>
                
            </div>

            {/*---------------------------------------------------------------*/}

            <Card className="menu">
            <Card.Body className="menu-pizza">
                <Card.Title className="title-pizza">Pizza</Card.Title>
                <Card.Img className="img-pizza" variant="top" src={pizza} />
                <Card.Text className="text-pizza">Menu Utama</Card.Text>
                <Button className="tag-pizza">Roti</Button>
                <Button className="btn-pizza"><FontAwesomeIcon icon={faCartPlus}/></Button>
            </Card.Body>

            <Card.Body className="menu-roti">
                <Card.Title className="title-roti">Roti</Card.Title>
                <Card.Img className="img-roti" variant="top" src={roti}/>
                <Card.Text className="text-roti">Menu Utama</Card.Text>
                <Button className="tag-roti">Roti</Button>
                <Button className="btn-roti"><FontAwesomeIcon icon={faCartPlus}/></Button>
            </Card.Body>

            <Card.Body className="menu-ayam">
                <Card.Title className="title-ayam">Ayam Geprek</Card.Title>
                <Card.Img className="img-ayam" variant="top" src={geprek}/>
                <Card.Text className="text-ayam">Menu Utama</Card.Text>
                <Button className="tag-ayam">Pedas</Button>
                <Button className="btn-ayam"><FontAwesomeIcon icon={faCartPlus}/></Button>
            </Card.Body>

            <Card.Body className="menu-burger">
                <Card.Title className="title-burger">Burger Crispy</Card.Title>
                <Card.Img className="img-burger" variant="top" src={burger}/>
                <Card.Text className="text-burger">Menu Utama</Card.Text>
                <Button className="tag-burger">Asin</Button>
                <Button className="btn-burger"><FontAwesomeIcon icon={faCartPlus}/></Button>
            </Card.Body>
            </Card>

            {/*---------------------------------------------------------------*/}

        </React.Fragment>
    )
}

export default Login