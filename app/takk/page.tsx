export default function TakkPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      
      <div className="relative w-full max-w-2xl">
        
        {/* Glow / bakgrunnseffekt */}
        <div className="absolute inset-0 bg-[#fc9a65]/10 blur-3xl rounded-3xl" />

        {/* Kort */}
        <div className="relative rounded-[2rem] border border-white/10 bg-black/65 p-10 backdrop-blur shadow-[0_30px_80px_rgba(0,0,0,0.7)] text-center">
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Takk, du hører fra oss.
          </h1>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Vi har mottatt forespørselen din og tar kontakt så snart som mulig.
          </p>

          <a
            href="/"
            className="inline-block bg-[#fc9a65] text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Tilbake til forsiden
          </a>

        </div>
      </div>
    </main>
  );
}