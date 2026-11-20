/* Mantem as UTMs e os parametros da pagina nos links (checkout e recusa). */
(function () {
  if (location.search.length < 2) return;
  var extra = new URLSearchParams(location.search);
  var links = document.querySelectorAll('a[href]');
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute('href');
    if (!href || href.charAt(0) === '#') continue;
    var u;
    try { u = new URL(href, location.href); } catch (e) { continue; }
    if (u.protocol !== 'http:' && u.protocol !== 'https:') continue;
    extra.forEach(function (v, k) { if (!u.searchParams.has(k)) u.searchParams.set(k, v); });
    links[i].setAttribute('href', u.toString());
  }
})();
