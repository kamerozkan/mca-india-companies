"""Run mca-india-companies on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'queries': ['Alkem', 'L00305MH1973PLC174201'], 'maxItems': 5}
run = client.actor("kamerozkan/mca-india-companies").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
