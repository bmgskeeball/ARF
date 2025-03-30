// src/components/Header.jsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-black text-white py-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">FILC World Tour</h1>
        <nav className="space-x-4 text-sm">
          <Link to="/">Home</Link>
          <Link to="/tour">Tour</Link>
          <Link to="/rankings">Rankings</Link>
          <Link to="/players">Players</Link>
          <Link to="/results">Results</Link>
          <Link to="/track">Track</Link>
          <Link to="/about">About</Link>
          <Link to="/news">News</Link>
        </nav>
      </div>
    </header>
  );
}
