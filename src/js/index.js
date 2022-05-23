import '../sass/index.scss';

import { tagsClicksHandler } from './tagsClicksHandler';
import { modalClickHandler } from './modalClickHandler';
import { burgerClickHandler } from './burgerClickHandler';


window.onload = () => {
  tagsClicksHandler();
  modalClickHandler();
  burgerClickHandler();
};
