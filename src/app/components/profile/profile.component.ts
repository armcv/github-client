import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile('armcv').then(res => {
      const { status, data } = res;
      if(status === 200){
        console.log(data);
        this.profile.id = data.id;
        this.profile.avatar = data.avatar_url;
        this.profile.login = data.login;
        this.profile.bio = data.bio;
        this.profile.name = data.name;
      }
    });

  }

}
