
import { Vip, VipGroup, VipOrigin } from './vip.model';

export const GROUPS: VipGroup[] = [
  new VipGroup('a155acabfd34d06a43956b34213c64cd', 1, true,  VipOrigin.Lokal, new Vip('mein Blümchen')), // my nickname for her
  new VipGroup('e531c23e8b55dd02f1b700dcd8fa7268', 2, true, VipOrigin.Lokal, new Vip('Andrea'), new Vip('Stephan')), // 'duhaggada'
  new VipGroup('098f6bcd4621d373cade4e832627b4f6', 2, false, VipOrigin.Unbekannt, new Vip('Unbe'), new Vip('Kannt')), // test
  new VipGroup('e674fd33daa60f283b13ac4fa04e6f50', 2, false, VipOrigin.Mainz, new Vip('Freddy'), new Vip('Michi')), // fremi
  new VipGroup('fe36f5ec4b5f83d12a9bec894b3eaca4', 1, false, VipOrigin.Mainz, new Vip('Amina')), // her passion and her name in one nickname
  new VipGroup('3d4c18d387dbe70ebdc25949b149a789', 3, false, VipOrigin.Mainz, new Vip('Johannes')), // Johannes Heucher
  new VipGroup('e69e86dc90cee4038f31ae81b40a88fb', 3, false, VipOrigin.Mainz, new Vip('Sebastian')), // Sebastian Brummer

];
