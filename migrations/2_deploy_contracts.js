const Store = artifacts.require('Store');

module.exports = async (deployer) => {
    const [_feeAmount] = await web3.eth.getAccounts();
    const _name = 'Fresher';
    const _feePercent = 10;
    await deployer.deploy(
        Store,
        _name,
        _feeAmount,
        _feePercent
    );
}