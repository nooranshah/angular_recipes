import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnChanges, SimpleChanges } from '@angular/core';
import { SocialCardType } from 'src/app/constants/social-card-type';
import { FbCardComponent } from '../fb-card/fb-card.component';
import { TwitterCardComponent } from '../twitter-card/twitter-card.component';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit,OnChanges {
  @Input() type;
  cardTypes = SocialCardType;
  @ViewChild('vrf', {read: ViewContainerRef}) vrf:  ViewContainerRef;
  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.type.currentValue !==undefined)
    this.loadDinamicallyComponent(changes.type.currentValue);
    console.log(`card type changed to: ${changes.type.currentValue}`)
  }

  ngOnInit(): void {
  }

  loadDinamicallyComponent(type:SocialCardType){
    let component;
    switch(type){
      case SocialCardType.Facebook:
        component = FbCardComponent
      break;
      case SocialCardType.Twitter:
        component=TwitterCardComponent;
        break;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.vrf.clear();
    this.vrf.createComponent(componentFactory);
  }

  


}
