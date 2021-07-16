import React, { Component } from 'react';

class CatList extends Component {
  render() {
    const { catPics } = this.props
    const renderCats = catPics.map(catPic => <img key={catPic.id} src={catPic.url} />);
    
    return (
      <div>
        { renderCats }
      </div>);
  }
}

export default CatList;
