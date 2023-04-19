# PoC repo to reproduce error

1. `yarn` and `npm install wrangler`
2. in one terminal run `npx wrangler dev --local`
3. in the second terminal run `curl localhost:10005`

### My hypothesis of why this is happening

[@ethersproject/providers](https://www.npmjs.com/package/@ethersproject/providers) (which I assume you use)
had this type of behavior in my previous experience with CF workers.


I switched my functionality to latest (v6) [ethers](https://www.npmjs.com/package/ethers)
and it solved this issue for me.
