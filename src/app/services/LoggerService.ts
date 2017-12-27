import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService{
  logData(data: any) {
    console.log(data);
  }
}
