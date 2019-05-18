import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  @Input()
  public name: string;

  @Input()
  public phraseOne: string;

  @Input()
  public phraseTwo: string;

  ngOnInit() {}

  public async register() {
    console.log("register");
    const result = await this.auth.register(this.name, this.phraseOne);
    if (result) {
      this.router.navigate(["login"]);
    } else {
      alert("Username is already taken.");
    }
  }

  public disableSubmit(): boolean {
    return !(
      this.phraseOne &&
      this.phraseTwo &&
      this.phraseOne === this.phraseTwo &&
      this.name.trim() !== ''
    );
  }
}
