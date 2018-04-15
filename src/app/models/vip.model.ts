
export class VipGroup {

  hash: string;
  vips: Vip[];
  size: number;

  fullAccess: boolean = false;
  origin: VipOrigin = VipOrigin.Unbekannt;

  get usePlural (): boolean { return this.size > 1; }

  get useSingular (): boolean { return this.size < 2; }

  constructor(hash : string, size: number, fullAccess: boolean, vo: VipOrigin, ...vips:Vip[]) {
    this.hash = hash;
    this.vips = vips;
    this.size = size;
    this.fullAccess = fullAccess;
    this.origin = vo;
  }

  getSalutation(): string {

    let str = ''; let n = this.vips.length;

    if (n===1) return this.vips[0].name;
    if (n===2) return this.vips[0].name + " & " + this.vips[1].name;

    for(let i=0; i<n; i++) {
      str += this.vips[i].name;
      if(i<n-2) {
        str += ", ";
      }
      if(i===n-2) {
        str += " und ";
      }
    }
    return str;
  }

  serialize(): string {
    let str = `${this.hash},${this.size},${this.fullAccess},${Vip.serializeOrigin(this.origin)},`;
    for(let i=0; i<this.vips.length;i++) {
      str += this.vips[i].name;
      if(i<this.vips.length-1) {
        str+=","
      }
    }
    return str;
  };

  static deserialize(str: string): VipGroup {
    const parts = str.split(',');
    let arr:Vip[] = [];
    let v = new VipGroup(parts[0], parseInt(parts[1]), (parts[2]==="true"), Vip.deserializeOrigin(parts[3]) );
    for(let i=4; i<parts.length; i++) {
      v.vips.push(new Vip(parts[i]));
    }
    return v;
  }

}

export class Vip {
  constructor(public name: string) {}

  static serializeOrigin (o: VipOrigin): string {
    return o.toString();
  }
  static deserializeOrigin (str: string): VipOrigin {
    return (parseInt(str) as VipOrigin);
  }
}

export enum VipOrigin {
  Saarland = 1,
  RheinlandPfalz = 2,
  Mainz = 3,
  Lokal = 4,
  Unbekannt = 5
}