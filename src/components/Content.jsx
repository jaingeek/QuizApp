
import { Route, Routes } from 'react-router-dom'
import JavaQuestion from '../pages/JavaQuestion'
import PythonQuestion from '../pages/PythonQuestion'
import SQLQuestion from '../pages/SQLQuestion';

export default function Content() {

    return(
      <Routes>
        <Route path='' element={<JavaQuestion />}></Route>
        <Route path='/jq' element={<JavaQuestion />}></Route>
        <Route path='/pq' element={<PythonQuestion />}></Route>
        <Route path='/sq' element={<SQLQuestion />}></Route>
      </Routes>
    );
}

