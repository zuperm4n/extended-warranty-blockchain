contractAbi = [{"constant":false,"inputs":[{"name":"customerAddress","type":"address"},{"name":"serialNumber","type":"string"},{"name":"claimDate","type":"uint256"},{"name":"repairShopAddress","type":"address"},{"name":"retailerAddress","type":"address"}],"name":"newClaim","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"customerAddress","type":"address"},{"name":"serialNumber","type":"string"},{"name":"inceptDate","type":"uint256"},{"name":"expiryDate","type":"uint256"},{"name":"retailPrice","type":"uint256"},{"name":"retailerAddress","type":"address"}],"name":"policySale","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"quoteClaim","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"customerAddress","type":"address"},{"name":"serialNumber","type":"string"}],"name":"voidPolicy","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"customerAddress","type":"address"},{"name":"serialNumber","type":"string"}],"name":"getPolicyDetails","outputs":[{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"serialNumber","type":"string"}],"name":"transferPolicy","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"policyID","type":"uint256"}],"name":"getClaimDetails","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"type":"function"}];