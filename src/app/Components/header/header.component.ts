import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Content } from './headerContent.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('900ms ease-in', style({transform: 'translateX(0%)', opacity: 1}))
      ]),
      transition(':leave', [
        animate('900ms ease-in', style({transform: 'translateX(-100%)', opacity: 0}))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  headerContent: Content[] = [
    new Content("A new World", "Are you tired of feeling like a fish out of water when it comes to managing your fishing tanks? Say goodbye to boring and hello to Finfinder - the ultimate inventory management system for all you fishing enthusiasts out there!"),
    new Content(" ", " "),

    new Content("Explore", "With Finfinder, you're in the driver's seat. You can build your own custom tanks and track your fish with ease. So, whether you're a hardcore angler or a casual hobbyist, Finfinder is the perfect way to dive into the exciting and intriguing world of fishing."),
    new Content("", " "),

   
    new Content("Create", "This innovative system boasts an intuitive interface and powerful features, so you can create tanks that fit your exact needs and preferences. You can go wild and create a natural underwater paradise, or unleash your inner artist and design a one-of-a-kind underwater landscape - the possibilities are endless!"),
    new Content(" ",  " "),

    new Content("Start today!", "Why settle for a one-size-fits-all approach to fishing tanks when you can let your imagination run wild with Finfinder? So, jump in and take your fishing experience to the next level! Give Finfinder a try today and see for yourself what all the fuss is about."),
    new Content(" ", " ")
  ];
  heading: string = this.headerContent[0].Title
  content: string = this.headerContent[0].Content
  index: number = 0
  private interval;
  state = true
  // length = this.headerContent.length

  constructor() {

  }
  ngOnInit() {
    this.interval = setInterval(() => {
      this.index = (this.index + 1) % this.headerContent.length;
      this.heading = this.headerContent[this.index].Title;
      this.content = this.headerContent[this.index].Content;
      this.state = !this.state
    }, 4500)
  };

  ngOnDestroy() {
    clearInterval(this.interval)
  };

}
