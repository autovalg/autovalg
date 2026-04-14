"use client";

export default function OmOssPage() {
  return (
    <div className="min-h-screen bg-[#040404] text-white font-['Inter',sans-serif] antialiased">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.2]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,168,101,0.12),_transparent_45%)]" />
      </div>

      <header className="relative border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div>
            <div className="eyebrow text-[#c9a865]/80">Bilformidling</div>
            <div className="text-2xl font-medium tracking-wide premium-heading">
              Autovalg
            </div>
          </div>

          <a
            href="/"
            className="rounded-full border border-[#c9a865]/40 px-5 py-2 text-sm tracking-wide text-[#e7d2a2] hover:bg-[#c9a865] hover:text-black transition"
          >
            Tilbake
          </a>
        </div>
      </header>

      <main className="relative min-h-[calc(100vh-88px)]">
        <section className="mx-auto max-w-5xl px-6 py-24">
          <div className="max-w-3xl">
            <div className="eyebrow text-[#c9a865]/70 mb-6">Om oss</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] premium-heading tracking-[-0.02em]">
              Bygget på erfaring fra bruktbilmarkedet
            </h1>

            <div className="mt-10 space-y-7 text-[15px] md:text-[16px] text-white/62 leading-[1.95] tracking-[0.01em]">

  <p>
    Autovalg startet som en konsekvens av at drømme-bilen ble et bomkjøp.
    Den 4. juli 2018 kunne Forbrukerrådet dele at over 10% av tvistene de
    mottok{" "}
    <span className="text-[#d8b36a] font-medium">første halvår</span>{" "}
    handlet om bruktbil. Dette var den største{" "}
    <span className="text-[#d8b36a] font-medium">enkeltkategorien</span>{" "}
    i landet vårt. Våre egne personlige erfaringer tilsier at dette problemet
    ikke akkurat har forsvunnet med årene.
  </p>

  <p>
    Hovedårsaken til at begge parter ender i en tvist er når bilen har{" "}
    <span className="text-[#d8b36a] font-medium">ukjente</span>{" "}
    mangler og problemer. God erfaring og et bredt nettverk gjør at vi står{" "}
    <span className="text-[#d8b36a] font-medium">stabilt</span>{" "}
    ettersom vi informerer om kjente feil og mangler ved kjøp og salg av bil.
    Resultatet er at salg{" "}
    <span className="text-[#d8b36a] font-medium">sjeldent</span>{" "}
    ender i en tvist, og tilbud til deg som kunde kommer hurtig. Vi har en
    responstid på under en time, og tilbud fra forhandlere kommer ofte like raskt.
  </p>

  <p className="text-white/78">
    Målet er enkelt: En tryggere, mer effektiv og mer forutsigbar vei til riktig bil — for alle parter.
  </p>

</div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500&display=swap');

        .premium-heading {
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.015em;
        }

        .eyebrow {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.35em;
        }
      `}</style>
    </div>
  );
}