import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: 'black'}}>    
        <a className="navbar-brand" href="www.vnu.vn">Fedu</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul className="navbar-nav mt-2 mt-lg-0 ">
            <li className="nav-item active">
              <a className="nav-link" href="www.vnu.vn">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.vnu.vn">Xem danh sách NOTE</a>
            </li>
          </ul>
        </div>
      </nav>
        );
    }
}

export default Nav;