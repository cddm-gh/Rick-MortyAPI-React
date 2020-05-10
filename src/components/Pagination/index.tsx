import React from 'react'
import { PaginationBox, Button } from './styles';

export const Pagination = ({ prevPage, nextPage }) => {
  return (
    <PaginationBox>
      {prevPage && <Button onClick={prevPage}>Previous</Button>}
      {nextPage && <Button onClick={nextPage}>Next</Button>}
    </PaginationBox>
  )
}