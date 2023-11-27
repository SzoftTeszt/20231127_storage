import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FileListComponent } from './file-list/file-list.component';
import { Environments } from './environments';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    FileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(Environments.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
