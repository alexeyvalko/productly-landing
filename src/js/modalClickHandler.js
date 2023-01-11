import { Modal } from './Modal';
import { data } from './data';

const generateModal = (content, classes) => {
  const modal = new Modal(classes);
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
        generateModal(strategyData, 'tool_modal');
      }
    });
};

export const modalClickFormHandler = () => {
  document.querySelector('#contact_form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());
    generateModal(
      `<p style="text-align: center; font-size: 3rem">Thanks for your message <strong>${formDataObject.name}</strong>!<p><p style="text-align: center; font-size: 3rem; line-height: 1.2;">We answer you on email <strong>${formDataObject.email}</strong><p>`,
      'form_modal'
    );
  });
};
