import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider, useGlobalState } from './context/GlobalState';
import Home from './components/Home';
import NewCita from './components/NewCita';
import SaveCita from './components/SaveCita';
import Header from './components/Header';
import Detail from './components/Detail';
import Form from './components/Form';

function App() {
  const [citas, setCitas] = useGlobalState('citas');
  const [query, setQuery] = useGlobalState('query');
  const [results, setResults] = useGlobalState('results');

  return (
    <GlobalProvider
      initialState={{
        citas,
        query,
        results,
      }}
    >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/new"
            render={(props) => <NewCita {...props} />}
          />
          <Route path="/save" component={SaveCita} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
