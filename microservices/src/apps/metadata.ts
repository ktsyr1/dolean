import express from 'express';
import { Request, Response } from 'express';
import axios from 'axios';
import { JSDOM } from 'jsdom';
const router = express.Router();

router.get('/', getMetadata);

export async function getMetadata(req: Request, res: Response) {
    const url = req.query.url as string;
    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        const metadata = await fetchMetadata(url);
        res.status(200).json(metadata);
    } catch (error) {
        console.error("Error fetching metadata:", error);
        res.status(500).json({ error: "Failed to fetch metadata" });
    }
}

export async function fetchMetadata(url: string) {
    const { data: html } = await axios.get(url);
    const { window } = new JSDOM(html);
    const { document } = window;

    return {
        title: document.querySelector("title")?.textContent || "",
        description: document.querySelector('meta[name="description"]')?.getAttribute("content") || "",
        ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute("content") || "",
        ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute("content") || "",
        ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute("content") || "",
    };
}
export default router;