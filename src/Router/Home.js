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
import Welcome from '../templates/Welcome';

//rsuite library
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import TrashIcon from '@rsuite/icons/Trash';
import ExpandOutlineIcon from '@rsuite/icons/ExpandOutline';
import RandomIcon from '@rsuite/icons/Random';
import TagLockIcon from '@rsuite/icons/TagLock';
import PcIcon from '@rsuite/icons/Pc';

//Rendering code
const Home = () => {
    const [activeKey, setActiveKey] = React.useState('1');
    return (
        //nav bar starts
        <div>
        <div className='navbar-container'>
        <div style={{ width: 240 }}>
            <br></br>
            <Sidenav defaultOpenKeys={['3', '4']}>
                <Sidenav.Body>
                    <Nav activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Item eventKey="1" icon={<RandomIcon />}>
                         <NavLink id='post' to="/postResult" style={{ textDecoration: 'none' }}>
                             Random Password
                         </NavLink>
                        </Nav.Item>
                        <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                                    <NavLink id='get' to="/getResult" style={{ textDecoration: 'none' }}>
                                    Retrieve Password
                            </NavLink>  
                        </Nav.Item>    
                        <Nav.Item eventKey="1" icon={<ExpandOutlineIcon />}>
                                    <NavLink id='create' to="/userCreate" style={{ textDecoration: 'none' }}>
                                    Own Password
                            </NavLink>                               
                        </Nav.Item>    
                        <Nav.Item eventKey="1" icon={<TrashIcon />}>
                                    <NavLink id='delete' to="/deleteResult" style={{ textDecoration: 'none' }}>
                                    Delete Password
                            </NavLink>     
                        </Nav.Item>    
                        <Nav.Item eventKey="1" icon={<TagLockIcon />}>
                                    <NavLink id='strength' to="/strengthChecker" style={{ textDecoration: 'none' }}>
                                    Check Password Strength
                            </NavLink>     
                        </Nav.Item>    
                        <Nav.Item eventKey="1" icon={<PcIcon />}>
                                    <NavLink id='strength' to="/" style={{ textDecoration: 'none' }}>
                                    About
                            </NavLink>     
                        </Nav.Item>    
                    </Nav>
                </Sidenav.Body>
                
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
                    <Route id='welcome' path="/" element={<Welcome />} />
                </Routes>
            </div>
            </div>
        </div>
        
    );
};
//Rendering the routes
const Root = () => (
    <Router>
        {/* <Welcome/> */}
        <Home />
    </Router>
);
export default Root;