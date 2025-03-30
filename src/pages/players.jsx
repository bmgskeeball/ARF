// src/pages/players.jsx
export default function Players() {
  const players = [
    {
      name: 'Clara Vance 🇬🇧',
      avg: 476,
      high: 520,
      zRate: '1.2%',
      clean: '92.3%',
      strikes: 8,
      clutch: 5
    },
    {
      name: 'Ryo Sato 🇯🇵',
      avg: 482,
      high: 540,
      zRate: '0.8%',
      clean: '94.1%',
      strikes: 11,
      clutch: 7
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Player Performance Index</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {players.map((p, i) => (
          <div key={i} className="border rounded p-4 shadow">
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Avg Frame:</strong> {p.avg}</li>
              <li><strong>High Frame:</strong> {p.high}</li>
              <li><strong>Zilch Rate:</strong> {p.zRate}</li>
              <li><strong>Clean Rate:</strong> {p.clean}</li>
              <li><strong>Strike Conversions:</strong> {p.strikes}</li>
              <li><strong>Clutch Frames:</strong> {p.clutch}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
