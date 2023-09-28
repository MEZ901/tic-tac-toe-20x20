const HistoryTable = () => {
  const historyString = localStorage.getItem("gameHistory");

  const history = historyString ? JSON.parse(historyString) : [];

  const historyHTML =
    history.length > 0
      ? history.map(
          (record) =>
            `
              <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-200 text-center">
                <td class="whitespace-nowrap px-6 py-4">${record.players}</td>
                <td class="whitespace-nowrap px-6 py-4">${record.winner}</td>
                <td class="whitespace-nowrap px-6 py-4">${
                  record.dateTime.split(" - ")[0]
                }</td>
                <td class="whitespace-nowrap px-6 py-4">${
                  record.dateTime.split(" - ")[1]
                }</td>
              </tr>
            `
        )
      : [
          `
            <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-200 text-center">
              <td colspan="4" class="px-6 py-4">There's no history yet</td>
            </tr>
          `,
        ];
  return `
    <table class="min-w-full text-sm font-light">
      <thead class="border-b font-medium">
        <tr class="text-center">
          <th scope="col" class="px-6 py-4">Players</th>
          <th scope="col" class="px-6 py-4">Winner</th>
          <th scope="col" class="px-6 py-4">Date</th>
          <th scope="col" class="px-6 py-4">Time</th>
        </tr>
      </thead>
      <tbody>
        ${historyHTML.join("\n")}
      </tbody>
    </table>
  `;
};

export default HistoryTable;
