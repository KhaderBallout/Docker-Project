import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../movie.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://www.netflix.com">
                <img src={logo} width="50" height="50" alt="movieIcon" />
            </Wrapper>
        )
    }
}

export default Logo