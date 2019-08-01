import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import Developer from './Developer';

class OurTeam extends Component {
  render() {
    const { t } = this.props;
    const team = t('crew.team');

    return (
      <section>
        <h3>{ team }</h3>
        <Developer />
      </section>
    );
  }
}

export default withTranslation()(OurTeam);
