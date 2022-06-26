import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/services/auth.service";
import { ProjectsService } from "src/app/auth/services/projects.service";
import { UseUser } from "src/app/auth/hooks/use-user";
import { toLocaleMonth } from "../../utils/months";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent extends UseUser implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    authService: AuthService,
    projectsService: ProjectsService
  ) {
    super(authService, projectsService);
  }

  ngOnInit(): void {
    this.handleUserInit(user => {
      if (user === null) {
        this.router.navigate(["/account/signin"]);
      }
    });
  }

  ngOnDestroy(): void {
    this.handleUserDestroy();
  }

  isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
  }

  getDisplayableDate(date: number) {
    const parsed = new Date(date);
    const month = toLocaleMonth(parsed, true);
    const day = parsed.getDate();
    const year = parsed.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  getDisplayableExpDates = (start: number, end: number | null) => {
    const msgs = { start: "", end: "Present" };
    const startDate = new Date(start);
    msgs.start = `${toLocaleMonth(startDate)} ${startDate.getFullYear()}`;
    if (typeof end === "number") {
      const endDate = new Date(end);
      msgs.end = `${toLocaleMonth(endDate)} ${startDate.getFullYear()}`;
    }
    return `${msgs.start} — ${msgs.end}`;
  };
}
