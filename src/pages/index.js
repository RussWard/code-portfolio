import React from "react"
import Link from 'gatsby-link'
import Container from '../components/container'
import { PageStyles } from '../components/page-styles'
import Header from '../components/header'
import Headline from '../components/headline'
import FrontEndJavascript from '../components/front-end-javascript'
import ServerSideJavascript from '../components/server-side-javascript'
import OtherDevTools from '../components/other-dev-tools'

export default () => 
  <div>
    <PageStyles>
      <Header/> 
      <Headline/>
      <FrontEndJavascript/>
      <ServerSideJavascript/>
      <OtherDevTools/>
    </PageStyles>
  </div>
