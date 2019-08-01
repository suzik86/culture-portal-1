import React, { Component } from 'react';
import uniqid from 'uniqid';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import ArchitectShortArticle from './ArchitectShortArticle';
import SearchWidget from './SearchWidget';
// import NotFoundMessage from './NotFoundMessage';

class ArchitectsList extends Component {
  // state = {
  //   searchString: '',
  // }

  render() {
    const { data } = this.props;
    const { inputPlaceholder } = data.translation.site;
    return (
      <Container>
        <SearchWidget placeholder={inputPlaceholder} onChange={this.inputTextHandler} />
        {data.translation.author
          .map(item => <ArchitectShortArticle key={uniqid()} architect={item} />)}
      </Container>
    );
  }
}

export default ArchitectsList;
