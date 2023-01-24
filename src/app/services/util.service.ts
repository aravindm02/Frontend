import { Injectable } from '@angular/core';
import { StaticValues } from 'src/app/static/staticValues';
import { FormService } from './form.service';


@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private constValues = StaticValues.values;
  constructor(
    private form :FormService,
  ) { }

  getStatic(target, key?: any) {
    return key ? this.constValues[target][key] : this.constValues[target];
}

  // get unique based on property
  unique(arr, keyProps) {
    const kvArray = arr.map(entry => {
    const key = keyProps.map(k => entry[k]).join('|');
    return [key, entry];
    });
    const map = new Map(kvArray);
    return Array.from(map.values());
}
// Form service
getForm(type, data?: any) {
  return this.form.getForm(type, data);
}
}
