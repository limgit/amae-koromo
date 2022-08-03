/* eslint-disable */
// @ts-nocheck
window.__loadGa = function () {
  if (window.ga) {
    return ga;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-3M94EBS8XE");
  const gtagElement = document.createElement("script");
  gtagElement.src = "https://www.googletagmanager.com/gtag/js?id=G-3M94EBS8XE";
  gtagElement.async = true;
  document.head.appendChild(gtagElement);

  (function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");

  ga("create", "UA-155269742-1", "auto");
  return ga;
};
/* eslint-enable */

const init = () => import(/* webpackMode: "eager" */ "./bootstrap");

if (!Object.values || !window.URLSearchParams || !window.fetch || !window.Set) {
  import(/* webpackMode: "lazy" */ "./utils/polyfill").then(init);
} else {
  init();
}

export {};
