import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class ProfileComponent {
  user = {
    name: 'Antonio Luyindula',
    email: 'antonio@email.com',
    role: 'Pasteur',
    bio: 'Serviteur de Dieu passionné par l’enseignement et la croissance spirituelle.',
  };

  editProfile() {}
}
