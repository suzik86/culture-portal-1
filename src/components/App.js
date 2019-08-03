import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { createClient } from 'contentful';
import Loader from 'react-loader-spinner';
import i18n from 'i18next';
import i18nInit from '../i18n/i18n';

import '../../node_modules/react-modal-video/css/modal-video.min.css';
import '../styles/App.css';

import Architector from './architector/Architector';
import MainPage from './mainPage/MainPage';
import ArchitectsList from './architectsList/ArchitectsList';
import Header from './Header';
import Footer from './Footer';

const client = createClient({
  space: '6xi1ban3eonx',
  accessToken: '5PCNrHtiMF2-N9s9MKg-S7G4UoyDGIZE-gODtjSdECU',
});

class App extends Component {
  constructor(props) {
    super(props);

    this.selectContentHandler = this.selectContentHandler.bind(this);
    this.selectPersonHandler = this.selectPersonHandler.bind(this);

    this.state = {
      targetArch: 0,
      contentType: 'main',
      loading: true,
    };
  }

  componentDidMount() {
    client.getEntry('EFoacOPsP62cLFTzIr9uG').then((response) => {
      const { en, ru, by } = response.fields;
      i18nInit(en, ru, by);
      this.setState({
        loading: false,
      });
    });
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
    const { t } = this.props;
    const architects = t('architects', { returnObjects: true });
    const site = t('site', { returnObjects: true });
    const listLength = architects.length;
    const { targetArch, contentType, loading } = this.state;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    let page;

    if (loading) {
      page = (
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
        />
      );
    } else {
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
            <Architector data={architects} targetArch={targetArch} site={site} />
          );
          break;
        }
        default: {
          content = (
            <MainPage
              architects={architects}
              listLength={listLength}
              selectPersonHandler={this.selectPersonHandler}
            />
          );
        }
      }
      page = (
        <>
          <Header
            changeLanguageHandler={lang => changeLanguage(lang)}
            selectContentHandler={this.selectContentHandler}
          />
          {content}
          <Footer />
        </>
      );
    }
    return (
      <>
        {page}
      </>
    );
  }
}

export default withTranslation()(App);
