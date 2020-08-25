import React, { Fragment } from 'react'
import FA from 'react-fontawesome'

const Social = () => {
    return (
        <Fragment>
            <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/gallya_official'><FA name='instagram' style={{ color: 'white' }} size='2x' /></a>
            <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/gallyaofficial'><FA name='facebook-square' style={{ color: 'white' }} size='2x' /></a>
            <a target='_blank' rel="noopener noreferrer" href='https://soundcloud.com/gallya'><FA name='soundcloud' style={{ color: 'white' }} size='2x' /></a>
            <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/gallya_official'><FA name='twitter' style={{ color: 'white' }} size='2x' /></a>
        </Fragment>
    )
}

export default Social