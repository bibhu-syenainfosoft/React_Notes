import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function ShoppingIndex() {

    return (
        <div>
            <h3>Shopping Index</h3>
            <Router>
                <ol>
                    <li> <Link to='/html'>HTML</Link> </li>
                    <li> <Link to='/css'>CSS</Link> </li>
                    <li> <Link to='/js'>Javascript</Link> </li>
                </ol>
                <hr />
                <Routes>
                    <Route path='html' element={
                        <div>
                            <h2><u>HTML</u></h2>
                            <h3>Welcome to HTML</h3>
                            <p>It is a markup language</p>
                        </div>
                    } />
                    <Route path='/css' element={
                        <div>
                            <h2><u>CSS</u></h2>
                            <h3>Welcome to CSS</h3>
                            <p>It is Used for styling the web page</p>
                        </div>
                    } />
                    <Route path='/js' element={
                        <div>
                            <h2><u>Javascript</u></h2>
                            <h3>Welcome to Javascript</h3>
                            <p>It is a Scripting language</p>
                        </div>
                    } />
                    <Route path='/' element={
                        <div>
                            <h2>Welcome to Web Designing</h2>
                        </div>
                    } />
                    <Route path='*' element={
                        <div>
                           <p className='text-danger'>Not Found: The page that you requested that is not available.</p> 
                        </div>
                    } />

                </Routes>
            </Router>
        </div>
    )


}