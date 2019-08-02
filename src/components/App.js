import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import '../../node_modules/react-modal-video/css/modal-video.min.css';

import '../styles/App.css';

import Architector from './architector/Architector';
import MainPage from './mainPage/MainPage';
import ArchitectsList from './architectsList/ArchitectsList';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.selectContentHandler = this.selectContentHandler.bind(this);
    this.selectPersonHandler = this.selectPersonHandler.bind(this);

    this.state = {
      targetArch: 0,
      contentType: 'main',
    };
  }

  selectContentHandler(contentType) {
    this.setState({
      contentType,
    });
  }

  selectPersonHandler(contentType, targetArch) {
    this.setState({
      targetArch,
      contentType,
    });
  }

  render() {
    const { t, i18n } = this.props;
    const architects = t('architects', { returnObjects: true });
    const site = t('site', { returnObjects: true });
    const listLength = architects.length;
    const { targetArch, contentType } = this.state;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    let content;
    switch (contentType) {
      case 'list': {
        content = (
          <ArchitectsList selectPersonHandler={this.selectPersonHandler} />
        );
        break;
      }
      case 'person': {
        content = (
          <Architector data={architects[targetArch]} site={site} />
        );
        break;
      }
      default: {
        content = (
          <MainPage architects={architects} listLength={listLength} />
        );
      }
    }

    return (
      <div>
        <Header 
          changeLanguageHandler={(lang) => changeLanguage(lang)} 
          selectContentHandler={this.selectContentHandler}
        />
        {content}
        <Footer />
      </div>
    );
  }
}

export default withTranslation()(App);
