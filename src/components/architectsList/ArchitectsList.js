import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import uniqid from 'uniqid';
import { withTranslation } from 'react-i18next';

import ArchitectShortArticle from './ArchitectShortArticle';
import SearchWidget from './SearchWidget';
import NotFound from './NotFound';

class ArchitectsList extends Component {
  static isArchitectMatches(architect, searchString) {
    const filter = searchString.toLowerCase();

    const nameMatches = architect.name.toLowerCase().indexOf(filter) !== -1;
    const birthPlaceMatches = architect.placeInfo.toLowerCase().indexOf(filter) !== -1;

    return nameMatches || birthPlaceMatches;
  }

  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };

    this.inputToState = this.inputToState.bind(this);
    this.filteredArchitects = this.filteredArchitects.bind(this);
  }

  inputToState(text) {
    this.setState({
      searchString: text,
    });
  }

  filteredArchitects(architects, notFound, selectPersonHandler) {
    const { searchString } = this.state;
    const searchResults = [];
    architects
      .forEach((item, i) => {
        if (ArchitectsList.isArchitectMatches(item, searchString)) {
          searchResults.push(
            <ArchitectShortArticle
              key={uniqid()}
              architect={item}
              index={i}
              selectPersonHandler={selectPersonHandler}
            />,
          );
        }
      });
    return searchResults.length > 0 ? searchResults : <NotFound notFound={notFound} />;
  }

  render() {
    const { t, selectPersonHandler } = this.props;
    const site = t('site', { returnObjects: true });
    const architects = t('architects', { returnObjects: true });

    const { notFound, inputPlaceholder } = site;

    const architectsToRender = this.filteredArchitects(architects, notFound, selectPersonHandler);
    return (
      <main className="main">
        <Container>
          <SearchWidget placeholder={inputPlaceholder} onChange={this.inputToState} />
          {architectsToRender}
        </Container>
      </main>
    );
  }
}

export default withTranslation()(ArchitectsList);
