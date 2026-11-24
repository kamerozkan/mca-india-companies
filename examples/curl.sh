#!/usr/bin/env bash
# Run mca-india-companies synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~mca-india-companies/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"queries": ["Alkem", "L00305MH1973PLC174201"], "maxItems": 5}'
