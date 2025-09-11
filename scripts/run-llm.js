import fs from 'fs/promises';
import fetch from 'node-fetch';

async function main() {
  const systemPrompt = await fs.readFile('docs/ENGINEER_CONTEXT.md', 'utf8');
  const userPrompt =
    process.argv.slice(2).join(' ') || 'Summarize the repo rules.';

  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY not set in environment');
    process.exit(1);
  }

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      max_tokens: 1200,
    }),
  });
  const body = await res.json();
  console.log(
    body.choices?.[0]?.message?.content ?? JSON.stringify(body, null, 2)
  );
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
