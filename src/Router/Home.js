// import PostResult from "../templates/PassworPostResult";
// import DeleteResult from "../templates/PasswordDeleteResult"
// import GetResult from "../templates/PasswordGetResult"
// import UserCreate from "../templates/PasswordUserCreate"

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

// const App = () => {
//     const location = useLocation();

//     const shouldShowLinks = location.pathname === '/';

//     return (
//         <div className="App">
//             {shouldShowLinks && (
//                 <ul className="App-header" style={{ textAlign: 'center', paddingLeft: 0, listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
//                     <li style={{ marginRight: '20px' }}>
//                         <Link to="/postResult">
//                             PostResult
//                         </Link>
//                     </li>
//                     <li style={{ marginRight: '20px' }}>
//                         <Link to="/deleteResult">
//                             Delete Result
//                         </Link>
//                     </li>
//                     <li style={{ marginRight: '20px' }}>
//                         <Link to="/getResult">
//                             Get Result
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/userCreate">
//                             Create User
//                         </Link>
//                     </li>
//                 </ul>
//             )}
//             <Routes>
//                 <Route path="/postResult" element={<PostResult />} />
//                 <Route path="/deleteResult" element={<DeleteResult />} />
//                 <Route path="/getResult" element={<GetResult />} />
//                 <Route path="/userCreate" element={<UserCreate />} />
//             </Routes>
//         </div>
//     );
// };

// const Root = () => (
//     <Router>
//         <App />
//     </Router>
// );

// export default Root;


import React from 'react';
import '../Style/style.css';

import DeleteResult from "../templates/PasswordDeleteResult"
import GetResult from "../templates/PasswordGetResult"
import UserCreate from "../templates/PasswordUserCreate"
import PostResult from "../templates/PassworPostResult";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import TrashIcon from '@rsuite/icons/Trash';
import ExpandOutlineIcon from '@rsuite/icons/ExpandOutline';
import RandomIcon from '@rsuite/icons/Random';

const Home = () => {
    const [expanded, setExpanded] = React.useState(true);
    const [activeKey, setActiveKey] = React.useState('1');
    return (
        <div className='navbar-container'>
        <div style={{ width: 240 }}>
            <Toggle
                onChange={setExpanded}
                checked={expanded}
            />
            <hr />
            <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']}>
                <Sidenav.Body>
                    <Nav activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Item eventKey="1" icon={<RandomIcon />}>
                         <Link to="/postResult">
                             Random Password
                         </Link>
                        </Nav.Item>
                            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                                
                                    <Link to="/getResult">
                                        Retrieve Password
                                    </Link>  
                        </Nav.Item>    
                        <Nav.Item eventKey="1" icon={<ExpandOutlineIcon />}>
                                    <Link to="/userCreate">
                                        Own Password
                                    </Link>                               
                        </Nav.Item>    
                        <Nav.Item eventKey="1" icon={<TrashIcon />}>
                                
                                    <Link to="/deleteResult">
                                        Delete Password
                                    </Link>     
                        </Nav.Item>    
                    </Nav>
                </Sidenav.Body>
                <Sidenav.Toggle onToggle={expanded => setExpanded(expanded)} />
            </Sidenav> 
            </div>
            <div className='navbar-content'>
                <Routes>
                    <Route path="/postResult" element={<PostResult />} />
                    <Route path="/deleteResult" element={<DeleteResult />} />
                    <Route path="/getResult" element={<GetResult />} />
                    <Route path="/userCreate" element={<UserCreate />} />
                </Routes>
            </div>
        </div>
        
    );
};
const Root = () => (
    <Router>
        <Home />
    </Router>
);
export default Root;