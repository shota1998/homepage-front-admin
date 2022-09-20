import { editEditingArticle } from '../../redux/actions/editingArticle';

// todo
// Edit an editing article.
export function generateEditEditingArticleFunction (markdownValue, 
                                                    dispatch, 
                                                    articleId,
                                                    title) { 
  
  return () => {
    console.log("callBack      : " + "editEditingArticle()")
    console.log("titleVlaue    : " + title)
    console.log("markdownValue : " + markdownValue)

    const article = {
      title: title,
      body : markdownValue,
      id   : articleId
    }

    if (article.body === "" || article.title === "") {
      console.log("Title and body must be at least one charactor.")
      return;
    } 
    
    dispatch( editEditingArticle(article) )
  }
};