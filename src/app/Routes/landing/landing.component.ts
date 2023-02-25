import { Component } from '@angular/core';
import { serviceCard } from 'src/app/Components/service-card/serviceCard.model';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  serviceContent: serviceCard[] = [
    new serviceCard("../../../assets/malawi.png", "View Fishtanks", "Viewing and managing fishtanks has never been so easy! Keep track of where your tanks are and which scaly friends you have living inside of them! It's just never been this easy!"),
    new serviceCard("../../../assets/Beta.png", "Create Fishtanks", "Not sure what you want to do for a tank? FinFinder can help you create amazing tanks! Pick one of our presets and start building today, if you dont like it, you can add more fish that are compatible!"),
    new serviceCard("../../../assets/puffer.png", "View items", "View your inventory of all items, this includes all of your fish and everything that goes inside of your dream tank! Update quantities of items and manage your own tank like a pro with FinFinder today!")
  ]

}
