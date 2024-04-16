export async function GET() {
  return new Response(null, {
    status: 301,
    headers: {
      Location: "https://cdn.jabed.dev/resume.pdf",
    },
  });
}
