## `FixedRateExchange`



FixedRateExchange is a fixed rate exchange Contract
Marketplaces uses this contract to allow consumers 
exchanging datatokens with ocean token using a fixed 
exchange rate.

### `onlyActiveExchange(bytes32 exchangeId)`





### `onlyExchangeOwner(bytes32 exchangeId)`






### `create(address baseToken, address dataToken, uint256 fixedRate)` (external)



create
creates new exchange pairs between base token
(ocean token) and data tokens.


### `generateExchangeId(address baseToken, address dataToken, address exchangeOwner) → bytes32` (public)



generateExchangeId
creates unique exchange identifier for two token pairs.


### `swap(bytes32 exchangeId, uint256 dataTokenAmount)` (external)



swap
atomic swap between two registered fixed rate exchange.


### `getNumberOfExchanges() → uint256` (external)



getNumberOfExchanges
gets the total number of registered exchanges


### `setRate(bytes32 exchangeId, uint256 newRate)` (external)



setRate
changes the fixed rate for an exchange with a new rate


### `activate(bytes32 exchangeId)` (external)



activate
sets exchange status to active to true (only called by exchagne owner)


### `deactivate(bytes32 exchangeId)` (external)



deactivate
sets exchange status to active to false (only called by exchagne owner)


### `getRate(bytes32 exchangeId) → uint256` (external)



getRate
gets the current fixed rate for an exchange


### `getExchange(bytes32 exchangeId) → address exchangeOwner, address dataToken, address baseToken, uint256 fixedRate, bool active` (external)



getExchange
gets all the exchange details


### `getExchanges() → bytes32[]` (external)



getExchanges
gets all the exchange list


### `isActive(bytes32 exchangeId) → bool` (external)



isActive
checks whether exchange is active



### `ExchangeCreated(bytes32 exchangeId, address baseToken, address dataToken, address exchangeOwner, uint256 fixedRate)`





### `ExchangeRateChanged(bytes32 exchangeId, address exchangeOwner, uint256 newRate)`





### `ExchangeActivated(bytes32 exchangeId, address exchangeOwner, uint256 timestamp)`





### `ExchangeDeactivated(bytes32 exchangeId, address exchangeOwner, uint256 timestamp)`





### `Swapped(bytes32 exchangeId, address by, uint256 baseTokenSwappedAmount, uint256 dataTokenSwappedAmount)`




