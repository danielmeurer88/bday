import { Injectable } from '@angular/core';
import { PasswordUserAssociation } from "./password-user-association";

@Injectable()
export class UserService {

  private _current : PasswordUserAssociation;

  set Current (cur : PasswordUserAssociation) {
    this._current = cur;
  }

  constructor() { }

  isPlural () : boolean {
    return this._current.NumberOfPersons > 1;
  }

  getName () : string {
    switch(this._current.NumberOfPersons) {
      case 1 : return this._current.Names[0];
      case 2 : return this._current.Names[0] + " & " + this._current.Names[1];
      default : {
        let str = "";
        for(let i=0; i<this._current.Names.length; i++) {

          if (i > 0) {
            if (i < this._current.Names.length - 1)
              str+= ", ";
            if (i === this._current.Names.length - 1)
              str+= " und ";
          }

          str += this._current.Names[i];
        }//for-end
        return str;
      } // default-end
    } // switch-end
  }

}
