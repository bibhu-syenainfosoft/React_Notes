import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import AxiosDemo from '../components/AxiosDemo'
import LoginComponent from '../components/LoginComponent'
import Formik_YUP from '../components/Formik_YUP'
import FormValidations from '../components/FormValidation'
import FakeStoreAPI from '../components/FakeStoreAPI'

export default function ShoppingIndex(){
  
    return(
        <div>
            <h3>Shopping Index</h3>
          <Router>
          <ol>
                <li> <Link to='/login'>Login</Link> </li>
                <li> <Link to='/roleList'>Roles List</Link> </li>
                <li> <Link to='/products'>Products</Link> </li>
                <li> <Link to='/register1'>Register1</Link> </li>
                <li> <Link to='/register2'>Register2</Link> </li>
            </ol>
            <hr/>
            <Routes>
                <Route path='/login' element={<LoginComponent/>}/>
                <Route path='/roleList' element={<AxiosDemo/>}/>
                <Route path='/products' element={<FakeStoreAPI/>}/>
                <Route path='/register1' element={<Formik_YUP/>}/>
                <Route path='/register2' element={<FormValidations/>}/>
                
            </Routes>
          </Router>
        </div>
    )


}