const optArticleSelector = '.post',
optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){
    const titleList = document.querySelector(optTitleListSelector);
        console.log(titleList);
        titleList.innerHTML = '';
        const articles = document.querySelectorAll(optArticleSelector);
        console.log(articles);
            for(let article of articles) {
                const articleId = articles.getAttribute('id');
                console.log(articleId);
                const article = articleId;
                const articleTitle = article.querySelector(optTitleSelector).innerHTML;
                const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
                console.log(linkHTML);
                optTitleListSelector.insertAdjacentHTML('afterbegin', linkHTML);
}
}
