import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import { JSDOM } from 'jsdom';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => res.send("API is running"));

app.get("/api/metadata", async (req: Request, res: Response) => {
    const url = req.query.url as string;
    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        const { data: html } = await axios.get(url);
        const { window } = new JSDOM(html);
        const { document } = window;

        const metadata = {
            title: document.querySelector("title")?.textContent || "",
            // description: document.querySelector('meta[name="description"]')?.getAttribute("content") || "",
            // ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute("content") || "",
            // ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute("content") || "",
            ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute("content") || "",
        };

        res.status(200).json(metadata);
    } catch (error) {
        console.error("Error fetching metadata:", error);
        res.status(500).json({ error: "Failed to fetch metadata" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));