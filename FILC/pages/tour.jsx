// src/pages/tour.jsx
export default function Tour() {
  const events = [
    { tier: 'Grand Major', name: 'Pacific Roll Cup', date: 'May 12, 2025', location: 'Osaka, Japan' },
    { tier: 'Premier Series', name: 'Simpson Classic', date: 'June 3, 2025', location: 'London, UK' },
    { tier: 'Continental', name: 'Cascadia Ring Invitational', date: 'July 6, 2025', location: 'Portland, OR, USA' },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Tour Schedule</h2>
      <ul className="space-y-4">
        {events.map((e, i) => (
          <li key={i} className="p-4 border rounded shadow-sm">
            <p className="text-lg font-semibold">{e.name} <span className="text-sm text-gray-500">({e.tier})</span></p>
            <p className="text-sm text-gray-600">{e.date} — {e.location}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
