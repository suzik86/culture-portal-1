import React, { Component } from 'react';

class AboutThePortal extends Component {
  render() {
    const { data } = this.props;
    const title = data.translation.site.aboutPortal;
    const description = data.translation.site.aboutPortalArticle;
    return (
      <section>
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
    );
  }
}

export default AboutThePortal;
