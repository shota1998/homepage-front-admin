import { syncEditingArticle } from '../../redux/actions/editingArticle';

// todo: naming parameters. {articleId, etc...}
// Synchronize editing article to article.
export function generateSyncEditingArticleFunction (markdownValue,
                                                    dispatch,
                                                    editingArticleId,
                                                    articleId,
                                                    isEdited,
                                                    title) {

  return  (event) => {
    event.preventDefault()
    console.log("title         : " + JSON.stringify(title))
    console.log("markdownValue : "                     + markdownValue)

    const article = {
      id         : editingArticleId,
      article_id : articleId,
      title      : title,
      body       : markdownValue
    }

    if (article.body === "" || article.title === "") {
      console.log("Title and body must be at least one charactor.")
      return;
    } 
    
    dispatch( syncEditingArticle(article) )
  }
};