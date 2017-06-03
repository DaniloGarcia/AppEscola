import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  groups: any = [];

  constructor(public navCtrl: NavController) {
    /*
    for (var i=0; i<10; i++) {
      this.groups[i] = {
        name: i,
        items: [],
        show: false
      };
      for (var j=0; j<3; j++) {
        this.groups[i].items.push(i + '-' + j);
      }
    }

    console.log(this.groups);
    */
  }

  /*
  toggleGroup = function(group) {
    console.log(group.show);
    group.show = !group.show;
  };
  isGroupShown = function(group) {
    return group.show;
  };
  */

}
