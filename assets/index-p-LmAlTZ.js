(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/reunited-in-love-banner-DXajcMI4.png`,t=`/assets/save-myself-banner-BZYJxaDn.png`,n=document.querySelector(`#app`);n.innerHTML=`
  <div class="site-shell">

    <header class="topbar" id="home">
      <a class="brand" href="#home" aria-label="LakshPE Home">
        <div class="brand-mark">▶</div>
        <span class="brand-name">LakshPE</span>
      </a>

<a class="app-button top-download" href="./download.html">
  GET THE APP
</a>    </header>

    <main>

      <section class="stories">

        <a class="story-banner" href="./download.html" aria-label="Reunited in Love">
          <img
            src="${e}"
            alt="Reunited in Love - LakshPE Original"
          />
        </a>

        <a class="story-banner" href="./download.html" aria-label="Save Myself">
          <img
            src="${t}"
            alt="Save Myself - LakshPE Original"
          />
        </a>

      </section>

      <section class="download-section" id="download">

        <div class="download-content">
          <div class="download-icon">↓</div>

          <div>
            <p class="section-label">LAKSHPE FOR ANDROID</p>
            <h2>Download LakshPE</h2>

            <p class="download-description">
              Discover more stories in the LakshPE Android app.
            </p>

            <button
              class="app-button apk-button"
              type="button"
              disabled
            >
              APK COMING SOON
            </button>
          </div>
        </div>

      </section>

      <section class="community-section" id="social">

        <p class="section-label">STAY CONNECTED</p>
        <h2>Join Our Community</h2>

        <div class="social-links">

<a
  class="social-link"
href="https://facebook.com/profile.php?id=61592702625839"  target="_blank"
  rel="noopener noreferrer"
  aria-label="LakshPE Facebook"
>
  <span class="social-icon">f</span>
  <span>Facebook</span>
</a>
<a
  class="social-link"
  href="https://www.instagram.com/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LakshPE Instagram"
>
  <span class="social-icon">◎</span>
  <span>Instagram</span>
</a>
<a
  class="social-link"
  href="https://m.me/Lakshpe"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LakshPE Support Center"
>
  <span class="social-icon">✦</span>
  <span>Support Center</span>
</a>        </div>

      </section>
<section class="support-section" id="support">
  <p class="section-label">CUSTOMER SUPPORT</p>

  <h2>How Can We Help?</h2>

  <p class="support-description">
    For account, download, or app support, contact LakshPE through
    our official social channels.
  </p>

  <div class="support-actions">
    <a
href="https://m.me/Lakshpe"
      target="_blank"
      rel="noopener noreferrer"
      class="support-button"
    >
      Facebook Support
    </a>

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      class="support-button secondary"
    >
      Instagram Support
    </a>
  </div>
</section>
    </main>

    <footer class="footer">
      <div class="footer-brand">
        <span class="footer-logo">▶</span>
        <span>LakshPE</span>
      </div>

      <p>© 2026 LakshPE. All rights reserved.</p>
    </footer>

    <nav class="mobile-navigation" aria-label="Mobile navigation">

      <a href="#home">
        <span>⌂</span>
        Home
      </a>

      <a href="#download">
        <span>↓</span>
        App
      </a>

      <a href="#social">
        <span>◎</span>
        Social
      </a>

    </nav>

  </div>
`;