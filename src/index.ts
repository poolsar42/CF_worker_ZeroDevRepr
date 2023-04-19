import { getZeroDevSigner } from '@zerodevapp/sdk'
import { Wallet } from '@ethersproject/wallet'

export default {
  async fetch(request: Request): Promise<Response> {
    try {
      // Define your Ethereum provider endpoint (e.g., using Alchemy or Infura)
      const owner = Wallet.createRandom()

      const smartContractWallet = await getZeroDevSigner({
        projectId: '7da9baf5-db12-41b7-8e4a-2031d22e1dd2',
        owner,
      })

      const smartContractWalletAddress = await smartContractWallet.getAddress()

      console.log(
        `Deployment successful! Contract Address: ${smartContractWalletAddress}`
      )
    } catch (error) {
      console.error(`Error: ${error}`)
    }

    return new Response(null)
  },
}
