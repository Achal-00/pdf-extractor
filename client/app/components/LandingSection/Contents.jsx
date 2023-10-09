import FileInput from "./FileInput";

export default function Contents() {
  return (
    <section className="grid self-start gap-8 portrait:text-center landscape:self-center landscape:lg:pr-32">
      <h1 className="text-4xl font-bold text-purple-500">PDF Extractor</h1>
      <p className="text-gray-400">
        A PDF page extractor tool that lets you choose specific pages from a PDF
        file and create a new PDF document with just those selected pages.
      </p>
      <FileInput />
    </section>
  );
}
