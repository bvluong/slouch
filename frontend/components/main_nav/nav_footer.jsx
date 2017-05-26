import React from 'react';


class NavChannel extends React.Component {

  render() {
    return (
      <div className="nav-bottom" >
        <button type='button'>Features</button>
        <div className="nav-footer">
          <a href="https://github.com/bvluong" target="_blank">
            <i className="fa fa-github" id="fa-contact" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/bryant-luong/" target="_blank">
            <i className="fa fa-linkedin" id="fa-contact" aria-hidden="true"></i>
          </a>
          <a href="mailto:bryantvinluong@gmail.com?Subject=Hello" target="_blank">
            <i className="fa fa-envelope-o" id="fa-contact" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default NavChannel;
