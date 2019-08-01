import React, { Component } from 'react';

class AboutThePortal extends Component {
  render() {
    const { site } = this.props;
    const title = site.aboutPortal;
    const description = site.aboutPortalArticle;
    return (
      <section>
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
    );
  }
}

export default AboutThePortal;
