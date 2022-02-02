import React from 'react';
//import { Link } from 'react-router-dom';
import {Grid} from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <nav class="navbar navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><h2>DIO SHOPPING</h2></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/contato">Contato</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Cart />   

            
        </Grid>
    )
}

export default Header;