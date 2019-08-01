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
      <section>
        <h3>{ team }</h3>
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
