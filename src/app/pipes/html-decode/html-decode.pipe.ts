import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlDecode',
})
export class HtmlDecodePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    var e: any = document.createElement('textarea');
    e.innerHTML = value;
    // handle case of empty input
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  }
}
