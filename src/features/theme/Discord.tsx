"use server";

export async function alertDiscord(message: string) {
  await fetch(process.env.DISCORD_WEBHOOK!, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  });
}
