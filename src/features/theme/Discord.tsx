"use server";

export async function alertDiscordFeedback(message: string) {
  await fetch(process.env.DISCORD_WEBHOOK_FEEDBACK!, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  });
}

export async function alertDiscordUsers(message: string) {
  await fetch(process.env.DISCORD_WEBHOOK_USERS!, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  });
}
