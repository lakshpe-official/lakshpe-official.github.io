(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/hero-CLDdwZDr.png`,t=`/assets/posters/the-guest-poster.png`,n=`/assets/posters/silo-poster.png`,r=document.querySelector(`#app`);r.innerHTML=`
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#home" aria-label="LakshPE home">
        <span class="brand-mark">N</span>

        <span class="brand-copy">
          <strong>LakshPE</strong>
          <small>STORIES BEYOND BORDERS</small>
        </span>
      </a>

      <nav class="desktop-navigation" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#featured">Featured</a>
        <a href="#library">Library</a>
        <a href="#download">Download</a>
      </nav>

<button
  class="header-button"
  type="button"
  onclick="window.location.href='/download.html'"
>
  GET THE APP
</button>    </header>

    <main>
      <section class="hero" id="home">
        <img
          class="hero-image"
          src="${e}"
          alt="Featured LakshPE story"
        />

        <div class="hero-overlay"></div>

        <div class="hero-content">
          <p class="eyebrow">LakshPE ORIGINAL</p>

          <h1>Stories Beyond Borders</h1>

          <p class="hero-description">
            Discover international drama, unforgettable characters,
            and powerful stories from around the world.
          </p>

          <div class="hero-meta">
            <span>International Drama</span>
            <span>English Subtitles</span>
            <span>HD</span>
          </div>

          <div class="hero-actions">
            <button
              class="primary-button"
              type="button"
              onclick="document.querySelector('#featured').scrollIntoView({
                behavior: 'smooth'
              })"
            >
EXPLORE FEATURED
            </button>

            <button
              class="secondary-button"
              type="button"
              onclick="document.querySelector('#library').scrollIntoView({
                behavior: 'smooth'
              })"
            >
              EXPLORE LIBRARY
            </button>
          </div>
        </div>
      </section>

      <section class="content-section" id="featured">
        <div class="section-heading">
          <div>
<p class="section-label">FEATURED COLLECTION</p>            <h2>Featured Story</h2>
          </div>

          <span class="section-status">New Release</span>
        </div>


<article
  class="featured-card silo-featured-card"
  id="silo"
<div class="featured-visual">
  <img
    class="featured-image"
    src="${n}"
    alt="LakshPE featured story"
  />

  <span class="featured-badge">FEATURED STORY</span>
</div>
        <div class="featured-copy">
          <p class="eyebrow">LakshPE FEATURED</p>

          <h3>SILO</h3>

          <p>
            In a ruined future where Earth's environment has become
            uninhabitable, the last survivors live inside a vast
            underground silo that descends for hundreds of levels.
            When mysterious deaths begin to unsettle the community,
            engineer Juliette uncovers a shocking secret buried deep
            within the shelter.
          </p>

          <div class="feature-tags">
            <span>Science Fiction</span>
            <span>Dystopian Mystery</span>
            <span>English Subtitles</span>
          </div>
        </div>
      </article>
    </section>

    <section class="content-section" id="library">        <div class="section-heading">
      <div class="section-heading">
        <div>
          <p class="section-label">DISCOVER</p>
          <h2>LakshPE Library</h2>
        </div>
          <p class="section-description">
            New videos and posters will be added here.
          </p>
          <a
<a
  class="movie-card"
  href="#featured"
  aria-label="Explore The Guest"
>
  <div class="movie-cover">
    <img
      src="${t}"
      alt="The Guest poster"
    />

    <span class="movie-badge">FEATURED</span>
  </div>
            <div class="movie-information">
              <p>Thriller · Action</p>
              <h3>THE GUEST</h3>
              <span>English Subtitles · HD</span>
            </div>
          </a>
<a
  class="movie-card"
  href="#silo"
  aria-label="Explore Silo"
>
  <div class="movie-cover">
    <img
      src="${n}"
      alt="Silo poster"
    />

    <span class="movie-badge">FEATURED</span>
  </div>
            <div class="movie-information">
              <p>Science Fiction · Mystery</p>
              <h3>SILO</h3>
              <span>English Subtitles · HD</span>
            </div>
          </a>
          <article class="movie-card">
            <div class="movie-cover">
              <img src="${e}" alt="New release preview" />
              <span class="movie-badge">IN PRODUCTION</span>
            </div>

            <div class="movie-information">
              <p>New Release</p>
              <h3>New Story Three</h3>
              <span>International · Preview</span>
            </div>
          </article>
        </div>
      </section>

      <section class="download-section" id="download">
<div class="download-icon">
  <img src="/assets/lakshpe-icon.png" alt="LakshPE app icon" />
</div>
        <div class="download-copy">
          <p class="section-label">LakshPE FOR ANDROID</p>

<h2>Discover More With LakshPE</h2>
          <p>
            The official Android download page and APK installation
            button will be added after the new application package
            is prepared.
          </p>
        </div>

<button
  class="download-button"
  type="button"
  onclick="window.location.href='/download.html'"
>
  DOWNLOAD LakshPE APP
</button>      </section>

      <footer class="site-footer">
        <div class="footer-brand">
          <span class="brand-mark">N</span>

          <div>
            <strong>LakshPE</strong>
            <p>Stories beyond borders.</p>
          </div>
        </div>

        <div class="legal-accordion">
          <details class="legal-item">
            <summary>Privacy Policy</summary>

            <div class="legal-content">
              <p>
                LakshPE is committed to protecting user privacy.
                This preview version does not currently collect
                payment information or personal profile information.
              </p>
            </div>
          </details>

          <details class="legal-item">
            <summary>Terms of Use</summary>

            <div class="legal-content">
              <p>
                Users may not copy, redistribute, resell, alter,
                or publicly reproduce content without permission
                from the relevant rights holder.
              </p>
            </div>
          </details>

          <details class="legal-item">
            <summary>Contact</summary>

            <div class="legal-content">
              <p>
                Official business contact information will be
                added before public release.
              </p>
            </div>
          </details>

          <details class="legal-item">
            <summary>Copyright Notice</summary>

            <div class="legal-content">
              <p>
                LakshPE respects copyrights, trademarks, and other
                intellectual-property rights.
              </p>
            </div>
          </details>
        </div>

        <p class="footer-copyright">
          © 2026 LakshPE. All rights reserved.
        </p>
      </footer>
    </main>

    <nav class="mobile-navigation" aria-label="Mobile navigation">
      <a href="#home">
        <span>⌂</span>
        Home
      </a>

<a href="#featured">
  <span>◆</span>
  Explore
</a>
      <a href="#library">
        <span>▦</span>
        Library
      </a>

      <a href="#download">
        <span>↓</span>
        App
      </a>
    </nav>
  </div>
`;