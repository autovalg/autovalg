export default function TakkPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-xl w-full text-center">
        
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Takk, du hører fra oss.
        </h1>

        <p className="text-gray-400 mb-8">
          Vi har mottatt forespørselen din og tar kontakt så snart som mulig.
        </p>

        <a
          href="/"
          className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Tilbake til forsiden
        </a>

      </div>
    </main>
  );
}