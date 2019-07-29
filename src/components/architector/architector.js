import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import PhotoArchitector from './componentParts/PhotoArchitector';
import NameArchitector from './componentParts/NameArchitector';
import YearsLifeArchitector from './componentParts/YearsLifeArchitector';
import LocationArchitector from './componentParts/LocationArchitector';
import BiographyArchitector from './componentParts/BiographyArchitecto';
import TimeLineArchitector from './componentParts/TimeLineArchitector';
import WorkArchitector from './componentParts/WorkArchitector';
// import NameArchitector from './componentParts/nameArchitector';
// import NameArchitector from './componentParts/nameArchitector';

class Architector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.photo || `https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg`,
      name: this.props.name || `Иванов Иван Иванович`,
      date: {
        years: `Годы жизни: `,
        life: this.props.life || `14 января 1918 - 23 сентября 1997`
      },
      location: {
        place: `Место рождения: `,
        placeInfo: this.props.place || `г.Алатырь, Симбирская губерния (ныне Чувашия)`
      },
      biography: {
        title: `Биография`,
        description: this.props.description || `советский архитектор и педагог, работавший в конце 1940-х — начале 1950-х годов в Литве; заслуженный архитектор Беларуси (1980), член-корреспондент Белорусской академии архитектуры.`
      },
      timeLine: {
        detailedBiographyDate: ['14.01.1918', '1940', '1946 - 1958', '1958', '1960', '1964', '1980', '23.09.1997'],
        detailedBiographyText: ['г.Алатырь, Симбирская губерния (ныне Чувашия)', 'Закончил архитектурный факультет Ленинградского института инженеров коммунального строительства по специальности «архитектор-проектировщик жилых и общественных зданий»', 'Работал в Вильнюсе районным архитектором, затем творческим руководителем в проектных организациях.',
          'Переехал в Минск', 'Работал в институте «Белгоспроект»', 'Преподавал в Белорусском политехническом институте (ныне БНТУ)', 'Получил ученую степень Профессора', 'Умер в городе Минск']
      },
      work: {
        workTitle: `Работы`,
        workSubtitle: `Проекты и постройки`,
        workInfo: {
          info0: `1930 - Автор проекта планировки и застройки Астрахани.`,
          info1: `1945-1947 - Административное здание — КГБ Беларуси`,
          info2: `1950 - Здание Госбанка БССР.`,
          info3: `Жилые дома и мост через р. Свислочь.`,
          info4: `1946-1954 - Спортивный комплекс «Динамо».`,
        }
      },
      gallery: {
        photo1: 'https://www.zastavki.com/pictures/1366x768/2008/Widescreen__004635_.jpg',
        photo2: 'http://wp.widewallpapers.ru/2k/abstract-color-lines/1600x900/color-lines-abstract-wide-wallpaper-1600x900-001.jpg',
        photo3: 'https://www.komandirovka.ru/upload/iblock/e28/e28a9368623cb4f5302c08112c3b4d5f.jpg'
      }
    };
  }

  render() {

    return (
      <Container className='container'>
        <Row className='architect-description row'>
          <Col className='col-md text-center'>
            <PhotoArchitector url={this.state.photo} />
            <NameArchitector name={this.state.name} />
            <YearsLifeArchitector date={this.state.date} />
            <LocationArchitector location={this.state.location} />
            <BiographyArchitector biography={this.state.biography} />
            <TimeLineArchitector timeLine={this.state.timeLine} />
            <WorkArchitector work={this.state.work}/>
            <CarouselArchitector gallery={this.state.gallery}/>
          </Col>
        </Row>
      </Container>

    )
  }
}

export default Architector;
