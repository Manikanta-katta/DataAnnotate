import './polyfills';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { OnboardedCardComponent } from './cards/onboarded-card/onboarded-card.component';
import { ProfileCardComponent } from './cards/profile-card/profile-card.component';
import { UserCardComponent } from './cards/user-card/user-card.component';
import { UsercardComponent } from './userscard/usercard.component';
import { AdduserComponent } from './adduser/adduser.component';
import { CrowdcountComponent } from './crowd/crowdcount/crowdcount.component';
import { CrowdoverallComponent } from './crowd/crowdoverall/crowdoverall.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  entryComponents: [],
  declarations: [
    // FooterComponent,
    // UsercardComponent,
    // AdduserComponent,
  
    CrowdcountComponent,
    CrowdoverallComponent
  ],
  bootstrap: [],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
