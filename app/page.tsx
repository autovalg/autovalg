"use client";

export default function TryggBruktbilLanding() {
  const brands = [
    "Audi",
    "BMW",
    "Mercedes-Benz",
    "Toyota",
    "Volkswagen",
    "Volvo",
    "Ford",
    "Nissan",
    "Mazda",
    "Kia",
    "Hyundai",
    "Skoda",
    "Peugeot",
    "Renault",
    "Opel",
    "Tesla",
    "Porsche",
    "Jaguar",
    "Land Rover",
    "Lexus",
    "Mini",
    "Honda",
    "Suzuki",
    "Subaru",
    "Mitsubishi",
    "Chevrolet",
    "Dodge",
    "Chrysler",
    "Jeep",
    "Fiat",
    "Alfa Romeo",
    "Citroën",
    "Seat",
    "Cupra",
    "Polestar",
    "Annet",
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040404] text-white font-['Inter',sans-serif] antialiased">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.18] sm:opacity-[0.2]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop')",
            backgroundPosition: "center center",
          }}
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,101,0.12),transparent_45%)]" />
      </div>

      <header className="relative border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
          <div className="min-w-0">
            <div className="eyebrow text-[#c9a865]/80">Bilformidling</div>
            <div className="premium-heading text-[1.35rem] font-medium tracking-wide sm:text-2xl">
              Autovalg
            </div>
          </div>

          <a
            href="/om-oss"
            className="shrink-0 rounded-full border border-[#c9a865]/40 px-4 py-2 text-[12px] tracking-wide text-[#e7d2a2] transition hover:bg-[#c9a865] hover:text-black sm:px-5 sm:text-sm"
          >
            Om oss
          </a>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:py-24">
          <div className="max-w-2xl">
            <div className="eyebrow mb-5 text-[#c9a865]/70 sm:mb-6">
              Autovalg - skiller klinten fra hveten
            </div>

            <h1 className="premium-heading text-[2.55rem] font-semibold leading-[0.98] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.02]">
              Vi selger bilen <span className="text-[#d8b36a]">for deg</span>
            </h1>

            <p className="mt-5 max-w-[30rem] text-[15px] leading-[1.8] tracking-[0.01em] text-white/55 sm:mt-6">
              Du beskriver den. Vi selger den.
            </p>

            <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-3 sm:gap-4">
              {[
                [
                  "Diskré",
                  "Ingen unødvendig kontakt. Vi går ikke rundt grøten.",
                ],
                ["Trygt", "Kun relevante, norske og klare forhandlere."],
                ["Effektivt", "Garantert respons på under timen (7-23)."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/6 bg-white/[0.02] p-4 sm:border-0 sm:bg-transparent sm:p-0"
                >
                  <div className="eyebrow mb-2 text-[#c9a865]">{title}</div>
                  <p className="text-[13px] leading-relaxed text-white/50">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#c9a865]/10 blur-3xl sm:-inset-6" />
            <div className="relative rounded-[1.6rem] border border-white/10 bg-black/65 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.75)] backdrop-blur sm:rounded-[2rem] sm:p-8">
              <div className="mb-5 sm:mb-6">
                <div className="eyebrow text-[#c9a865]">Skjema</div>
                <h2 className="premium-heading mt-2 text-lg font-medium tracking-[-0.01em] sm:text-xl">
                  Oppgi preferanser
                </h2>
              </div>

              <form
                id="skjema"
                className="space-y-4 sm:space-y-5"
                action="https://formsubmit.co/vmedia@sysdev.no"
                method="POST"
                onSubmit={(e) => {
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const data = Object.fromEntries(formData.entries());

                  try {
                    navigator.sendBeacon(
                      "/api/lead",
                      new Blob([JSON.stringify(data)], {
                        type: "application/json",
                      })
                    );
                  } catch (error) {
                    console.error("Telegram-varsel feilet:", error);
                  }
                }}
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Ny forespørsel fra Autovalg"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://autovalg.no/takk"
                />
                <input type="hidden" name="_redirect" value="true" />

                <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="field-label">Navn</span>
                    <input
                      type="text"
                      name="navn"
                      placeholder="Ditt navn"
                      className="input"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="field-label">Telefonnummer</span>
                    <input
                      type="tel"
                      name="telefonnummer"
                      placeholder="(+47) 99 99 99 99"
                      className="input"
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
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
                    <input
                      type="text"
                      name="modell"
                      placeholder="F.eks. A3, 320d, C-Klasse"
                      className="input"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="field-label">Årsmodell</span>
                    <select name="arsmodell" className="input">
                      {Array.from(
                        { length: currentYear - 1930 + 1 },
                        (_, i) => currentYear - i
                      ).map((year) => (
                        <option key={year}>{year}</option>
                      ))}
                      <option>Eldre enn 1930</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="field-label">Kilometerstand</span>
                    <input
                      type="text"
                      name="maks_kilometerstand"
                      placeholder="300 000 km"
                      className="input"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="field-label">Innbytte</span>
                  <select name="innbytte" className="input">
                    <option value="">Velg</option>
                    <option value="Ja">Ja</option>
                    <option value="Nei">Nei</option>
                  </select>
                </label>

                <label className="block">
                  <span className="field-label">Annet</span>
                  <textarea
                    rows={4}
                    name="andre_onsker"
                    placeholder="F.eks: drivstoff (bensin/diesel/el), automat, farge, S line / M-sport, quattro / xDrive, utstyrsnivå, adaptiv cruise, panorama"
                    className="input min-h-[120px] resize-none"
                  />
                </label>

                <div className="text-[11px] leading-relaxed tracking-wide text-white/35">
                  Innsending innebærer samtykke til kontakt og videreformidling.
                </div>

                <button className="min-h-[52px] w-full rounded-xl bg-[#c9a865] py-3 text-base font-medium tracking-wide text-black transition hover:opacity-90 active:scale-[0.995]">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
          <p className="max-w-md text-sm leading-relaxed tracking-[0.01em] text-white/30">
            For selgere som ønsker en mer strukturert tilnærming til
            bruktbilmarkedet.
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
          display: block;
          margin-bottom: 6px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .input {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(0, 0, 0, 0.45);
          padding: 13px 14px;
          color: white;
          font-size: 16px;
          letter-spacing: 0.01em;
          transition: border-color 0.2s ease, background 0.2s ease,
            box-shadow 0.2s ease;
          -webkit-appearance: none;
          appearance: none;
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.22);
        }

        .input:focus {
          outline: none;
          border-color: rgba(201, 168, 101, 0.5);
          box-shadow: 0 0 0 1px rgba(201, 168, 101, 0.2);
          background: rgba(0, 0, 0, 0.55);
        }

        @media (min-width: 640px) {
          .input {
            font-size: 14px;
            padding: 12px 14px;
          }
        }
      `}</style>
    </div>
  );
}