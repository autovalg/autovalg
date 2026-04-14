export default function TakkPage() {
  return (
    <main className="relative min-h-screen text-white flex items-center justify-center px-4">

      {/* BAKGRUNNSBILDE (samme som forsiden) */}
<div className="absolute inset-0 -z-10">
  <div
    className="w-full h-full bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop')",
    }}
  />
  <div className="absolute inset-0 bg-black/70" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,168,101,0.12),_transparent_45%)]" />
</div>

      {/* INNHOLD */}
      <div className="text-center max-w-xl">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Takk, du hører fra oss.
        </h1>

        <p className="text-gray-400 mb-8 leading-relaxed">
          Vi har mottatt forespørselen din og tar kontakt med deg per telefon/sms innen en time fra nå
          (gjelder kun mellom kl. 07:00-23:00).
        </p>

        <a
          href="/"
          className="inline-block bg-[#fc9a65] text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Tilbake til forsiden
        </a>

      </div>
    </main>
  );
}