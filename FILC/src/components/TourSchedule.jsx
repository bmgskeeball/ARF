// src/components/TourSchedule.jsx
export default function TourSchedule() {
  const events = [
    { name: 'Pacific Roll Cup', date: 'May 12, 2025', location: 'Osaka, Japan' },
    { name: 'Simpson Classic', date: 'June 3, 2025', location: 'London, UK' },
    { name: 'Cascadia Ring Invitational', date: 'July 6, 2025', location: 'Portland, OR, USA' },
  ];

  return (
    <section>
      <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
      <ul className="bg-white p-4 rounded shadow border">
        {events.map((e, i) => (
          <li key={i} className="py-2 border-b last:border-none">
            <p className="font-bold">{e.name}</p>
            <p className="text-sm text-gray-600">{e.date} – {e.location}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
