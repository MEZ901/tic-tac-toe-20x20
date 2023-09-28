import BackHomeButton from "../components/BackHomeButton";
import HistoryTable from "../components/HistoryTable";

const HistoryLayout = () => {
  return `
    <div class="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      ${BackHomeButton()}
      <div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 py-8 rounded-lg shadow-2xl">
        <h1 class="text-lg font-bold mb-3">History</h1>
        ${HistoryTable()}
      </div>
    </div>
  `;
};

export default HistoryLayout;
