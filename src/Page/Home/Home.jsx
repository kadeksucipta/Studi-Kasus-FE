import React, { useEffect, useState } from "react";
import Pagination from 'react-bootstrap/Pagination';
import "./styleHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import pizza from "./pizza.jpg"

const Home = () => {

    const [Homeapi, setHomeapi] = useState([])

    useEffect(() => {
        fetchHomeapi()
    }, [])

    const fetchHomeapi = (FormData) => {
        fetch(`http://localhost:3002/api/products`)
        .then(res => res.json())
        .then(data => {
            setHomeapi(data)
            console.log(data)
        })
    };

    // const data = 
    // [
    //     {
    //         name: "Pizza",
    //         price: 20000,
    //         category: "Makanan",
    //         tags: "Gurih",
    //         image_url: "ed5688c45b5b72ab0c35463ecd4f1c1c.jpg"
    //     },
    //     {
    //         name: "Roti",
    //         price: 5000,
    //         category: "Makanan",
    //         tags: "Manis"
    //     },
    // ]

    return(
        <React.Fragment>
            <nav className="navbar-home">
                <form className="form-input">
                    <h4 className="mart">MyMART</h4>
                    <Dropdown className="dropdown">
                        <Dropdown.Toggle variant="light" className="dropdown-toggle" id="dropdown-basic">Category</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Menu Utama</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Makanan</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Minuman</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <input className="search-product" type="text" placeholder="Cari..."/>
                    <button className="button-search" type="button" value="Cari"><FontAwesomeIcon icon={faSearch}/></button>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <FontAwesomeIcon icon={faUser}/>
                </form>
            </nav>

            <h5 className="tags" >Tags :</h5>  

            {Homeapi.map(item => (
             <button className="button-tags"><FontAwesomeIcon icon={faTag}/>{item.tags}</button>
            ))}
            
            
            {/*---------------------------------------------------------------*/}

            
                <div style={{display: "flex"}} className="card">
                {Homeapi.map(item => (
                <Card  className="card-item">
                <Card.Body className="menu-item">
                    <Card.Img className="img-item" variant="top" src={item.image_url}/>
                    <Card.Title className="title-item">{item.name}</Card.Title>
                    <Card.Text className="text-item">{item.price}</Card.Text>
                    <Button className="tag-item"><FontAwesomeIcon icon={faTag}/>{item.tags}</Button>
                    <Button className="btn-item"><FontAwesomeIcon icon={faCartPlus}/></Button>
                </Card.Body>
                </Card>
                ))}
                </div>

            {/*---------------------------------------------------------------*/}

            <Pagination className="pagination">
                <Pagination.First className="page1" />
                <Pagination.Prev className="page2" />
                <Pagination.Item className="page3">{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item className="page4">{10}</Pagination.Item>
                <Pagination.Item className="page5">{11}</Pagination.Item>
                <Pagination.Item className="page6" active>{12}</Pagination.Item>
                <Pagination.Item className="page7">{13}</Pagination.Item>
                <Pagination.Item className="page8" disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis className="page9" />
                <Pagination.Item className="page10">{20}</Pagination.Item>
                <Pagination.Next className="page11"/>
                <Pagination.Last className="page12"/>
            </Pagination>

        </React.Fragment>
    )
}

export default Home