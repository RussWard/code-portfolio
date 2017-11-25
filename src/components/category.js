import React from 'react'
import Modal from 'react-modal'
import Gist from './gist'
import Image from '../assets/Image.png'
import { LinkItem } from './linkItem-styles'
import { Row, Col_3, Col_gold } from './grid-styles'

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
    top                        : '15%',
    left                       : '10%',
    right                      : '10%',
    bottom                     : '10%',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
}

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSnippet: <div></div>,
      modalIsOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.nextGistCallback = this.nextGistCallback.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  nextGistCallback(index) {
    return 'embeded_gist_callback_' + index;
  }

  handleClick(example) {
    let codeSamples = example.codeSamples.map((codeSample, index) => {
      if (codeSample.type === 'image') {
        return (
          <div key={example.title + index}>
            <div style={{textAlign: 'center', fontWeight: 'bold'}}>{codeSample.description}</div>
            <div>{codeSample.code}</div>
          </div>
        )
      }
      if (codeSample.type === 'gist') {
        let callback = this.nextGistCallback(index)
        return (
          <div key={example.title + index}>
            <div style={{textAlign: 'center', fontWeight: 'bold'}}>{codeSample.description}</div>
            <div style={{textAlign: 'center', fontSize: '75%'}}><a href={codeSample.link} target="blank">Link to this code in it's repo</a></div>
            <Gist
              key={example.title + index}
              gist={codeSample.code}
              gistCallback={callback}
              addStylesheet={this.props.addStylesheet}
            />
          </div>
        ) 
      }
    });
    this.setState({ currentSnippet: codeSamples });
    this.openModal()
  }

  render() {
    return (
      <div> 
        <Row>
          <Col_3><p style={{float: 'right', textAlign: 'right'}}>{this.props.category}</p> </Col_3>
          <Col_gold>
            <ul>
              {this.props.examples.map((example, i) => {
                return <LinkItem key={this.props.category +  '_' + i} onClick={() => this.handleClick(example)}>{example.title}</LinkItem>
              })}
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

export default Category;