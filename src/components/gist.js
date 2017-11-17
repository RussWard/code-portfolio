import React from 'react'

class Gist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      src: ''
    }
  }

  componentDidMount() {
    let gistCallback = this.props.nextGistCallback();
    window[gistCallback] = function(gist) {
      this.setState({
        loading: false,
        src: gist.div
      });
      this.props.addStylesheet(gist.stylesheet);
    }.bind(this); 
    let url = this.props.gist.props.src + ".json?callback=" + gistCallback;
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);
  }

  render() {
    if (this.state.loading) {
      return  <div>Loading...</div>;    
    } else {
      return <div dangerouslySetInnerHTML={{__html: this.state.src}} />
    }   
  }
}

export default Gist;
