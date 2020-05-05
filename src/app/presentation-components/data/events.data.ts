import { Event } from '../models/event.model';

export const EVENTS_DATA: Event[] = [
  {
    id: '1',
    title: 'Dinjo en Cajamarca',
    date: new Date(2020, 4, 20),
    location: 'Cajamarca',
    portraitUrl:
      'https://www.clikisalud.net/wp-content/uploads/2016/04/concierto-proteger-oidos.jpg',
    price: 100.0,
  },
  {
    id: '2',
    title: 'Carlos en Lambayeque',
    date: new Date(2020, 5, 20),
    location: 'Pimentel, Lambayeque',
    portraitUrl:
      'https://elcomercio.pe/resizer/1UIsB6SY0LoSvWwhKP1mW77S93w=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/JUTY3PKYF5DQPLDSGQHVY5OMT4.jpg',
    price: 100.0,
  },
  {
    id: '3',
    title: 'Ricardo en Cuzco',
    date: new Date(2020, 7, 1),
    location: 'Cuzco',
    portraitUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cusco_%2835012987295%29.jpg/300px-Cusco_%2835012987295%29.jpg',
    price: 100.0,
  },
  {
    id: '4',
    title: 'Bruno en Piura',
    date: new Date(2020, 8, 5),
    location: 'Piura',
    portraitUrl:
      'https://elcomercio.pe/resizer/uzCKv5vbd5gNJ9eGmZgvWE5I6Fg=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/EKJZHE5RLVD6XDMAI5OY7YEIXE.jpg',
    price: 100.0,
  },
];
