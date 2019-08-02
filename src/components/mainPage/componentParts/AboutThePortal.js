import React, { Component } from 'react';

class AboutThePortal extends Component {
  render() {
    const { site } = this.props;
    const title = site.aboutPortal;
    const description = site.aboutPortalArticle;
    return (
      <section className="about">
        <h2>{title}</h2>
        <p>{description}</p>
      </section>
    );
  }
}

export default AboutThePortal;
