export async function POST(req: Request) {
  try {
    const data = await req.json();

    const message = `
🔥 NY KUNDE – KLAR FOR KJØP

🔁 Innbytte: ${data.innbytte ?? "-"}
🛣️ Kilometerstand: ${data.maks_kilometerstand ?? "-"}

🚘 Bil: ${data.bilmerke ?? "-"} ${data.modell ?? "-"}
📅 Årsmodell: ${data.arsmodell ?? "-"}

👤 Navn: ${data.navn ?? "-"}
📞 Telefon: ${data.telefonnummer ?? "-"}

📝 Annet:
${data.andre_onsker ?? "-"}

⚡ ANBEFALING:
Kontakt kunde raskt – høy sannsynlighet for salg
`.trim();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Mangler TELEGRAM_BOT_TOKEN eller TELEGRAM_CHAT_ID i .env.local");
      return new Response("Manglende Telegram-konfigurasjon", { status: 500 });
    }

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
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