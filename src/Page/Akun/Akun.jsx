import React from "react";
import "./styleAkun.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';

const Akun = () => {

   return(
    <React.Fragment>
    <nav className="navbar-akun">
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

    {/*-------------------------------------------------*/}

    {/* <div className="container-akun">
        <div className="box-akun">
            <div className="nav-akun">
                <br /> 
                <span className="span-akun">Detail Account</span>
            </div>
            <Table className="table-akun" striped bordered hover>
            <tbody className="table-menu-akun">
                <tr>
                    <td>Profil</td>
                </tr>
                <tr>
                    <td>Pemesanan</td>
                </tr>
                <tr>
                    <td>Alamat</td>
                </tr>
                <tr>
                    <td>Logout</td>
                </tr>
            </tbody>
            <tbody className="table-detail">
                <tr>
                    <td>Profil</td>
                </tr>
                <tr>
                    <td>Pemesanan</td>
                </tr>
                <tr>
                    <td>Alamat</td>
                </tr>
                <tr>
                    <td>Logout</td>
                </tr>
            </tbody>
            </Table>
        </div>
    </div> */}

    {/*-------------------------------------------------*/}

     <div className="container-akun">
        <div className="box-akun">
            <div className="nav-akun">
                <br /> 
                <span className="span-akun">Detail Account</span>
            </div>

            <div className="button-detail">
                <button className="btn-profil"><FontAwesomeIcon icon={faUserCircle}/>&nbsp;Profil</button>
                <button className="btn-pesan"><FontAwesomeIcon icon={faList}/>&nbsp;Pemesanan</button>
                <button className="btn-alamat"><FontAwesomeIcon icon={faLocationArrow}/>&nbsp;Alamat</button>
                <button className="btn-logout"><FontAwesomeIcon icon={faSignOut}/>&nbsp;Logout</button>
            </div>
           
        </div>
    </div>

    {/*-------------------------------------------------*/}

    

    
    </React.Fragment>
   )
}

export default Akun;