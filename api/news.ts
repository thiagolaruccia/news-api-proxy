export default function handler(req, res) {
    const API_KEY = "8467f0ab31504047873c98f5dfa7b16e";
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json({ error: "Erro ao buscar notícias." }));
}export default async function handler(req, res) {
    const API_KEY = "8467f0ab31504047873c98f5dfa7b16e";
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar notícias." });
    }
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const API_KEY = "8467f0ab31504047873c98f5dfa7b16e";
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar notícias." });
    }
}
