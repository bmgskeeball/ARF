// src/pages/results.jsx
export default function Results() {
  const match = {
    event: 'Cascadia Ring Invitational – Round of 16',
    date: 'July 6, 2025',
    player1: 'Luis Orellana 🇨🇱',
    player2: 'Jaya Krishnan 🇸🇬',
    frames1: [460, 470, 480, 510, 450, 490, 500, 470, 460, 480],
    frames2: [470, 440, 500, 520, 510, 530, 480, 470, 460, 500],
  };

  const drop1 = Math.min(...match.frames1);
  const drop2 = Math.min(...match.frames2);
  const total1 = match.frames1.reduce((a, b) => a + b) - drop1;
  const total2 = match.frames2.reduce((a, b) => a + b) - drop2;

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Match Results</h2>
      <div className="mb-4">
        <p className="font-semibold">{match.event}</p>
        <p className="text-sm text-gray-600">{match.date}</p>
      </div>
      <table className="w-full text-center border">
        <thead className="bg-gray-100">
          <tr>
            <th>Frame</th>
            {match.frames1.map((_, i) => <th key={i}>{i + 1}</th>)}
            <th>Drop</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-semibold">{match.player1}</td>
            {match.frames1.map((f, i) => <td key={i}>{f}</td>)}
            <td>{drop1}</td>
            <td className="font-bold">{total1}</td>
          </tr>
          <tr>
            <td className="font-semibold">{match.player2}</td>
            {match.frames2.map((f, i) => <td key={i}>{f}</td>)}
            <td>{drop2}</td>
            <td className="font-bold">{total2}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
