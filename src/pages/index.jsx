// src/pages/index.jsx
import LeaderboardPreview from '../components/LeaderboardPreview';
import TourSchedule from '../components/TourSchedule';

export default function Home() {
  return (
    <div>
      <section>
        <h2 className="text-3xl font-bold mb-2">Welcome to the FILC World Tour</h2>
        <p className="mb-6 text-gray-700">The official global league for Arcade Rolling. Track rankings, results, and upcoming events.</p>
      </section>
      <LeaderboardPreview />
      <TourSchedule />
    </div>
  );
}
