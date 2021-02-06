'use strict';
const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
  
    /* [DONE] remove class 'active' from all article links  */
  
    const activeLinks = document.querySelectorAll('.titles a.active');
  
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    const activeArticles = document.querySelectorAll('.post');
  
    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }
  
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);
  
    const articleSelector = clickedElement.getAttribute('href')
    console.log('articleselector;',articleSelector)

    const targetArticle = document.querySelector(articleSelector);
    console.log('targetArticle:', targetArticle);
    targetArticle.classList.add('active');
    console.log('target:', targetArticle);
   
  }
   generateTitleLinks();
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }