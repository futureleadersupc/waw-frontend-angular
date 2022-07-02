import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { CompaniesService } from "./companies.service";

describe("CompaniesService", () => {
  let service: CompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CompaniesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
