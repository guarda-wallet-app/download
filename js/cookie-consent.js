// Cookie consent management
class CookieConsent {
  constructor() {
    this.cookieConsent = localStorage.getItem('cookieConsent');
    this.banner = document.createElement('div');
    this.banner.className = 'cookie-banner';
    this.initBanner();
  }

  initBanner() {
    if (this.cookieConsent) {
      return;
    }

    this.banner.innerHTML = `
      <div class="cookie-content">
        <div class="cookie-text">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. 
          <a href="cookies.html">Learn more</a>
        </div>
        <div class="cookie-buttons">
          <button class="cookie-button cookie-accept">Accept All</button>
          <button class="cookie-button cookie-reject">Reject All</button>
          <button class="cookie-button cookie-customize">Customize</button>
        </div>
        <div class="cookie-preferences hidden">
          <div class="cookie-option">
            <input type="checkbox" id="essential" checked disabled>
            <label for="essential">Essential Cookies (Required)</label>
          </div>
          <div class="cookie-option">
            <input type="checkbox" id="performance">
            <label for="performance">Performance Cookies</label>
          </div>
          <div class="cookie-option">
            <input type="checkbox" id="functional">
            <label for="functional">Functional Cookies</label>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.banner);
    this.addEventListeners();
  }

  addEventListeners() {
    const acceptBtn = this.banner.querySelector('.cookie-accept');
    const rejectBtn = this.banner.querySelector('.cookie-reject');
    const customizeBtn = this.banner.querySelector('.cookie-customize');
    const preferences = this.banner.querySelector('.cookie-preferences');

    acceptBtn.addEventListener('click', () => {
      this.setConsent({
        essential: true,
        performance: true,
        functional: true
      });
    });

    rejectBtn.addEventListener('click', () => {
      this.setConsent({
        essential: true,
        performance: false,
        functional: false
      });
    });

    customizeBtn.addEventListener('click', () => {
      preferences.classList.toggle('hidden');
    });

    const savePreferences = () => {
      this.setConsent({
        essential: true,
        performance: document.getElementById('performance').checked,
        functional: document.getElementById('functional').checked
      });
    };

    preferences.addEventListener('change', (e) => {
      if (e.target.type === 'checkbox') {
        savePreferences();
      }
    });
  }

  setConsent(preferences) {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    this.banner.classList.add('hidden');
  }
}

// Initialize cookie consent when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CookieConsent();
});