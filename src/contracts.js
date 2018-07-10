import contract from 'truffle-contract';
import Network from './network';

export async function getKeepRandomBeacon(address) {

  const code = await Network.getCode(address);
  if (!code || code === '0x0' || code === '0x') throw Error('No contract at address');

  const KeepRandomBeacon = contract(require('contracts/KeepRandomBeacon.json'));
  const provider = await Network.provider();
  KeepRandomBeacon.setProvider(provider);
  return KeepRandomBeacon.at(address);
}

export async function getKeepRandomBeaconImplementation(address) {

  const code = await Network.getCode(address);
  if (!code || code === '0x0' || code === '0x') throw Error('No contract at address');

  const KeepRandomBeaconImplementation = contract(require('contracts/KeepRandomBeaconStub.json'));
  const provider = await Network.provider();
  KeepRandomBeaconImplementation.setProvider(provider);
  return KeepRandomBeaconImplementation.at(address);
}
