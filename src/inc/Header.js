import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './Header.css';
import HeaderTop from './HeaderTop'

function Header() {
    return (
        <div className="App__Header">
            <React.Fragment>
                <CssBaseline />
                <Container >
                    <HeaderTop />
                </Container>
            </React.Fragment>
        </div>
    )
}

export default Header
