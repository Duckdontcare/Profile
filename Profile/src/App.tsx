import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Works from './components/pages/Works';
import { Theme } from '@radix-ui/themes';

function App() {
  return (
     <Theme appearance='light' accentColor="purple" radius="large">
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </div>
      </div>
     </Theme>

  );
}

export default App;