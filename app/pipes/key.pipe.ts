import { Component, Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'key' })
export class KeyPipe implements PipeTransform {
    transform(value, args: string[]): string {
        return  args[value];
    }
}

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (var enumMember in value) {
      var isValueProperty = parseInt(enumMember, 10) >= 0
      if (isValueProperty) {
        keys.push({key: enumMember, value: value[enumMember]});
        console.log("enum member: ", value[enumMember]);
      } 
  
    //for (let key in value) {
    //  keys.push({key: key, value: value[key]);
    }
    return keys;
  }
}