// src/components/LeaderboardPreview.jsx
export default function LeaderboardPreview() {
  const players = [
    { name: 'Ryo Sato 🇯🇵', points: 3420 },
    { name: 'Clara Vance 🇬🇧', points: 3060 },
    { name: 'Luis Orellana 🇨🇱', points: 2790 },
  ];

  return (
    <section>
      <h3 className="text-xl font-semibold mb-2">Top 3 – Legion of Merit</h3>
      <ul className="bg-gray-50 p-4 rounded shadow">
        {players.map((p, i) => (
          <li key={i} className="flex justify-between py-1 border-b last:border-none">
            <span>{i + 1}. {p.name}</span>
            <span>{p.points} pts</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
