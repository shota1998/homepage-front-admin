import { postArticle } from '../../redux/actions/article';

// todo
// Post an article.
export function generatePostArticleFunction (markdownValue,
                                             dispatch,
                                             title) { 

  return () => {
    console.log("callBack : " + "postArticle()")
    console.log("document.getElementById('title') : " + title)
    console.log("markdownValue : " + markdownValue)

    const article = {
      title: title,
      body : markdownValue,
    }

    if (article.body === "" || article.title === "") {
      console.log("Title and body must be at least one charactor.")
      return;
    } 

    dispatch( postArticle(article) )
  }
};