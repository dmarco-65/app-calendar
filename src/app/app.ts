
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {firstValueFrom} from 'rxjs';
import {UserService} from './core/service/user/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'jdr-app';
  protected data: any = null;


  constructor(private translate: TranslateService, protected userService: UserService) {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
    this.translate.addLangs(['fr', 'en']);
  }


  async testerApiAsync() {
    try {
      this.data = await firstValueFrom(this.userService.testApi());
      console.log('Test réussi:', this.data);
    } catch (erreur) {
      console.error('Erreur lors du test:', erreur);
    }
  }


}
