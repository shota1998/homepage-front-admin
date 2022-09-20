import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar      from './components/Navbar';
import Home        from './components/pages/Home';
import PostArticle from './components/pages/PostArticle';
import EditArticle from './components/pages/EditArticle';
import Article     from './components/pages/Article';
import setCognito  from './sdk/aws/cognito'
import './App.css';

import { marked }  from 'marked';
import highlightjs from 'highlight.js';

function App() {
  // Highlight setting.
  marked.setOptions({
    highlight: (code, lang) => {
      return highlightjs.highlightAuto(code, [lang]).value;
    },
  });

  setCognito();
  
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
         <Route exact path = '/'             component = {Home }       />
         <Route exact path = '/article'      component = {Article}     />
         <Route exact path = '/post_article' component = {PostArticle} />
         <Route exact path = '/edit_article' component = {EditArticle} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
