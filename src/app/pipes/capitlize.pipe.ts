import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitlize"
})
export class CapitlizePipe implements PipeTransform {
  transform(value: any): any {
    let finalString = "";
    for (let str of value.split(" ")) {
      finalString += str.trim().charAt(0).toUpperCase() + str.slice(1) + " ";
    }
    return finalString;
  }
}
