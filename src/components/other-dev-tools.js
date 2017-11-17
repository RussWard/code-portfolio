import React from 'react'
import Modal from 'react-modal'
import Gist from './gist'
import git_workflow from '../assets/git_workflow.png'
import { LinkItem } from './linkItem-styles'
import { Row, Col_2, Col_3, Col_4, Col_gold } from './grid-styles'

const modalStyles = {
  overlay: {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.5)'
  },
  content : {
    position                   : 'absolute',
    top                        : '100px',
    left                       : '150px',
    right                      : '150px',
    bottom                     : '100px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
}

class OtherDevTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jest: <script src="https://gist.github.com/RussWard/0a70b14c9567aea3fa0ac1fe08ae7a9c"></script>,
      mocha: <script src="https://gist.github.com/RussWard/42d8e343dae385b08ff2ba51916848cf"></script>,
      user_stories: <script src="https://gist.github.com/RussWard/a3cbd23e5abd7585c6a827e42bd18c95"></script>,
      git: <img src={git_workflow} alt="git workflow image"/>,
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
          <Col_3><p style={{float: 'right'}}>Other Dev Tools:</p> </Col_3>
          <Col_gold>
            <ul>
              <LinkItem onClick={() => this.handleClickImage(this.state.git)}>Git Workflow</LinkItem>
              <LinkItem onClick={() => this.handleClickGist(this.state.jest)}>Unit Tests (w/Jest)</LinkItem>
              <LinkItem onClick={() => this.handleClickGist(this.state.mocha)}>Unit Tests (w/Mocha)</LinkItem>
              <LinkItem onClick={() => this.handleClickGist(this.state.user_stories)}>App Planning (user stories)</LinkItem>
            </ul>
          </Col_gold>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={modalStyles}>
            <button onClick={this.closeModal}>Close</button>
            {this.state.currentSnippet}
            <button onClick={this.closeModal}>Close</button>
          </Modal>   
        </Row>
      </div>
    )
  }
}

export default OtherDevTools;