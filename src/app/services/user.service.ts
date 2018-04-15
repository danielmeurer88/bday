import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { VipGroup, Vip, VipOrigin } from '../models/vip.model';
import { Md5 } from 'ts-md5/dist/md5';
import { GROUPS } from '../models/mock-vips';

@Injectable()
export class UserService {

  public user: VipGroup;
  private keyAccess = 'allowAccess';
  public LoginOK = false;

  constructor(private router: Router) {
    if (!this.read()) {
      this.user = new VipGroup('', 0, false, VipOrigin.Unbekannt, new Vip('Benutzer'));
    }
  }

  get usePlural (): boolean { return this.user.usePlural; }
  get useSingular (): boolean { return this.user.useSingular; }
  get fullAccess (): boolean { return this.user.fullAccess; }

  login(pw: string) {
    const hash = Md5.hashStr(pw).toString();
    console.log(`hash for '${pw}' : `, hash);

    // tslint:disable-next-line:prefer-const
    for (let vg of GROUPS) {
      if (hash === vg.hash) {
        this.user = vg;
        this.write(true);
        return true;
      }
    }
    return false;
  }

  getSalutation() { return this.user.getSalutation(); }

  test (): void {
    if (this.read() !== true) {
      this.router.navigate(['login']);
    }
  }

  write( allowed: boolean = false): void {
    if (allowed) {
      console.log('serialize: ' + this.user.serialize());
      localStorage.setItem(this.keyAccess,  this.user.serialize() );
    } else {
      localStorage.setItem(this.keyAccess, '');
    }
    this.LoginOK = allowed;
  }

  read (): boolean {
    const res = localStorage.getItem(this.keyAccess);
    if (res !== null && res.length > 0) {
      this.LoginOK = true;
      console.log('deserialize: ', VipGroup.deserialize(res.toString()) );
      this.user = VipGroup.deserialize(res.toString());
    } else {
      this.LoginOK = false;
    }
    return this.LoginOK;
  }

}
