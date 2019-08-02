import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import uniqid from 'uniqid';
import { withTranslation } from 'react-i18next';

import Developer from './Developer';

class OurTeam extends Component {
  render() {
    const { t } = this.props;
    const team = t('crew.team');
    const developers = t('crew.developer', { returnObjects: true });

    return (
      <section className="developers-team">
        <h2>{ team }</h2>
        <Row>
          {developers.map(item => (
            <Developer
              key={uniqid()}
              name={item.name}
              photo={item.photo}
              contribution={item.contribution}
            />
          ))}
        </Row>
      </section>
    );
  }
}

export default withTranslation()(OurTeam);
