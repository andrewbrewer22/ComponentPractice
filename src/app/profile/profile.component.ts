import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: any = {
    profileImage: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    name: 'Andrew Brewer',
    location: 'Lubbock, TX',
    reviews: 1337
  };

  constructor() { }

  ngOnInit(): void {
  }

}
