import { ComponentFixture, TestBed } from "@angular/core/testing";

import { JobAddDialogComponent } from "./job-add-dialog.component";
import { imports } from "src/app/app.module";

describe("JobAddDialogComponent", () => {
  let component: JobAddDialogComponent;
  let fixture: ComponentFixture<JobAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...imports],
      declarations: [JobAddDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
