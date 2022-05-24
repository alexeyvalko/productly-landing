import { Modal } from './modal';
import { data } from './data';

const generateModal = (content) => {
  const modal = new Modal('tool_modal');
  modal.buildModal(content);
  modal.openModal();
};

export const modalClickArticlesHandler = () => {
  document
    .querySelector('.strategies__wrapper')
    .addEventListener('click', (e) => {
      if (e.target.closest('.strategy')) {
        const strategyId = e.target.closest('.strategy').dataset.id;
        const strategyData = data.find((item) => item.id === strategyId);
        generateModal(strategyData);
      }
    });
};

export const modalClickFormHandler = () => {
  document.querySelector('.contact-us_btn').addEventListener('click', (e) => {
    e.preventDefault();
    generateModal('<p style="text-align: center; font-size: 3rem">Email sent!<p>');
  });
};
