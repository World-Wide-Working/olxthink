import { OlxSelectItem } from '../types';

import HouseIcon from '../images/icons/categories/house.svg';
import HouseAltIcon from '../images/icons/categories/house-alt.svg';
import CarIcon from '../images/icons/categories/car.svg';
import CarAltIcon from '../images/icons/categories/car-alt.svg';
import BedIcon from '../images/icons/categories/bed.svg';
import BedAltIcon from '../images/icons/categories/bed-alt.svg';
import PhonesIcon from '../images/icons/categories/phones.svg';
import PhonesAltIcon from '../images/icons/categories/phones-alt.svg';
import MusicIcon from '../images/icons/categories/music.svg';
import MusicAltIcon from '../images/icons/categories/music-alt.svg';
import SportIcon from '../images/icons/categories/sport.svg';
import SportcAltIcon from '../images/icons/categories/sport-alt.svg';
import ChildrenIcon from '../images/icons/categories/children.svg';
import ChildrenAltIcon from '../images/icons/categories/children-alt.svg';
import PetIcon from '../images/icons/categories/pet.svg';
import PetAltIcon from '../images/icons/categories/pet-alt.svg';
import BeautyIcon from '../images/icons/categories/beauty.svg';
import BeautyAltIcon from '../images/icons/categories/beauty-alt.svg';
import IndustryIcon from '../images/icons/categories/industry.svg';
import IndustryAltIcon from '../images/icons/categories/industry-alt.svg';
import OfficeIcon from '../images/icons/categories/office.svg';
import OfficeAltIcon from '../images/icons/categories/office-alt.svg';
import ServicesIcon from '../images/icons/categories/services.svg';
import ServicesAltIcon from '../images/icons/categories/services-alt.svg';
import PositionIcon from '../images/icons/categories/position.svg';
import PositionAltIcon from '../images/icons/categories/position-alt.svg';

export const categories: OlxSelectItem[] = [
  {
    name: 'Imóveis',
    value: 'imoveis',
    icon: HouseIcon,
    iconAlt: HouseAltIcon,
  },
  {
    name: 'Autos e peças',
    value: 'autos-e-pecas',
    icon: CarIcon,
    iconAlt: CarAltIcon,
  },
  {
    name: 'Para a sua casa',
    value: 'para-a-sua-casa',
    icon: BedIcon,
    iconAlt: BedAltIcon,
  },
  {
    name: 'Eletrônicos e celulares',
    value: 'eletronicos-e-celulares',
    icon: PhonesIcon,
    iconAlt: PhonesAltIcon,
  },
  {
    name: 'Música e hobbies',
    value: 'musica-e-hobbies',
    icon: MusicIcon,
    iconAlt: MusicAltIcon,
  },
  {
    name: 'Esportes e lazer',
    value: 'esportes-e-lazer',
    icon: SportIcon,
    iconAlt: SportcAltIcon,
  },
  {
    name: 'Artigos Infantis',
    value: 'artigos-infantis',
    icon: ChildrenIcon,
    iconAlt: ChildrenAltIcon,
  },
  {
    name: 'Animais de estimação',
    value: 'animais-de-estimacao',
    icon: PetIcon,
    iconAlt: PetAltIcon,
  },
  {
    name: 'Moda e beleza',
    value: 'moda-e-beleza',
    icon: BeautyIcon,
    iconAlt: BeautyAltIcon,
  },
  {
    name: 'Agro e indústria',
    value: 'agro-e-industria',
    icon: IndustryIcon,
    iconAlt: IndustryAltIcon,
  },
  {
    name: 'Comércio e escritório',
    value: 'comercio-e-escritorio',
    icon: OfficeIcon,
    iconAlt: OfficeAltIcon,
  },
  {
    name: 'Serviços',
    value: 'servicos',
    icon: ServicesIcon,
    iconAlt: ServicesAltIcon,
  },
  {
    name: 'Vagas de emprego',
    value: 'vagas-de-emprego',
    icon: PositionIcon,
    iconAlt: PositionAltIcon,
  },
];
