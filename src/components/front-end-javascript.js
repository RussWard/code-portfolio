import React from 'react'
import Modal from 'react-modal'
import Gist from './gist'
import { LinkItem } from './linkItem-styles'
import { Row, Col_2, Col_3, Col_4, Col_gold } from './grid-styles'

class FronEndJavascript extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      react_component: <script src="https://gist.github.com/RussWard/f3075895d31ee201954a844db62bb21e"></script>,
      react_container: <script src="https://gist.github.com/RussWard/55042a2ec2a1327e827bedf6f3b002d8"></script>,
      redux: <script src="https://gist.github.com/RussWard/4333f92ccbb4028ec0388390a7a19efe"></script>,
      modalIsOpen: false,
      gistCallbackId: 0,
      stylesheetAdded: false,
      currentGist: <div></div>
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
      currentGist: <Gist
                    gist={gist}
                    nextGistCallback={this.nextGistCallback}
                    addStylesheet={this.addStylesheet}
                  />  
    });
  }

  handleClick(example) {
    this.showGist(example);
    this.openModal();
  }

  render() {
    return (
      <div> 
        <Row>
          <Col_3><p style={{float: 'right'}}>Front End:</p> </Col_3>
          <Col_gold>
            <ul>
              <LinkItem onClick={() => this.handleClick(this.state.react_component)}>React Components</LinkItem>
              <LinkItem onClick={() => this.handleClick(this.state.react_container)}>React Containers</LinkItem>
              <LinkItem onClick={() => this.handleClick(this.state.redux)}>Redux</LinkItem>
            </ul>
          </Col_gold>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}>
            <button onClick={this.closeModal}>Close</button>
            {this.state.currentGist}
            <button onClick={this.closeModal}>Close</button>
          </Modal>   
        </Row>
      </div>
    )
  }
}

export default FronEndJavascript;
