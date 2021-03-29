import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main/Main';
import List from './admin/List';
import ListCreate from './admin/ListCreate';
import ListEdit from './admin/ListEdit';

function App() {
  return (
    <div className="App">


          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>       
          </div>
        
          <div className="table-responsive">
           <BrowserRouter>
              <Route path="/" exact component={Main} />
              <Route path="/admin/products" exact component={List} />  
              <Route path="/admin/products/create" exact component={ListCreate} />   
              <Route path="/admin/products/:id/edit" exact component={ListEdit} />                   
           </BrowserRouter>

          </div>

    
    
    </div>
  );
}

export default App;
