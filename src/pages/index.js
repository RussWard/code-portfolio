import React from "react"
import Link from 'gatsby-link'
import { PageStyles } from '../components/page-styles'
import Header from '../components/header'
import Headline from '../components/headline'
import CategoriesContainer from '../components/categories-container'

export default () => 
  <div>
    <PageStyles>
      <Header/> 
      <Headline/>
      <CategoriesContainer/>
    </PageStyles>
  </div>
