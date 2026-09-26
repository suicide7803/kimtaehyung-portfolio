/* 쇼릴 인트로 — 2D·3D 인덱스 공용 (2026-09-27 v2: 상단 '쇼릴' 다시 보기 링크 추가)
 * 첫 방문 때 15초 쇼릴을 전체 화면으로 한 번 재생한 뒤 히어로로 넘어간다.
 * 상단 내비게이션 맨 앞에 '▶ 쇼릴' 링크를 넣어 언제든 다시 볼 수 있다 (소리 켠 채로 재생).
 * <body> 바로 뒤에 <script src="intro-reel.js"></script> 한 줄로 붙인다. 이 줄을 지우면 인트로·링크 모두 원래대로 돌아간다.
 *
 * 첫 방문 자동 재생을 하지 않는 경우: 같은 탭에서 이미 봤을 때(sessionStorage) · ?intro=0 · #섹션 딥링크 ·
 *   움직임 줄이기 설정 · 데이터 절약 모드 · 자동재생 차단 · 2.5초 안에 재생 시작 못 할 때
 * ?intro=1 이면 본 적이 있어도 다시 재생한다.
 * 히어로 등장 애니메이션은 'introreel:done' 이벤트 이후에 시작하도록 페이지 쪽에서 기다린다.
 */
