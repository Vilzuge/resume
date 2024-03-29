import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer className="footer">
        <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                  {networks}
              </ul>
              <ul className="copyright">
                  <li>Based on Tim Baker's react-resume-template</li>
              </ul>
            </div>
        </div>
      </footer>
    );
  }
}

export default Footer;