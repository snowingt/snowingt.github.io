const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

export default async (req, res) => {
res.status(200).json({ name: 'hola' })

    
}