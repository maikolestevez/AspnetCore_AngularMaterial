import { Component } from '@angular/core';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls:['./navigation.component.css']
})
export class NavigationComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
