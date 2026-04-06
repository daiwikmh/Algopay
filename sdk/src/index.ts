import { AlgoStackClient } from './client'
import { GasPoolModule } from './modules/gas-pool'
import { AgentsModule } from './modules/agents'
import { PaymentsModule } from './modules/payments'
import { WebhooksModule } from './modules/webhooks'
import { AlgoStackConfig } from './types'

export class AlgoStack {
    readonly gasPool: GasPoolModule
    readonly agents: AgentsModule
    readonly payments: PaymentsModule
    readonly webhooks: WebhooksModule

    constructor(config: AlgoStackConfig) {
        if (!config || typeof config !== 'object') {
            throw new TypeError('AlgoStack: config must be an object')
        }

        const client = new AlgoStackClient(config)

        this.gasPool = new GasPoolModule(client)
        this.agents = new AgentsModule(client)
        this.payments = new PaymentsModule(client)
        this.webhooks = new WebhooksModule(client)

        Object.freeze(this)
    }
}

export { AlgoStackRequestError } from './client'
export * from './types'