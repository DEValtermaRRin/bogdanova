import { DATA } from '../files/portfolio.js';

export const pagination = () => {
  const postsContainer = document.querySelector('.main__posts');

  if (postsContainer) {
    let currentPage = 1;
    const renderedArticles = 2;
    const pagesCount = Math.ceil(DATA.length / renderedArticles);
    const prevBtn = document.getElementById('item-before');
    const nextBtn = document.getElementById('item-after');

    const displayList = (arrData, postsPerPage, curPage) => {
      curPage--;
      postsContainer.innerHTML = '';

      const start = postsPerPage * curPage;
      const end = start + postsPerPage;
      const paginatedData = arrData.slice(start, end);

      paginatedData.forEach((el) => {
        const templatePost = document.querySelector('.template-post').content.querySelector('article').cloneNode(true);
        const postImage = templatePost.querySelector('img');
        const postTitle = templatePost.querySelector('.info-work__title');
        const postDescription = templatePost.querySelector('.info-work__dscrpt');
        const postLink = templatePost.querySelector('a');
        const postTags = templatePost.querySelector('.tags__flex');

        postTags.textContent = '';
        postImage.src = el.imgSrc;
        postImage.alt = el.imgAlt;
        postImage.title = el.imgAlt;
        postTitle.textContent = el.name;
        postDescription.textContent = el.about;
        postLink.href = el.link;

        el.tags.forEach((tag) => {
          const postTag = document.createElement('div');
          postTag.classList.add('tags__tag');
          postTag.textContent = tag;
          postTags.appendChild(postTag);
        });

        postsContainer.appendChild(templatePost);
      });
    };

    const changePaginationWithPrevNextBtns = () => {
      prevBtn.addEventListener('click', () => {
        const currentPaginationBtn = document.querySelector('li.pagination__item--active');
        if (currentPage === 1) return;
        currentPage--;
        displayList(DATA, renderedArticles, currentPage);
        currentPaginationBtn.classList.remove('pagination__item--active');
        currentPaginationBtn.previousElementSibling.classList.add('pagination__item--active');
      });

      nextBtn.addEventListener('click', () => {
        if (currentPage === pagesCount) return;
        const currentPaginationBtn = document.querySelector('li.pagination__item--active');
        currentPaginationBtn.classList.remove('pagination__item--active');
        currentPage++;
        currentPaginationBtn.nextElementSibling.classList.add('pagination__item--active');
        displayList(DATA, renderedArticles, currentPage);
      });
    };

    const displayPaginationBtn = (curPage) => {
      const paginationBtn = document.createElement('li');
      paginationBtn.classList.add('pagination__item');
      paginationBtn.textContent = curPage;
      if (currentPage === curPage) paginationBtn.classList.add('pagination__item--active');

      paginationBtn.addEventListener('click', () => {
        const currentPaginationBtn = document.querySelector('li.pagination__item--active');
        currentPage = curPage;

        displayList(DATA, renderedArticles, currentPage);

        currentPaginationBtn.classList.remove('pagination__item--active');

        paginationBtn.classList.add('pagination__item--active');
      });

      return paginationBtn;
    };

    const displayPagination = () => {
      const paginationList = document.querySelector('.pagination__numbers');

      for (let i = 0; i < pagesCount; i++) {
        const paginationButton = displayPaginationBtn(i + 1);
        paginationList.appendChild(paginationButton);
      }
    };

    displayList(DATA, renderedArticles, currentPage);
    displayPagination();
    changePaginationWithPrevNextBtns();
  }
};
