import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ColumnDefinition } from "src/app/common/model/column-definition";
import { JobOffer } from "../../model/job-offer";
import { JobsService } from "../../services/jobs.service";

@Component({
  selector: "app-jobs-search",
  templateUrl: "./jobs-search.component.html",
  styleUrls: ["./jobs-search.component.css"],
})
export class JobsSearchComponent implements OnInit {
  dataSource = new MatTableDataSource<JobOffer>();
  columns: ColumnDefinition<JobOffer>[] = [
    { key: "id", label: "ID", hidden: true, type: "number" },
    {
      key: "title",
      label: "Title",
      type: "text",
      styles: {
        cellClassName: "w-56",
        containerClassName: "py-2 pr-4",
      },
    },
    {
      key: "description",
      label: "Description",
      type: "text",
      styles: {
        cellClassName: "w-96",
        containerClassName: "py-2 pr-4",
      },
    },
    { key: "salaryRange", label: "Salary Range", type: "text" },
  ];
  displayedColumns = [...this.columns.map(item => item.key), "actions"];

  @ViewChild("jobsForm", { static: false })
  jobsForm!: NgForm;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.getAll();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getAll() {
    this.jobsService.getAll().subscribe(response => {
      this.dataSource.data = response;
    });
  }
  getDisplayableColumn(item: JobOffer, column: ColumnDefinition<JobOffer>) {
    const value = item[column.key];
    if (column.type === "toggle") {
      return (value ? column.trueLabel : column.falseLabel) || value;
    }
    if (column.type === "dropdown") {
      const match = column.options.find(i => i.value === value);
      return match?.label || value;
    }
    return value;
  }
}
