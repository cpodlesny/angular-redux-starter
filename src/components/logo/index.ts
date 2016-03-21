import './logo.css';

export class RioLogo {

  static selector = 'rioLogo';

  static options: ng.IComponentOptions = {
    controllerAs: 'logoCtrl',
    controller: RioLogo,
    template: `
      <img
        class="logo"
        ng-src="{{logoCtrl.logoImage}}"
        alt="Rangle.io"
      />
    `
  };

  private logoImage = require('../../assets/rangleio-logo.svg');
}
