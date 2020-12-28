<h1 align="center">Back Button Hook</h1>
<p align="center">This library was designed to call registered hook functions when the back button was pressed by user..</p>

<p align="center">
  <img src="https://badgen.net/npm/v/@rebase-team/back-button-hook"/> 
  <img src="https://badgen.net/npm/dt/@rebase-team/back-button-hook"/>
  <img src="https://badgen.net/npm/license/@rebase-team/back-button-hook"/>
  <img src="https://badgen.net/npm/types/@rebase-team/back-button-hook"/>
  <img src="https://badgen.net/badge/author/MurylloEx/red?icon=label"/>
</p>

You will need (>= Angular 9) to use this library and an Ionic project (>= v3).

## Installation

```sh
npm install @rebase-team/back-button-hook
```

## Usage examples

``> APP.MODULE.TS``
```typescript
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BackButtonHookService } from "@rebase-team/back-button-hook";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [
    BackButtonHookService
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
```

``> APP.COMPONENT.TS``
```typescript
import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { BackButtonHookService } from "@rebase-team/back-button-hook";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private backButton: BackButtonHookService
  ) {
    this.backButtonRegister();
  }

  private backButtonRegister(): void {
    this.backButton.Hook.CreateCallback(async () => {
      let url = this.platform.url().toUpperCase();
      console.log('Back Button triggered on route: ' + url);
    });
    this.backButton.Hook.Hook();
  }
}
```

## Metadata

Muryllo Pimenta de Oliveira – muryllo.pimenta@upe.br

Distribuído sobre a licença MIT. Veja ``LICENSE`` para mais informações.

## Contributing

1. Fork it (<https://github.com/MurylloEx/Back-Button-Hook/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

