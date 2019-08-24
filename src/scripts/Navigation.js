class Navigation {
  constructor () {
    this.triggers = [...document.querySelectorAll('[data-toggle="navigation"]')];
    this.nav = document.querySelector('#main-navigation');
    this.body = document.querySelector('body');
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'navigation-backdrop';
    this.open = false;
  }

  toggle () {
    if (this.open) {
      setTimeout(() => {
        this.backdrop.remove();
      }, 300);
    } else {
      this.nav.insertAdjacentElement('afterend', this.backdrop);
    }

    this.open = !this.open;

    setTimeout(() => {
      this.nav.classList.toggle('navigation--open');
    });

    this.body.classList.toggle('scroll-disabled');
  }

  init () {
    this.triggers.push(this.backdrop);
    this.triggers.forEach(trigger => trigger.addEventListener('click', this.toggle.bind(this)));
  }
}

export default Navigation;
