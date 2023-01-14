import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Silver Jewellery';
  constructor (private router: Router, private activatedRoute:ActivatedRoute, private titleService: Title,) {
    // this.router.events.pipe(
    //   filter((event: any) => event instanceof NavigationEnd),
    //     map(() => {
    //         let child = this.activatedRoute.firstChild;
    //         while (child) {
    //             if (child.firstChild) {
    //                 child = child.firstChild;
    //             } else if (child.snapshot.data &&    child.snapshot.data['title']) {
    //                 return child.snapshot.data['title'];
    //             } else {
    //                 return null;
    //             }
    //         }
    //         return null;
    //     })
    // ).subscribe( (data: any) => {
    //     if (data) {
    //        // this.chatbot()
    //         this.titleService.setTitle(data);
    //     }
    // });
    
}
}
