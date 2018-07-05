import contract from 'truffle-contract';
import Network from './network';

export async function getKeepRandomBeacon(address) {
  const KeepRandomBeacon = contract(require('contracts/KeepRandomBeacon.json'));
  const provider = await Network.provider();
  KeepRandomBeacon.setProvider(provider);
  return KeepRandomBeacon.at(address);
}

export async function getKeepRandomBeaconImplementation(address) {
  const KeepRandomBeaconImplementation = contract(require('contracts/KeepRandomBeaconStub.json'));
  const provider = await Network.provider();
  KeepRandomBeaconImplementation.setProvider(provider);
  return KeepRandomBeaconImplementation.at(address);
}