(function () {
  var KEY = 'introReelSeen.v1';
  var SRC_HI = 'assets/video/showreel_15s_1080.mp4';
  var SRC_LO = 'assets/video/showreel_15s_720.mp4';
  var POSTER = 'assets/video/showreel_poster.jpg';

  var q = location.search;
  var force = /[?&]intro=1\b/.test(q);
  function seen() { try { return sessionStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
  function markSeen() { try { sessionStorage.setItem(KEY, '1'); } catch (e) {} }
  var conn = navigator.connection || {};
  var skip = !force && (
    /[?&]intro=0\b/.test(q) || seen() || (location.hash && location.hash !== '#top') ||
    (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) ||
    conn.saveData === true
  );
  var api = window.__introReel = { active: !skip, play: function () { run(true); } };

  var css = [
    'html.introreel-on,html.introreel-on body{overflow:hidden!important}',
    'html.introreel-on header.hero,html.introreel-on header.hero *{animation-play-state:paused!important}',
    '#introReel{position:fixed;inset:0;z-index:2147483000;background:#060503;display:flex;align-items:center;justify-content:center;',
    '  transition:opacity .9s cubic-bezier(.16,1,.3,1),visibility 0s linear .9s}',
    '#introReel.out{opacity:0;visibility:hidden;pointer-events:none}',
    '#introReel video{width:100%;height:100%;object-fit:cover;background:#060503}',
    '@media (max-aspect-ratio:3/2){#introReel video{object-fit:contain}}',
    '#introReel .ir-bar{position:absolute;left:0;right:0;bottom:0;height:2px;background:rgba(239,233,220,.08)}',
    '#introReel .ir-bar i{display:block;height:100%;width:0;background:#c9a961}',
    '#introReel button{position:absolute;bottom:26px;font:600 12px/1 "Pretendard","Noto Sans KR",system-ui,sans-serif;letter-spacing:.14em;',
    '  color:#a89e8a;background:rgba(6,5,3,.45);border:1px solid rgba(201,169,97,.35);border-radius:99px;padding:10px 16px;cursor:pointer;',
    '  -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);transition:color .2s,border-color .2s,background .2s}',
    '#introReel button:hover,#introReel button:focus-visible{color:#e0c17d;border-color:#c9a961;background:rgba(201,169,97,.10)}',
    '#introReel button:focus-visible{outline:2px solid #8a7442;outline-offset:3px}',
    '#introReel .ir-skip{right:26px}',
    '#introReel .ir-sound{left:26px}',
    '@media (max-width:640px){#introReel button{bottom:18px;padding:9px 13px;font-size:11px}#introReel .ir-skip{right:16px}#introReel .ir-sound{left:16px}}',
    /* 상단 '쇼릴' 링크 — 페이지의 모바일 내비 숨김 규칙(nth-child)에 걸리지 않게 display를 강제 */
    '.navlinks a.nav-reel{display:inline-flex!important;align-items:center;gap:7px;color:#c9a961;cursor:pointer;white-space:nowrap}',
    '.navlinks a.nav-reel:hover,.navlinks a.nav-reel:focus-visible{color:#e0c17d}',
    '.navlinks a.nav-reel svg{width:7px;height:8px;flex:none;fill:currentColor;transform:translateY(-.5px)}'
  ].join('\n');
  var st = document.createElement('style');
  st.id = 'introReelStyle';
  st.textContent = css;
  document.head.appendChild(st);

  /* 상단 내비게이션 맨 앞에 다시 보기 링크 */
  function addNavLink() {
    var nav = document.querySelector('.navlinks');
    if (!nav || nav.querySelector('.nav-reel')) return;
    var a = document.createElement('a');
    a.className = 'nav-reel';
    a.href = '?intro=1';
    a.title = '15초 쇼릴 다시 보기';
    a.setAttribute('data-en', '<svg viewBox="0 0 7 8" aria-hidden="true"><path d="M0 0l7 4-7 4z"/></svg>Showreel');
    a.innerHTML = '<svg viewBox="0 0 7 8" aria-hidden="true"><path d="M0 0l7 4-7 4z"/></svg>쇼릴';
    a.addEventListener('click', function (e) { e.preventDefault(); run(true); });
    nav.insertBefore(a, nav.firstChild);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addNavLink);
  else addNavLink();

  var playing = false;
  if (!skip) run(false);

  /* manual=true: 사용자가 링크로 연 재생 — 소리 켠 채로, 느린 회선이어도 조금 더 기다린다 */
  function run(manual) {
    if (playing) return;
    playing = true;
    api.active = true;
    document.documentElement.classList.add('introreel-on');
    var opener = manual ? document.activeElement : null;

    var lo = (window.innerWidth || 1280) <= 900 || /(^|-)2g$|3g/.test(conn.effectiveType || '');
    var ov = document.createElement('div');
    ov.id = 'introReel';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-label', '김태형 연출 쇼릴 (15초)');
    ov.innerHTML =
      '<video playsinline preload="auto" poster="' + POSTER + '" src="' + (lo ? SRC_LO : SRC_HI) + '"></video>' +
      '<button type="button" class="ir-sound"></button>' +
      '<button type="button" class="ir-skip">' + (manual ? '닫기' : '건너뛰기') + ' &rarr;</button>' +
      '<div class="ir-bar" aria-hidden="true"><i></i></div>';
    document.body.insertBefore(ov, document.body.firstChild);

    var v = ov.querySelector('video');
    v.muted = !manual;   /* 자동 재생은 음소거 필수. innerHTML의 muted 속성만으론 안 잡히는 브라우저가 있어 속성값으로 지정 */
    v.playsInline = true;
    var bar = ov.querySelector('.ir-bar i');
    var snd = ov.querySelector('.ir-sound');
    var skipBtn = ov.querySelector('.ir-skip');
    var done = false, started = false, t0 = Date.now();
    function syncSnd() {
      snd.textContent = v.muted ? '소리 켜기' : '소리 끄기';
      snd.setAttribute('aria-pressed', String(!v.muted));
    }
    syncSnd();

    function finish(reason) {
      if (done) return;
      done = true;
      playing = false;
      api.reason = typeof reason === 'string' ? reason : 'skip';
      markSeen();
      api.active = false;
      ov.classList.add('out');
      document.documentElement.classList.remove('introreel-on');
      document.dispatchEvent(new CustomEvent('introreel:done'));
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('wheel', onScrollIntent);
      window.removeEventListener('touchmove', onScrollIntent);
      if (opener && opener.focus) { try { opener.focus({ preventScroll: true }); } catch (e) {} }
      setTimeout(function () {
        try { v.pause(); v.removeAttribute('src'); v.load(); } catch (e) {}
        if (ov.parentNode) ov.parentNode.removeChild(ov);
      }, 1000);
    }
    function onKey(e) {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (e.target === snd && (e.key === 'Enter' || e.key === ' ')) return;
        e.preventDefault(); finish();
      }
    }
    /* 스크롤하려는 손짓 = 건너뛰기 (첫 1초 오작동 방지) */
    function onScrollIntent() { if (Date.now() - t0 > 1000) finish(); }

    skipBtn.addEventListener('click', finish);
    snd.addEventListener('click', function () { v.muted = !v.muted; syncSnd(); });
    document.addEventListener('keydown', onKey);
    window.addEventListener('wheel', onScrollIntent, { passive: true });
    window.addEventListener('touchmove', onScrollIntent, { passive: true });

    v.addEventListener('playing', function () { started = true; });
    v.addEventListener('timeupdate', function () {
      if (v.duration) bar.style.width = (v.currentTime / v.duration * 100).toFixed(2) + '%';
    });
    v.addEventListener('ended', function () { finish('ended'); });
    v.addEventListener('error', function () { finish('error'); });

    function start() {
      t0 = Date.now();
      var p = v.play();
      if (p && p.catch) p.catch(function () {
        if (manual && !v.muted) {           /* 소리 재생이 막히면 음소거로 한 번 더 */
          v.muted = true; syncSnd();
          v.play().catch(function () { finish('play-blocked'); });
        } else finish('autoplay-blocked');   /* 자동재생 차단 → 바로 사이트로 */
      });
      setTimeout(function () { if (!started) finish('timeout'); }, manual ? 8000 : 2500);   /* 느린 회선 → 오래 붙잡지 않는다 */
    }
    if (manual) { try { skipBtn.focus({ preventScroll: true }); } catch (e) {} }
    /* 백그라운드 탭으로 열렸으면 화면에 보일 때 시작한다 (숨은 탭에선 재생이 거부된다) */
    if (document.hidden) {
      document.addEventListener('visibilitychange', function onVis() {
        if (document.hidden) return;
        document.removeEventListener('visibilitychange', onVis);
        start();
      });
    } else start();
  }
})();
