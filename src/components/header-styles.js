import React from 'react'
import styled from 'styled-components'

export const Name = styled.div`
  float: left;
  margin: 10px 0 0 5px;
  font-size: 120%;
  text-decoration: underline;
`

export const Nav = styled.span`
  float: right;
  margin-right: 5px;
  margin-top: 5px;
`

export const NavLink = styled.a`
  display: inline-block;
  color: inherit;
  margin-right: 5px;
  text-decoration: none;
  &:hover,
  &:active {
    text-decoration: underline;
    cursor: pointer;
  }
  &:visited,
  &:link {
    color: #555;
    text-decoration: none;
  }
`

export const Logo = styled.img`
  margin-bottom: 0px;
  overflow: auto;
`