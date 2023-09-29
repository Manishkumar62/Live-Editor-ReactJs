import styled from '@emotion/styled'
import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

const Container = styled(AppBar)`
    background:grey;
    height:9vh;
`

const Header = () => {
  return (
    <Container position='static'>
        <Toolbar>
            <img src="codepen.svg" alt="codepen" style={{width:40}}/>
        </Toolbar>
    </Container>
  )
}

export default Header