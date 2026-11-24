# India MCA Company Scraper - CIN, Directors & Registry Data

Extract Indian MCA company master data by CIN, name, state, or industry. Get status, incorporation date, share capital, registered address, corporate email, and directors without login or proxies.

**[Run it on Apify Store](https://apify.com/kamerozkan/mca-india-companies)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/mca-india-companies); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/mca-india-companies).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/mca-india-companies) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "queries": [
    "Alkem",
    "L00305MH1973PLC174201"
  ],
  "maxItems": 5
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Use in n8n & Make

- **n8n:** Import [integrations/n8n-workflow.json](integrations/n8n-workflow.json) directly into your n8n workspace, set your `APIFY_TOKEN` environment variable (or Bearer token header), and click **Execute Workflow**.
- **Make / Zapier:** Call the Apify **Run an Actor** module with Actor ID `kamerozkan/mca-india-companies` and the JSON input above, or POST to `https://api.apify.com/v2/acts/kamerozkan~mca-india-companies/run-sync-get-dataset-items`.

## Use with AI Agents (Apify MCP)

This Actor works with Claude Desktop, Cursor, Windsurf and any MCP-compatible AI agent through the official [Apify MCP Server](https://mcp.apify.com). Copy [integrations/mcp-config.json](integrations/mcp-config.json) into your MCP client configuration and replace `YOUR_APIFY_TOKEN` with your token.

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "cin": "U72000DL2004PTC124396",
    "name": "LIFE TIME BUILDWELL PRIVATE LIMITED.",
    "status": "Active",
    "companyType": "Private",
    "companySubType": "Non-government Company",
    "state": "Delhi",
    "incorporationDate": "03 February, 2004",
    "incorporationYear": 2004,
    "authorisedCapital": "₹ 2.0 L",
    "paidUpCapital": "₹ 1.1 L",
    "lastAgmDate": "30 November, 2021",
    "companyEmail": "contact@example.com",
    "website": "",
    "registeredAddress": "H-5, GROUND FLOOR, LAJPAT NAGAR-I NEW DELHI-110024 NEW DELHI Delhi - 110024",
    "operatingRevenueRange": "",
    "ebitdaChange": "",
    "netWorthChange": "",
    "updatedAt": "11 Nov 2026",
    "summary": "Life Time Buildwell Private Limited., is an unlisted private company incorporated on 03 February, 2004. It is classified as a private limited company and is located in New Delhi, Delhi. It's authorized share capital is INR 2.00 lac and the total paid-up capital is INR 1.11 lac. The current status of Life Time Buildwell Private Limited. is - Active. The last reported AGM (Annual General Meeting) of Life Time Buildwell Private Limited., per our records, was held on 30 November, 2021. The company has three directors - Renu Sharma, Rohan Dua, and Hrishik Dua. The Corporate Identification Number (C",
    "directorsCount": 3,
    "chargesCount": 0,
    "sourceUrl": "https://www.tofler.in/life-time-buildwell-private-limited/company/U72000DL2004PTC124396",
    "directors": [
      {
        "designation": "Director",
        "name": "Renu Sharma",
        "din": "02629703",
        "tenure": "18 years"
      },
      {
        "designation": "Director",
        "name": "Rohan Dua",
        "din": "03543265",
        "tenure": "15 years"
      },
      {
        "designation": "Director",
        "name": "Hrishik Dua",
        "din": "07109092",
        "tenure": "11 years"
      }
    ],
    "charges": []
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/mca-india-companies/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
