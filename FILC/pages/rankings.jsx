// src/pages/rankings.jsx
export default function Rankings() {
  const players = [
    { name: 'Ryo Sato 🇯🇵', points: 3420, titles: 3, best: '1st (x3)', events: 10 },
    { name: 'Clara Vance 🇬🇧', points: 3060, titles: 2, best: '1st (x2)', events: 10 },
    { name: 'Luis Orellana 🇨🇱', points: 2790, titles: 1, best: '1st (x1)', events: 9 },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Legion of Merit – Global Rankings</h2>
      <table className="w-full text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">#</th>
            <th className="p-2">Player</th>
            <th className="p-2">Points</th>
            <th className="p-2">Titles</th>
            <th className="p-2">Best Finish</th>
            <th className="p-2">Events Counted</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p, i) => (
            <tr key={i} className="border-t">
              <td className="p-2 font-bold">{i + 1}</td>
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.points}</td>
              <td className="p-2">{p.titles}</td>
              <td className="p-2">{p.best}</td>
              <td className="p-2">{p.events}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
