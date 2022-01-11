import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './atomic/pages/Home/Home.page';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route index path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
