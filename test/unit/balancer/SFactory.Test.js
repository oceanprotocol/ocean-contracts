/* eslint-env mocha */
/* global artifacts, contract, it, assert */
const BPool = artifacts.require('BPool')
const BFactory = artifacts.require('BFactory')
const testUtils = require('../../helpers/utils')

contract('BFactory', async (accounts) => {
    describe('BFactory Tests', () => {
        let factory
        let poolTemplate
        const admin = accounts[0]
        before(async () => {
            poolTemplate = await BPool.new()
            factory = await BFactory.new(poolTemplate.address)
        })

        it('should create new BPool', async () => {
            const txReceipt = await factory.newBPool({ from: admin })
            const sPoolEventArgs = testUtils.getEventArgsFromTx(txReceipt, 'BPoolCreated')
            assert(poolTemplate, sPoolEventArgs._spoolTemplate)
        })

        it('should get BPool', async () => {
            const sPoolTemplate = await factory.getBPool()
            assert(poolTemplate, sPoolTemplate)
        })
    })
})
