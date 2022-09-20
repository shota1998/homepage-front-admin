import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch, batch }                  from 'react-redux';
import { Prompt }  from 'react-router-dom'
import SimpleMde   from "react-simplemde-editor";
import DOMPurify   from 'dompurify';
import { marked }  from 'marked';

import "easymde/dist/easymde.min.css";
import "highlight.js/styles/github.css";

import { generateImageUploadFunction }        from '../logic/image/upload'
import { generatePostArticleFunction }        from '../logic/article/post'
import { generateSyncEditingArticleFunction } from '../logic/editingArticle/sync'
import { generateEditEditingArticleFunction } from '../logic/editingArticle/edit'


export default function Input(props) {
  console.log("Component :  Input")

  // todo: delete
  const dispatch = useDispatch();

  const tmpS3ObejectNames = useSelector((state) => state.s3ObejectName.s3ObejectNames);
  var   s3ObejectNames    = [...tmpS3ObejectNames];

  const [markdownValue, setMarkdownValue] = useState(props.type === process.env.REACT_APP_INPUT_TYPE_EDIT
                                                                  ? props.article.body
                                                                  : "");

  const [titleVlaue, setTitleVlaue] = useState(props.type === process.env.REACT_APP_INPUT_TYPE_EDIT
                                                            ? props.article.title
                                                            : "");

  const [isEdited, setIsEdited] = useState(false);

  const onChange = (value) => {
    batch(() => {
      setMarkdownValue(value);
      setIsEdited(true);
    })
  };

  const onChangeTitle = useCallback((event) => {
    batch(() => {
      setTitleVlaue(event.target.value);
      setIsEdited(true);
    })
  }, [markdownValue]);
  
  // todo: delete this function.
  const handleBeforeUnloadEvent = useCallback((event) => {
    event.preventDefault();
    console.log("handleBeforeUnloadEvent()")
    return event.returnValue = "xxx";
  });
  
  // MDE settings.
  const autoUploadImage = useMemo(() => {
    return {
      uploadImage: true,
      imageUploadFunction: generateImageUploadFunction(dispatch, 
                                                       s3ObejectNames,
                                                       setMarkdownValue) ,
    };
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnloadEvent, {capture: true});
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnloadEvent);
    }
  }, []);

  return(
    <>
      <Prompt
        when={isEdited}
        message={() => {
          console.log("Component : Prompt");
          return 'Are you sure you want to leave this page?'
        }}
      />

      <form id="editForm">
        <div>
          <div>
            Title
          </div>
          <textarea
            cols     = "100"
            type     = "text"
            id       = "title"
            name     = "title"
            value    = {titleVlaue}
            onChange = {onChangeTitle}
          />
        </div>
        <div>
          Body
        </div>
        <SimpleMde 
          name     = "body"
          value    = {markdownValue}
          onChange = {onChange}
          options  = {autoUploadImage} 
        />
        <div>
          <div 
            dangerouslySetInnerHTML = {{
              __html: DOMPurify.sanitize(marked(markdownValue))
            }}
          >
          </div>
        </div>
        <div>
          {props.type === process.env.REACT_APP_INPUT_TYPE_POST &&
            <>
              <input
                type    = "button"
                value   = "Post"
                onClick = { generatePostArticleFunction(
                              markdownValue, 
                              dispatch, 
                              titleVlaue
                          )}
              />
            </>
          }
          {props.type === process.env.REACT_APP_INPUT_TYPE_EDIT &&
            <>
              <input
                type    = "button"
                value   = "Save"
                onClick = { generateEditEditingArticleFunction(
                              markdownValue,
                              dispatch,
                              props.article.id,
                              titleVlaue
                          )}
              />
              <input
                type    = "button"
                value   = "Sync"
                onClick = { generateSyncEditingArticleFunction(
                              markdownValue,
                              dispatch,
                              props.article.id,
                              props.article.article_id,
                              isEdited, 
                              titleVlaue
                          )}
              />
            </>
          }
        </div>
      </form>
    </>
  );
}
