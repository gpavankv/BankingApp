import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService{
  static logData(data: any) {
    console.log(data);
  }
}
