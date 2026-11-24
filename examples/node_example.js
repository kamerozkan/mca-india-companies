// Run mca-india-companies on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "queries": [
    "Alkem",
    "L00305MH1973PLC174201"
  ],
  "maxItems": 5
};
const run = await client.actor('kamerozkan/mca-india-companies').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
