import React from 'react'

import LoadingIcon from '../../assets/images/loading.svg'

import { Spinner } from './styles'

const Loading = () => {
    return (
        <Spinner src={LoadingIcon} alt="Carregando"></Spinner>
    )
}

export default Loading
