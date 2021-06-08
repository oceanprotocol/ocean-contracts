// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "@balancer-labs/v2-vault/contracts/interfaces/IVault.sol";

import "@balancer-labs/v2-pool-utils/contracts/factories/BasePoolFactory.sol";
import "@balancer-labs/v2-pool-utils/contracts/factories/FactoryWidePauseWindow.sol";

import "../WeightedPool.sol";
//import "../../interfaces/IWeightedPoolFactory.sol";

interface IWeightedPoolFactory {



   function create(
        string memory name,
        string memory symbol,
        IERC20[] memory tokens,
        uint256[] memory weights,
        uint256 swapFeePercentage,
        address owner
    ) external returns (address);





}

contract OceanPoolFactory is BasePoolFactory, FactoryWidePauseWindow {
    
    address public owner;
    address public balPoolFactory = 0x8E9aa87E45e92bad84D5F8DD1bff34Fb92637dE9;

    mapping(address => bool) public oceanTokens;


    modifier onlyOwner {
        require(owner == msg.sender, "NOT OWNER");
        _;
    }

    constructor(IVault vault, address _owner) BasePoolFactory(vault) {
        owner = _owner;
        // solhint-disable-previous-line no-empty-blocks
    }

    function getLength(IERC20[] memory array)
        public
        view
        returns (uint256)
    {
        return array.length;
    }


    function addOceanToken(address oceanTokenAddress) external onlyOwner {
        oceanTokens[oceanTokenAddress] = true;
    }
    /**
     * @dev Deploys a new `WeightedPool`. 
     */
    function create(
        string memory name,
        string memory symbol,
        IERC20[] memory tokens,
        uint256[] memory weights,
        address[] memory assetManagers,
        uint256 swapFeePercentage,
        address owner
    ) external returns (address) {
          
        address pool;
        // TODO ADD REQUIRE TO CHECK IF datatoken is on the erc20List => erc20List[datatoken] == true
        
        for (uint256 i = 0; i < getLength(tokens); i++) {
            if (oceanTokens[address(tokens[i])] == true) {
                break;
            } else {
                pool =
                    IWeightedPoolFactory(balPoolFactory).create(
                        name,
                        symbol,
                        tokens,
                        weights,
                        swapFeePercentage,
                        owner
                    );
                require(pool != address(0),'FAILED TO DEPLOY STANDARD POOL');
                _register(pool);
                emit PoolCreated(pool);
                return pool;
            }
        }

        // TODO: CANNOT CREATE A NEW POOL ON THIS CONTRACT. TOO BIG. MOVE IT TO A NEW CONTRACT
       
       (uint256 pauseWindowDuration, uint256 bufferPeriodDuration) = getPauseConfiguration();
       
        pool = address(
            new WeightedPool(
                getVault(),
                name,
                symbol,
                tokens,
                weights,
                assetManagers,
                swapFeePercentage,
                pauseWindowDuration,
                bufferPeriodDuration,
                owner
            )
        );
       
       
       
       
       
       
       
       
       
       
        emit PoolCreated(pool);
        
        _register(pool);
        return pool;
    }
}