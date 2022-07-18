import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
  })
export class DateMethod 
{
    public showMSG(time: string|number|Date)  
    {
        return time;
        
    }

    public timeAgo(time: string|number|Date) {

        switch (typeof time) {
          case 'number':
            break;
          case 'string':
            time = +new Date(time);
            break;
          case 'object':
            if (time.constructor === Date) time = time.getTime();
            break;
          default:
            time = +new Date();
        }
        var time_formats = [
          [60, 'Seconds', 1], // 60
          [120, '1 Minute ago', 'In 1 Minute'], // 60*2
          [3600, 'Minutes ago', 60], // 60*60, 60
          [7200, '1 Hour', 'In 1 Hour'], // 60*60*2
          [86400, 'Hours ago', 3600], // 60*60*24, 60*60
          [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
          [604800, 'Days ago', 86400], // 60*60*24*7, 60*60*24
          [1209600, 'Last Week', 'Next Week'], // 60*60*24*7*4*2
          [2419200, 'Weeks', 604800], // 60*60*24*7*4, 60*60*24*7
          [4838400, 'Last Month', 'Next Month'], // 60*60*24*7*4*2
          [29030400, 'Months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
          [58060800, 'Last Year', 'Next Year'], // 60*60*24*7*4*12*2
          [2903040000, 'Years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
        ];
        var seconds = (+new Date() - Number(time)) / 1000, token = '', list_choice = 1;
        if (seconds == 0) {
          return 'Now'
        }
        if (seconds < 0) {
          seconds = Math.abs(seconds);
          token = 'In';
          list_choice = 2;
        }
        var i = 0, format;
        while (format = time_formats[i++])
          if (seconds < format[0]) {
            if (typeof format[2] == 'string')
              return format[list_choice];
            else
             {
              return token + ' ' + Math.floor(seconds / format[2]) + ' ' + format[1];
            }
              
          }
          console.log("res : "+time); return time;
      }
}
