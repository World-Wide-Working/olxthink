import mockData from './mocks/data.json';

import { Data, Advertisement, User } from '../types';

export default class Service {
  data: Data;

  constructor() {
    this.data = mockData;
  }

  getAIData(image: string): Advertisement {
    const idx = Math.floor(Math.random() * this.data.advertisement.length);
    return { ...this.data.advertisement[idx], image };
  }

  getUser(): User {
    return this.data.user;
  }
}
