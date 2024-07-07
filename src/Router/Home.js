import PostResult from "../templates/PassworPostResult";
import DeleteResult from "../templates/PasswordDeleteResult"
import GetResult from "../templates/PasswordGetResult"
import UserCreate from "../templates/PasswordUserCreate"

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

const App = () => {
    const location = useLocation();

    const shouldShowLinks = location.pathname === '/';

    return (
        <div className="App">
            {shouldShowLinks && (
                <ul className="App-header" style={{ textAlign: 'center', paddingLeft: 0, listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
                    <li style={{ marginRight: '20px' }}>
                        <Link to="/postResult">
                            PostResult
                        </Link>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <Link to="/deleteResult">
                            Delete Result
                        </Link>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <Link to="/getResult">
                            Get Result
                        </Link>
                    </li>
                    <li>
                        <Link to="/userCreate">
                            Create User
                        </Link>
                    </li>
                </ul>
            )}
            <Routes>
                <Route path="/postResult" element={<PostResult />} />
                <Route path="/deleteResult" element={<DeleteResult />} />
                <Route path="/getResult" element={<GetResult />} />
                <Route path="/userCreate" element={<UserCreate />} />
            </Routes>
        </div>
    );
};

const Root = () => (
    <Router>
        <App />
    </Router>
);

export default Root;
