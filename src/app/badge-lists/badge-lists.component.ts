import { Component, OnInit, Input } from '@angular/core';
import { Ng2DeviceService } from 'ng2-device-detector';
import { BadgeListsService } from '../badge-lists.service';
@Component({
  selector: 'app-badge-lists',
  templateUrl: './badge-lists.component.pug',
  styleUrls: ['./badge-lists.component.sass']
})
export class BadgeListsComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input() setDefaultFilter;
  public tag_umsatz: number;
  public tag_rohertrag: number;
  public tag_spanne: number;
  public tag_umsatz_v1: number;
  public tag_rohertrag_v1: number;
  public tag_rohertrag_v2: number;
  public tag_spanne_v1: number;
  public monat_umsatz: number;
  public monat_rohertrag: number;
  public monat_spanne: number;
  public monat_umsatz_v1: number;
  public monat_rohertrag_v1: number;
  public monat_rohertrag_v2: number;
  public monat_spanne_v1: number;
  public jahr_umsatz: number;
  public jahr_rohertrag: number;
  public jahr_spanne: number;
  public jahr_umsatz_v1: number;
  public jahr_rohertrag_v1: number;
  public jahr_rohertrag_v2: number;
  public jahr_spanne_v1: number;
  public isMobile: boolean;
  public isTablet: boolean;
  public aspectRation: number;
  public isDesktopDevice: boolean;
  public isLabtop: boolean;
  public innerWidth: number;
  public panelExpanded = true;
  constructor(
    private deviceService: Ng2DeviceService,
    private _BadgListsService: BadgeListsService
  ) { }
  ngOnInit() {
    // this.setDefaultFilter.setFilter(1);
    this._BadgListsService.filterId.subscribe(data => {
      this.tag_umsatz = data[0].badge_value1;
      this.tag_rohertrag = data[0].badge_value2;
      this.tag_spanne = data[0].badge_value3;
      this.monat_umsatz = data[1].badge_value1;
      this.monat_rohertrag = data[1].badge_value2;
      this.monat_spanne = data[1].badge_value3;
      this.jahr_umsatz = data[2].badge_value1;
      this.jahr_rohertrag = data[2].badge_value2;
      this.jahr_spanne = data[2].badge_value3;

      this.tag_umsatz_v1 = this.tag_spanne / 10;
      this.tag_rohertrag_v1 = this.tag_rohertrag / 100;
      this.tag_rohertrag_v2 = this.tag_spanne / 10 + 5;
      this.tag_spanne_v1 = this.tag_spanne / 10 + 2;

      this.monat_umsatz_v1 = this.monat_spanne / 10;
      this.monat_rohertrag_v2 = this.monat_rohertrag / 100;
      this.monat_rohertrag_v1 = this.monat_spanne / 10 + 5;
      this.monat_spanne_v1 = this.monat_spanne / 10 + 2;

      this.jahr_umsatz_v1 = this.jahr_spanne / 10;
      this.jahr_rohertrag_v2 = this.jahr_rohertrag / 100;
      this.jahr_rohertrag_v1 = this.jahr_spanne / 10 + 5;
      this.jahr_spanne_v1 = this.jahr_spanne / 10 + 2;
    });
    // this._BadgListsService.getBadgeList(2).subscribe(
    //   (transformedData: { badge_value1: number, badge_value2: number, badge_value3: number }[]) => {
    //   this.badge_value1 = transformedData.map(data => data.badge_value1);
    //   this.badge_value2 = transformedData.map(data => data.badge_value2);
    //   this.badge_value3 = transformedData.map(data => data.badge_value3);
    //   console.log(this.badge_value1);
    //   console.log(this.badge_value2);
    //   console.log(this.badge_value3);
    // });
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1565 && this.innerWidth > 500) {
      this.isLabtop = true;
    } else {
      this.isLabtop = false;
    }
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    if (this.isTablet || this.isLabtop) {
      this.aspectRation = 3;
    } else if (this.isMobile) {
      this.aspectRation = 1;
    } else {
      this.aspectRation = 4;
    }
    this.isDesktopDevice = this.deviceService.isDesktop();
  }
}
