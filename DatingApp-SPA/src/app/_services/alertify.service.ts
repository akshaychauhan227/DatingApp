import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confirm(messgae: string, okCallback:()=>any)
{
  alertify.confirm(messgae,(e: any)=> {
    if (e) {
      okCallback();
    } else{}
  });
}

  success(message: string){
    alertify.success(message);
  }

  error(message: string){
    alertify.error(message);
  }

  warning(message: string){
    alertify.warning(message);
  }

  message(messsage: string)
  {
    alertify.message(messsage);
  }

}
