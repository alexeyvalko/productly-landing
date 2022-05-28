const removeSelectedTags = () => {
  const tags = document.querySelectorAll('.strategies__tags .tag');
  tags.forEach((tag) => {
    tag.classList.remove('tag_selected');
    tag.classList.add('tag_bordered');
  });
};

const selectTag = (tag) => {
  tag.classList.add('tag_selected');
  tag.classList.remove('tag_bordered');
};

const showAllStrategies = () => {
  document.querySelectorAll('.strategy').forEach((strategy) => {
    strategy.classList.remove('strategy_hidden');
  });
};

const filterStrategiesByTagName = (text) => {
  document
    .querySelectorAll('.strategies__wrapper .strategy')
    .forEach((strategy) => {
      strategy.classList.add('strategy_hidden');
      strategy.querySelectorAll('.tag').forEach((tag) => {
        if (tag.textContent === text) {
          strategy.classList.remove('strategy_hidden');
        }
      });
    });
};

export const tagsClicksHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
      const tag = e.target;
      removeSelectedTags();
      selectTag(tag);
      if (tag.textContent === 'All') {
        showAllStrategies();
      } else {
        filterStrategiesByTagName(tag.textContent);
      }
    }
  });
};
