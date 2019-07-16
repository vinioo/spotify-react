import React from 'react'

import { Container, Search, User} from './styles'

const Header = () => {
    return (
        <Container>
            <Search>
                <input type="text" name="" id="" placeholder="Search"/>
            </Search>
            <User>
                <img src="https://pixel.nymag.com/imgs/daily/vulture/2017/08/08/08-stephen-lang-avatar.w330.h330.jpg" alt="" srcset=""/>
                Vinicius Oliveira
            </User>
        </Container>
    )
}

export default Header
