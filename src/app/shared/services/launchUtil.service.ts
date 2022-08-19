import { Injectable } from "@angular/core";
import * as dayjs from 'dayjs'

@Injectable({
  providedIn: 'root'
})
export class LaunchUtilService {

  private launchStatusList: { abbrev: string }[] =
    [
      { abbrev: 'Hold' },
      { abbrev: 'In Flight' },
      { abbrev: 'Partial Failure' },
      { abbrev: 'Failure' },
      { abbrev: 'Success' },
      { abbrev: 'TBD' },
      { abbrev: 'Go' },
      { abbrev: 'TBC' }
    ];

  getBadgeColor(statusAbbrev: string): string {
    if (statusAbbrev != null) {
      let filteredAbbrev = this.launchStatusList.filter(item => item.abbrev.toLowerCase() === statusAbbrev.toLowerCase()).map(item => item.abbrev.toLowerCase())[0];
      switch (filteredAbbrev) {
        case 'tbc':
        case 'tbd':
        case 'hold':
          return 'warning';
        case 'in flight':
        case 'go':
        case 'success':
          return 'success';
        case 'partial failure':
        case 'failure':
          return 'danger';
        default:
          return 'primary';
      }
    }
  }

  getLastMonthName(): string {
    let pastMonth = dayjs().subtract(1,'month').format('MMMM');
    return pastMonth;
  }

  getLastYear(): string {
    let pastyear = dayjs().subtract(1,'month').format('YYYY');
    return pastyear;
  }

  getStatColor(value: string): string {
    switch (value) {
        case "total":
            return "primary";
        case "crewed":
            return "black";
        case "failed":
            return "danger";
        case "success":
            return "success";
        default:
            return "black"
    }
}
}