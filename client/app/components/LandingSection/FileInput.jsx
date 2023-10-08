export default function Home() {
  return (
    <>
      <input
        type="file"
        accept=".pdf"
        className="block w-max portrait:mx-auto text-sm file:mr-4 file:rounded-md file:border-0 file:bg-purple-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-purple-300 focus:outline-none disabled:pointer-events-none disabled:opacity-60 bg-gray-100 rounded-md"
      />
    </>
  );
}
