export const revalidate = 86400;

export async function GET(req: Request) {
  const apiKey = process.env.NINJAS_API_KEY;
  try {
    const fresh = new URL(req.url).searchParams.get("fresh") === "1";
    let res: Response;

    if (fresh) {
      res = await fetch(
        "https://api.api-ninjas.com/v2/randomquotes?categories=wisdom",
        {
          headers: apiKey ? { "X-Api-Key": apiKey } : undefined,
          cache: "no-store" as RequestCache
        }
      );
    } else {
      res = await fetch(
        "https://api.api-ninjas.com/v2/randomquotes?categories=wisdom",
        {
          headers: apiKey ? { "X-Api-Key": apiKey } : undefined,
          next: { revalidate }
        }
      );
    }
    let quoteText = "";
    let quoteAuthor = "";
    if (res.ok) {
      const data = await res.json();
      const item = Array.isArray(data) ? data[0] : data;
      quoteText = item?.quote ?? item?.content ?? "";
      quoteAuthor = item?.author ?? "";
    }

    if (!quoteText) {
      const fallback = await fetch(
        "https://api.api-ninjas.com/v2/quoteoftheday",
        {
          headers: apiKey ? { "X-Api-Key": apiKey } : undefined,
          cache: fresh ? ("no-store" as RequestCache) : undefined,
          next: fresh ? undefined : { revalidate }
        }
      );
      if (fallback.ok) {
        const fd = await fallback.json();
        const item = Array.isArray(fd) ? fd[0] : fd;
        quoteText = item?.quote ?? "";
        quoteAuthor = item?.author ?? "";
      }
    }

    if (quoteText) {
      return Response.json({ quote: quoteText, author: quoteAuthor });
    }
  } catch {
    return Response.json({
      quote: "",
      author: ""
    });
  }
  return Response.json({
    quote: "",
    author: ""
  });
}
