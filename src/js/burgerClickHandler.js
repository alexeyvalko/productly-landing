const removeMenu = () => {
  document.querySelector('.overlay').remove();
  const menu = document.querySelector('.hamburger-menu');
  menu.classList.add('hide');
  setTimeout(() => {
    menu.remove();
  }, 500);
  document.querySelector('.hamburger').classList.remove('crest');
};

const remOverlay = (overlay) => {
  document.querySelector('.overlay').addEventListener('click', (e) => {
    if (overlay === e.target) {
      removeMenu();
    }
  });
};

const addOverlay = (body) => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  body.appendChild(overlay);
  remOverlay(overlay);
};

const addMenu = (body, menu) => {
  body.appendChild(menu);
  setTimeout(() => {
    menu.classList.remove('hide');
  }, 100);
};

const linksClickHandler = (ul) => {
  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      removeMenu();
    }
  });
};

const addLinks = (menu) => {
  const links = ['Home', 'Services', 'About', 'Product'];
  const ul = document.createElement('ul');
  const liArray = links.map((link) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = link;
    li.appendChild(a);
    return li;
  });
  ul.classList.add('hamburger__links');
  ul.append(...liArray);
  linksClickHandler(ul);
  menu.append(ul);
};

export const burgerClickHandler = () => {
  document.querySelector('.hamburger ').addEventListener('click', (e) => {
    const hamburger = e.target.closest('.hamburger');
    if (!hamburger.classList.contains('crest')) {
      const body = document.querySelector('body');
      const menu = document.createElement('div');
      hamburger.classList.add('crest');
      menu.classList.add('hamburger-menu', 'hide');
      addLinks(menu);
      addOverlay(body);
      addMenu(body, menu);
    } else {
      removeMenu();
    }
  });
};
