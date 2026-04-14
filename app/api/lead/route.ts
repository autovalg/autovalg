export async function POST(req: Request) {
  try {
    const data = await req.json();

    const message = `
🚗 Nytt lead

Navn: ${data.navn ?? "-"}
Telefon: ${data.telefonnummer ?? "-"}
Bilmerke: ${data.bilmerke ?? "-"}
Modell: ${data.modell ?? "-"}
Egenkapital: ${data.egenkapital ?? "-"}
`.trim();

    const telegramResponse = await fetch(
      "https://api.telegram.org/bot8215412340:AAEg2bYOsADyCl3OSsfsgSuT5bQ0JUE-3xI/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: 8409152495,
          text: message,
        }),
      }
    );

    const telegramText = await telegramResponse.text();
    console.log("Telegram status:", telegramResponse.status);
    console.log("Telegram response:", telegramText);

    if (!telegramResponse.ok) {
      return new Response(`Telegram-feil: ${telegramText}`, { status: 500 });
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("API-feil:", error);
    return new Response("Serverfeil", { status: 500 });
  }
}