import React, { Fragment } from 'react'
import Header from '../../header'
import Footer from '../../footer'

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <div>{props.children}</div>
            <Footer />
        </Fragment>
    )
}

export default Layout