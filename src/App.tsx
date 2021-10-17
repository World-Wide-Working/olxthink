import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ClassicAdvertisement from './pages/ClassicAdvertisement';
import Camera from './pages/Camera';

import OlxHeader from './components/OlxHeader';

import GlobalStyle from './globalStyles';
import * as S from './styles';
import { Provider } from './data/context';
import Think from './pages/Think';

function App(): JSX.Element {
  return (
    <Provider>
      <Router>
        <GlobalStyle />
        <OlxHeader />
        <S.ContentWrapper>
          <Switch>
            <Route path="/" exact component={ClassicAdvertisement} />
            <Route path="/think" exact component={Think} />
            <Route path="/camera" component={Camera} />
          </Switch>
        </S.ContentWrapper>
      </Router>
    </Provider>
  );
}

export default App;
