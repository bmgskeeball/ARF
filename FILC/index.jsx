import Header from '../components/Header';
import Footer from '../components/Footer';
import LeaderboardPreview from '../components/LeaderboardPreview';
import TourSchedule from '../components/TourSchedule';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="p-6 max-w-6xl mx-auto space-y-12">
        <section>
          <h1 className="text-4xl font-bold mb-4">FILC World Tour</h1>
          <p className="text-lg">The official site of Arcade Rolling’s global circuit.</p>
        </section>
        <LeaderboardPreview />
        <TourSchedule />
      </main>
      <Footer />
    </div>
  );
}
