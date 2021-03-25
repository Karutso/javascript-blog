const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){
  const titleList = document.querySelector(optTitleListSelector);
  console.log('lista tyt', titleList);
  titleList.innerHTML = '';
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('artykuly', articles);
  let html = '';
  for(let article of articles) {
    const articleId = article.getAttribute('id');
    console.log('id artryk;', articleId);
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linki', linkHTML);
    console.log('tytul', articleTitle);
    document.querySelector(optTitleListSelector).insertAdjacentHTML('afterbegin', linkHTML);
    html = html + linkHTML;
  }
  titleList.innerHTML = html;
  console.log('html;', html);
}
