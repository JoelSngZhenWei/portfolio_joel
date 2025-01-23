import { FormData } from "@/app/contact/page";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  try {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(errorResponse.error || "Failed to send email.");
    }

    return await res.json(); // Ensure we return the JSON response
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message || "An unknown error occurred.");
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
}
