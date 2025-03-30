export default function LeaderboardPreview() {
  const players = [
    { name: 'Ryo Sato 🇯🇵', points: 3420 },
    { name: 'Clara Vance 🇬🇧', points: 3060 },
    { name: 'Luis Orellana 🇨🇱', points: 2790 },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Current Standings</h2>
      <ul className="bg-gray-100 p-4 rounded">
        {players.map((p, i) => (
          <li key={i} className="flex justify-between py-1">
            <span>{i + 1}. {p.name}</span>
            <span>{p.points} pts</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
