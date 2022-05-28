import '../sass/index.scss';

import { tagsClicksHandler } from './tagsClicksHandler';
import { modalClickArticlesHandler, modalClickFormHandler } from './modalClickHandler';
import { burgerClickHandler } from './burgerClickHandler';

window.onload = () => {
  tagsClicksHandler();
  modalClickArticlesHandler();
  burgerClickHandler();
  modalClickFormHandler()
};
