import {Component, OnInit} from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';
@Component({
    selector:'app-member-details',
    templateUrl :'./member-details.component.html',
    styleUrls : ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit{
user: User;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

constructor(
    private route: ActivatedRoute, 
    private userService : UserService, 
    private alertify: AlertifyService) {
}
ngOnInit(){
    this.route.data
    .subscribe(data =>{this.user = data['userResolver'];

    this.galleryOptions=[
        {
            width : '500px',
            height : '500px',
            imagePercent:100,
            thumbnailsColumns : 4,
            imageAnimation: NgxGalleryAnimation.Slide,
            preview : false
        }
    ];

    this.galleryImages=this.getImages();
});


    //this.loadUser();
}
//oldmethod
// loadUser(){
//     this.userService.getUser(+this.route.snapshot.params['id'])
//     .subscribe((user:User)=>{this.user=user;},error=>{
//         this.alertify.error(error);
//     })
// }


getImages(){
    const imageUrls = [];
    for (const photo of this.user.photos) {
        imageUrls.push({
            small: photo.url,
            medium: photo.url,
            big:photo.url,
            description: photo.description
        });
    }

    return imageUrls;

}

}