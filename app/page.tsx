"use client";

export default function TryggBruktbilLanding() {
  const brands = [
    "Audi","BMW","Mercedes-Benz","Toyota","Volkswagen","Volvo","Ford","Nissan","Mazda","Kia","Hyundai","Skoda","Peugeot","Renault","Opel","Tesla","Porsche","Jaguar","Land Rover","Lexus","Mini","Honda","Suzuki","Subaru","Mitsubishi","Chevrolet","Dodge","Chrysler","Jeep","Fiat","Alfa Romeo","Citroën","Seat","Cupra","Polestar","Annet"
  ];

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,101,0.12),transparent_45%)]" />
      </div>

      <header className="relative border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div>
            <div className="eyebrow text-[#c9a865]/80">Bilformidling</div>
            <div className="text-2xl font-medium tracking-wide premium-heading">Autovalg</div>
          </div>
          <a
            href="#skjema"
            className="rounded-full border border-[#c9a865]/40 px-5 py-2 text-sm tracking-wide text-[#e7d2a2] hover:bg-[#c9a865] hover:text-black transition"
          >
            Forespørsel
          </a>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div className="eyebrow text-[#c9a865]/70 mb-6">Autovalg - skiller klinten fra hveten</div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] premium-heading tracking-[-0.02em]">
              Vi finner bilen <span className="text-[#d8b36a]">for deg</span>
            </h1>

            <p className="mt-6 max-w-lg text-[15px] text-white/55 leading-[1.8] tracking-[0.01em]">
              Du beskriver den. Vi finner den.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Diskré", "Ingen unødvendig kontakt."],
                ["Presist", "Kun relevante forslag."],
                ["Effektivt", "Kortere vei til riktig bil."],
              ].map(([title, text]) => (
                <div key={title} className="flex flex-col gap-2">
                  <div className="eyebrow text-[#c9a865] mb-2">{title}</div>
                  <p className="text-[13px] text-white/50 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-[#c9a865]/10 blur-3xl rounded-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-black/65 p-8 backdrop-blur shadow-[0_30px_80px_rgba(0,0,0,0.75)]">
              <div className="mb-6">
                <div className="eyebrow text-[#c9a865]">Skjema</div>
                <h2 className="mt-2 text-xl font-medium premium-heading tracking-[-0.01em]">Oppgi preferanser</h2>
              </div>

              <form
  id="skjema"
  className="space-y-5"
  action="https://formsubmit.co/vmedia@sysdev.no"
  method="POST"
onSubmit={(e) => {
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

try {
  navigator.sendBeacon(
    "/api/lead",
    new Blob([JSON.stringify(data)], { type: "application/json" })
  );
} catch (error) {
  console.error("Telegram-varsel feilet:", error);
}
  }}
>
                <input type="hidden" name="_subject" value="Ny forespørsel fra Autovalg" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://autovalg.no/takk" />
                <input type="hidden" name="_redirect" value="true" />

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="field-label">Navn</span>
                    <input type="text" name="navn" placeholder="Ditt navn" className="input" required />
                  </label>
                  <label className="block">
                    <span className="field-label">Telefonnummer</span>
                    <input type="tel" name="telefonnummer" placeholder="(+47) 99 99 99 99" className="input" required />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="field-label">Bilmerke</span>
                    <select name="bilmerke" className="input">
                      {brands.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="field-label">Modell</span>
                    <input type="text" name="modell" placeholder="F.eks. A3, 320d, C-Klasse" className="input" />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="field-label">Årsmodell</span>
                    <select name="arsmodell" className="input">
                      {Array.from(
                        { length: new Date().getFullYear() - 1930 + 1 },
                        (_, i) => new Date().getFullYear() - i
                      ).map((year) => (
                        <option key={year}>{year}</option>
                      ))}
                      <option>Eldre enn 1930</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="field-label">Maks kilometerstand</span>
                    <input type="text" name="maks_kilometerstand" placeholder="300 000 km" className="input" />
                  </label>
                </div>
<div className="grid gap-5 md:grid-cols-2">
  <div className="flex flex-col gap-5">
    <label className="block">
      <span className="field-label">Egenkapital</span>
      <input
        type="text"
        name="egenkapital"
        placeholder="0kr, 10 000kr, osv."
        className="input"
      />
    </label>

    <label className="block">
      <span className="field-label">Innbytte</span>
      <select name="innbytte" className="input">
        <option value="">Velg</option>
        <option value="Ja">Ja</option>
        <option value="Nei">Nei</option>
      </select>
    </label>
  </div>

  <div>
    <label className="block">
      <span className="field-label">Budsjett</span>
      <input
        type="text"
        name="budsjett"
        placeholder="F.eks. 250 000 kr"
        className="input"
      />
    </label>
  </div>
</div>
                <label className="block">
                  <span className="field-label">Andre ønsker</span>
                  <textarea
                    rows={4}
                    name="andre_onsker"
                    placeholder="F.eks: drivstoff (bensin/diesel/el), automat, farge, S line / M-sport, quattro / xDrive, utstyrsnivå, adaptiv cruise, panorama"
                    className="input"
                  />
                </label>

                <div className="text-[11px] text-white/35 tracking-wide">
                  Innsending innebærer samtykke til kontakt og videreformidling.
                </div>

                <button className="w-full bg-[#c9a865] text-black py-3 rounded-xl font-medium tracking-wide hover:opacity-90 transition">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <p className="text-sm text-white/30 max-w-md tracking-[0.01em] leading-relaxed">
            For kjøpere som ønsker en mer strukturert tilnærming til bruktbilmarkedet.
          </p>
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

        .field-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          display: block;
          margin-bottom: 4px;
        }

        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .input {
          width: 100%;
          background: rgba(0,0,0,0.45);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 12px 14px;
          border-radius: 12px;
          color: white;
          font-size: 14px;
          letter-spacing: 0.01em;
        }

        .input::placeholder {
          color: rgba(255,255,255,0.2);
        }

        .input:focus {
          outline: none;
          border-color: rgba(201,168,101,0.5);
        }
      `}</style>
    </div>
  );
}