import React from 'react'
import styled from 'styled-components'

export const Row = styled.div`
  margin-top: 5px;
  width: 100%;
  display: block;
  overflow: auto;
  &:after {
    clear: both;
  }
`

export const Col_1 = styled.div`
  padding: 0 2% 0 2%;
  width: 100%;
  display: inline-block;
  float: left;
`

export const Col_2 = styled.div`
  padding: 0 2% 0 2%;
  width: 50%;
  display: inline-block;
  float: left;
`

export const Col_3 = styled.div`
  padding: 0 2% 0 2%;
  width: 33.3%;
  display: inline-block;
  float: left;
`

export const Col_4 = styled.div`
  padding: 0 2% 0 2%;
  width: 25%;
  display: inline-block;
  float: left;
`

export const Col_gold = styled.div`
padding: 0 2% 0 2%;
width: 61.803%;
display: block;
float: left;
`