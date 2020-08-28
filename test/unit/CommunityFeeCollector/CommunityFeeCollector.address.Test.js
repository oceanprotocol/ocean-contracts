/* eslint-env mocha */
/* global artifacts, contract, it, before, web3 */
const CommunityFeeCollector = artifacts.require('CommunityFeeCollector')
const Template = artifacts.require('DataTokenTemplate')
const DTFactory = artifacts.require('DTFactory')
const Token = artifacts.require('DataTokenTemplate')
const testUtils = require('../../helpers/utils')
const truffleAssert = require('truffle-assertions')
const BigNumber = require('bn.js')
const { assert } = require('chai')

/* FLow:
   1. Owner changes the collector to another address
   2. Alice creates datatoken
   3. Alice mints datatokens
   4. Alice transfers datatokens to the CommunityFeeCollector
   5. Bob triggers a withdraw from CommunityFeeCollector
   6. Bob tries to change the collector in CommunityFeeCollector

   */
contract('CommunityFeeCollector', async (accounts) => {
    let cap,
        factory,
        template,
        comfeecollector,
        tokenAddress,
        alice,
        bob,
        charlie,
        dave,
        owner,
        blob,
        datatoken
    const amountOfMintedTokens = 10
    const amountOfTokens = 2

    before('init contracts for each test', async () => {
        blob = 'https://example.com/dataset-1'
        owner = accounts[0]
        alice = accounts[1]
        bob = accounts[2]
        charlie = accounts[3]
        dave = accounts[4]
        cap = new BigNumber(web3.utils.toWei('1400000000'))
        comfeecollector = await CommunityFeeCollector.new(dave)
        template = await Template.new('Template', 'TEMPLATE', alice, cap, blob, comfeecollector.address)
        factory = await DTFactory.new(template.address, comfeecollector.address)
        // Bob creates basetokens
        const trxReceipt = await factory.createToken(blob, {
            from: alice
        })
        const TokenCreatedEventArgs = testUtils.getEventArgsFromTx(trxReceipt, 'TokenCreated')
        tokenAddress = TokenCreatedEventArgs.newTokenAddress
        datatoken = await Token.at(tokenAddress)
    })
    it('Owner should change the collector in CommunityFeeCollector', async () => {
        truffleAssert.passes(await comfeecollector.changeCollector(charlie, { from: owner }))
    })
    it('Alice should mint some datatokens', async () => {
        truffleAssert.passes(await datatoken.mint(alice, amountOfMintedTokens, { from: alice }))
    })
    it('Alice should transfer datatokens to CommunityFeeCollector', async () => {
        truffleAssert.passes(await datatoken.transfer(comfeecollector.address, amountOfTokens, { from: alice }))
        const feeContractBalance = parseFloat(web3.utils.fromWei(await datatoken.balanceOf(comfeecollector.address)))
        assert(feeContractBalance > 0)
    })
    it('Bob should trigger a withdraw from CommunityFeeCollector', async () => {
        let charlieBalance = parseFloat(web3.utils.fromWei(await datatoken.balanceOf(charlie)))
        assert(charlieBalance === 0)
        await comfeecollector.withdrawToken(tokenAddress, { from: bob })
        charlieBalance = parseFloat(await datatoken.balanceOf(charlie))
        assert(charlieBalance === amountOfTokens)
    })
    it('Bob should fail to change the collector in CommunityFeeCollector', async () => {
        truffleAssert.reverts(await comfeecollector.changeCollector(dave, { from: bob }), 'Not the owner')
    })
})