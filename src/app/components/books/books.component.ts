import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';
import BooksData from 'src/app/core/example-data.json';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements AfterViewInit {
  tableColumns = [
    'id',
    'displayImage',
    'title',
    'displayType',
    'link',
    'author',
    'publishers',
    'createdAt',
    'updatedAt',
  ];

  tableData = new MatTableDataSource(
    BooksData.data.map(item => ({
      id: item.id,
      title: item.attributes.content,
      link: item.links.self,
      displayImage: item.attributes.display_properties.image,
      displayType: item.attributes.display_properties.type,
      author: item.relationships.authors.links.self,
      publishers: item.relationships.publishers.links.self,
      createdAt: item.attributes.created_at,
      updatedAt: item.attributes.updated_at,
    }))
  );

  constructor() {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.tableData.sort = this.sort;
  }

  filterData(value: any) {
    if (value && typeof value === 'string') {
      this.tableData.filter = value.trim().toLocaleLowerCase();
    }
  }
}
