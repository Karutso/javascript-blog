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
                
}
}
