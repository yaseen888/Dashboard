import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Dashboard from './pages/Dashboard/Dashboard';
import Calendar from './pages/Calendar/Calendar';
import BoardPage from './pages/Board/Board';
import DataGrid from './pages/DataGrid/DataGrid';

const App = () => {
  return <div id='dashboard'> {/** this dashboard is from data #dashboard */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>

        <Route path="dashboard" element={<Dashboard/>}/> {/** path is for website address localhost:5173/dashboard */}
        <Route path="calendar" element={<Calendar/>}/>
        <Route path="board" element={<BoardPage/>}/>
        <Route path="users" element={<DataGrid/>}/>
      
      </Route>
    </Routes>
    </BrowserRouter>

  </div>
};

export default App;
