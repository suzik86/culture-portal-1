import React, { Component } from 'react';

import MainPage from './mainPage/MainPage';
import Header from './Header';
import Footer from './Footer';
import Architector from './architector/Architector';

import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          photo: 'https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg',
          name: 'Иванов Иван Иванович',
          descriptionShort: 'Виктор Иванович Карако родился 29 июля 1948 в Гродно, Белорусская ССР. В 1966—1972 гг. учился на кафедре архитектуры Белорусского политехнического института. С 1975 г. член Белорусского союза архитекторов. В 1972—1976 и 1982—1998 гг. работал архитектором, старшим архитектором, главным архитектор проектов, руководителем мастерской в «БЕЛГОСПРОЕКТе». В 1976—1982 гг. руководитель группы архитекторов, главный архитектор проектов, руководитель мастерской БелНИИПградостроительства. В 1982 г. стал лауреатом премии Ленинского Комсомола Белоруссии в области архитектуры за проект дворца молодёжи в г. Новополоцке. С 1998 г. возглавляет собственную творческую мастерскую. С 2003 г. преподает проектирование на архитектурном факультете Беларуского национального технического университета. С 2005 г. является членом правления Белорусского союза архитекторов, председателем городской организации БСА и членом Городского Монументально-декоративного Совета. ',
        }
      ],
      team: 'Наша команда',
    };
  }

  render() {
    const { data, team } = this.state;
    return (
      <div>
        <Header />
        <MainPage team={team} data={data} />
        <Architector />
        <Footer />
      </div>
    );
  }
}

export default App;
