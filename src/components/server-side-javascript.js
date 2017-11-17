import React from 'react'
import Modal from 'react-modal'
import Gist from './gist'
import Image from '../assets/Image.png'
import { LinkItem } from './linkItem-styles'
import { Row, Col_2, Col_3, Col_4, Col_gold } from './grid-styles'

class ServerSideJavascript extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      express: <script src="https://gist.github.com/RussWard/aa3ec0aa648d8794d3ccf324c19acaf1"></script>,
      sql_schema: <script src="https://gist.github.com/RussWard/9cf11b4149a76c086750fb99659ae240"></script>,
      raw_sql: <script src="https://gist.github.com/RussWard/d92c2c79380624951378fa260ed879f7"></script>,
      knex_sql: <script src="https://gist.github.com/RussWard/79f71be1713dcf17b78eabaf1b07df5a"></script>,
      migrations: <script src="https://gist.github.com/RussWard/548e19c0dc3a3f45cbbd05f05978a1c9"></script>,
      file_structure: <img src={Image} alt="no showey"/>,
      gistCallbackId: 0,
      stylesheetAdded: false,
      currentSnippet: <div></div>
    }
    this.addStylesheet= this.addStylesheet.bind(this);
    this.nextGistCallback = this.nextGistCallback.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  addStylesheet(href) {
    if (!this.state.stylesheetAdded) {
      this.setState({ stylesheetAdded: true });
      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = href;

      document.head.appendChild(link);
    }
  }

  nextGistCallback() {
    return 'embeded_gist_callback_' + this.state.gistCallbackId;
  }

  showGist(gist) {
    this.setState({ 
      gistCallbackId: this.state.gistCallbackId + 1,
      currentSnippet: <Gist
                    gist={gist}
                    nextGistCallback={this.nextGistCallback}
                    addStylesheet={this.addStylesheet}
                  />  
    });
  }

  handleClickGist(example) {
    this.showGist(example);
    this.openModal();
  }

  handleClickImage(example) {
    this.setState({ currentSnippet: example });
    this.openModal();
  }

  render() {
    return (
      <div> 
        <Row>
          <Col_3><p style={{float: 'right'}}>Back End:</p> </Col_3>
          <Col_gold>
            <ul>
              <LinkItem onClick={() => this.handleClickGist(this.state.express)}>Express server</LinkItem>
              <LinkItem onClick={() => this.handleClickGist(this.state.sql_schema)}>SQL Schema</LinkItem>
              <LinkItem onClick={() => this.handleClickGist(this.state.raw_sql)}>SQL Queries (raw)</LinkItem>
              <LinkItem onClick={() => this.handleClickGist(this.state.knex_sql)}>SQL Queries (w/ Knex)</LinkItem>
              <LinkItem onClick={() => this.handleClickGist(this.state.migrations)}>Database Migrations</LinkItem>
            </ul>
          </Col_gold>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}>
            <button onClick={this.closeModal}>Close</button>
            {this.state.currentSnippet}
            <button onClick={this.closeModal}>Close</button>
          </Modal>   
        </Row>
      </div>
    )
  }
}

export default ServerSideJavascript;