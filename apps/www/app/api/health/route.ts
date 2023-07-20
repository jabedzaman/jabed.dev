export async function GET(request: Request) {
    const res = await fetch('https://api.jabed.dev/api/v1/health');
    const data = await res.json();
    return new Response(JSON.stringify(data), {
        headers: { 'content-type': 'application/json' },
    });

}