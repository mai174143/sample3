import { dog1, dog2 } from "./data/dogData";

on:
  schedule:
    - cron: '*/5 * * * *' # will run every 5 minutes

jobs:
  ping_url:
    runs-on: ubuntu-latest
    name: Ping URL
    steps:
      - name: Check the URL
        id: ping
        uses: soul-wish/ping-url-javascript-action@v1.1
        with:
          url: 'https://google.com'


console.log("---------");
dog1.info();
console.log("---------");
dog2.info();
