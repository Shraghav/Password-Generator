//Essentials imports
import React from 'react';
import '../Style/style.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

//Functionalities import
import DeleteResult from "../templates/PasswordDeleteResult"
import GetResult from "../templates/PasswordGetResult"
import UserCreate from "../templates/PasswordUserCreate"
import PostResult from "../templates/PassworPostResult";
import StrengthChecker from '../templates/StrengthChecker';
//rsuite library
import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import TrashIcon from '@rsuite/icons/Trash';
import ExpandOutlineIcon from '@rsuite/icons/ExpandOutline';
import RandomIcon from '@rsuite/icons/Random';

//Rendering code
const Home = () => {
    const [expanded, setExpanded] = React.useState(true);
    const [activeKey, setActiveKey] = React.useState('1');
    return (
        //nav bar starts
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
                         <NavLink id='post' to="/postResult">
                             Random Password
                         </NavLink>
                        </Nav.Item>
                        <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                            <NavLink id='get' to="/getResult">
                                    Retrieve Password
                            </NavLink>  
                        </Nav.Item>    
                        <Nav.Item eventKey="1" icon={<ExpandOutlineIcon />}>
                            <NavLink id='create' to="/userCreate">
                                    Own Password
                            </NavLink>                               
                        </Nav.Item>    
                        <Nav.Item eventKey="1" icon={<TrashIcon />}>
                            <NavLink id='delete' to="/deleteResult">
                                    Delete Password
                            </NavLink>     
                        </Nav.Item>    
                        <Nav.Item eventKey="1" icon={<TrashIcon />}>
                            <NavLink id='strength' to="/strengthChecker">
                                    Check Password Strength
                            </NavLink>     
                        </Nav.Item>    
                    </Nav>
                </Sidenav.Body>
                <Sidenav.Toggle onToggle={expanded => setExpanded(expanded)} />
            </Sidenav> 
            </div>
            {/* Routes obtained */}
            <div className='navbar-content'>
                <Routes>
                    <Route id='post' path="/postResult" element={<PostResult />} />
                    <Route id='delete' path="/deleteResult" element={<DeleteResult />} />
                    <Route id='get' path="/getResult" element={<GetResult />} />
                    <Route id='create' path="/userCreate" element={<UserCreate />} />
                    <Route id='strength' path="/strengthChecker" element={<StrengthChecker />} />
                </Routes>
            </div>
        </div>
        
    );
};
//Rendering the routes
const Root = () => (
    <Router>
        <Home />
    </Router>
);
export default Root;