import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-inputs';
import { PageSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { DataManager, UrlAdaptor, JsonAdaptor, ODataAdaptor, Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-journal-viewer',
  templateUrl: './journal-viewer.component.html',
  styleUrls: ['./journal-viewer.component.css']
})
export class JournalViewerComponent implements OnInit {

  public data: Object[];
  public pageSettings: Object;
  public pageNumber;
  public pageSize;

    @ViewChild("dataGrid")
    dataGrid : GridComponent;

  ngOnInit(): void {
      this.data = data;
      this.pageSettings = { pageSizes: [5, 10, 25, 50, 100], pageSize: 50, pageCount: 4 };
  }

  onActionComplete(args){
    this.pageNumber = args.currentPage;
    this.pageSize  = args.pageSize;
    console.log("onActionComplete: page number : "+this.dataGrid.pageSettings.currentPage);
    console.log("onActionBegin : pageSize : "+this.dataGrid.pageSettings.pageSize);
  }
  onActionBegin(args){
    this.pageNumber = args.currentPage;
    this.pageSize  = args.pageSize;
    console.log("onActionBegin : page number : "+this.dataGrid.pageSettings.currentPage);
    console.log("onActionBegin : pageSize : "+this.dataGrid.pageSettings.pageSize);
  }
}