import React from 'react'
import LoadingSvg from '../../assets/loading.svg'
import { LoadingContainer } from './styles';

export const Loading = () => {
  return (
    <LoadingContainer>
      <img src={LoadingSvg} alt="App_Loading"/>
    </LoadingContainer>
  )
}