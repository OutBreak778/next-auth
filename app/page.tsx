export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-14 items-center justify-between">
      <div className="border rounded-lg border-gray-200 w-[700px] h-[550px] grid grid-cols-3 gap-3 p-3">
        <div className="flex items-center justify-center text-xl font-semibold row-span-3 bg-gray-800 rounded-md text-gray-100">
          Cell 1
        </div>
        <div className="flex items-center justify-center text-xl font-semibold row-span-2 bg-gray-800 rounded-md text-gray-100">
          Cell 2
        </div>
        <div className="flex items-center justify-center text-xl font-semibold bg-gray-800 rounded-md text-gray-100">
          Cell 3
        </div>
        <div className="flex items-center justify-center text-xl font-semibold  bg-gray-800 rounded-md text-gray-100">
          Cell 4
        </div>
        <div className="flex items-center justify-center text-xl font-semibold col-span-2 bg-gray-800 rounded-md text-gray-100">
          Cell 5
        </div>
        <div className="flex items-center justify-center text-xl font-semibold col-span-2 bg-gray-800 rounded-md text-gray-100">
          Cell 6
        </div>
        <div className="flex items-center justify-center text-xl font-semibold row-span-2 bg-gray-800 rounded-md text-gray-100">
          Cell 7
        </div>
        <div className="flex items-center justify-center text-xl font-semibold col-span-2 bg-gray-800 rounded-md text-gray-100">
          Cell 8
        </div>
      </div>
    </main>
  );
}
