import { Component } from "@angular/core";

@Component({
    selector: "app-loading-spinner",
    template: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
    styleUrls: ["./loading-spnner.component.css"]
})
export class LoadingSpinnerComponent {

}