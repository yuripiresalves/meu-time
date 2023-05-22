export function ResultsTable() {
  return (
    <div className="flex flex-col gap-3">
      <table className="w-full border-collapse">
        <thead className="text-center">
          <th className="rounded-tl-lg bg-neutral-700 p-4">J</th>
          <th className="bg-emerald-700 p-4">V</th>
          <th className="bg-amber-700 p-4">E</th>
          <th className="rounded-tr-lg bg-rose-700 p-4">D</th>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="rounded-bl-lg border-t-2 border-t-neutral-600 bg-neutral-800 p-4">
              10
            </td>
            <td className="border-t-2 border-t-neutral-600 bg-neutral-800 p-4">
              6
            </td>
            <td className="border-t-2 border-t-neutral-600 bg-neutral-800 p-4">
              3
            </td>
            <td className="rounded-br-lg border-t-2 border-t-neutral-600 bg-neutral-800 p-4">
              1
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-neutral-700" />
          <span>Jogos</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-700" />
          <span>Vitórias</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-amber-700" />
          <span>Empates</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-rose-700" />
          <span>Derrotas</span>
        </div>
      </div>
    </div>
  );
}
