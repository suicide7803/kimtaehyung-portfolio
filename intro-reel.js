/* 쇼릴 인트로 — 2D·3D 인덱스 공용 (2026-09-27 v1)
 * 첫 방문 때 15초 쇼릴을 전체 화면으로 한 번 재생한 뒤 히어로로 넘어간다.
 * <body> 바로 뒤에 <script src="intro-reel.js"></script> 한 줄로 붙인다. 이 줄을 지우면 완전히 원래대로 돌아간다.
 *
 * 재생하지 않는 경우: 같은 탭에서 이미 봤을 때(sessionStorage) · ?intro=0 · #섹션 딥링크 ·
 *                    움직임 줄이기 설정 · 데이터 절약 모드 · 자동재생 차단 · 2.5초 안에 재생 시작 못 할 때
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
  window.__introReel = { active: !skip };
  if (skip) return;

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
    '@media (max-width:640px){#introReel button{bottom:18px;padding:9px 13px;font-size:11px}#introReel .ir-skip{right:16px}#introReel .ir-sound{left:16px}}'
  ].join('\n');
  var st = document.createElement('style');
  st.id = 'introReelStyle';
  st.textContent = css;
  document.head.appendChild(st);
  document.documentElement.classList.add('introreel-on');

  var lo = (window.innerWidth || 1280) <= 900 || /(^|-)2g$|3g/.test(conn.effectiveType || '');
  var ov = document.createElement('div');
  ov.id = 'introReel';
  ov.setAttribute('role', 'dialog');
  ov.setAttribute('aria-label', '김태형 연출 쇼릴 (15초)');
  ov.innerHTML =
    '<video muted playsinline preload="auto" poster="' + POSTER + '" src="' + (lo ? SRC_LO : SRC_HI) + '"></video>' +
    '<button type="button" class="ir-sound" aria-pressed="false">소리 켜기</button>' +
    '<button type="button" class="ir-skip">건너뛰기 &rarr;</button>' +
    '<div class="ir-bar" aria-hidden="true"><i></i></div>';
  document.body.insertBefore(ov, document.body.firstChild);

  var v = ov.querySelector('video');
  v.muted = true;   /* innerHTML의 muted 속성만으론 속성값이 안 잡히는 브라우저가 있어 자동재생이 막힌다 */
  v.playsInline = true;
  var bar = ov.querySelector('.ir-bar i');
  var snd = ov.querySelector('.ir-sound');
  var done = false, started = false, t0 = Date.now();

  function finish(reason) {
    if (done) return;
    done = true;
    window.__introReel.reason = typeof reason === 'string' ? reason : 'skip';
    markSeen();
    window.__introReel.active = false;
    ov.classList.add('out');
    document.documentElement.classList.remove('introreel-on');
    document.dispatchEvent(new CustomEvent('introreel:done'));
    document.removeEventListener('keydown', onKey);
    window.removeEventListener('wheel', onScrollIntent);
    window.removeEventListener('touchmove', onScrollIntent);
    setTimeout(function () {
      try { v.pause(); v.removeAttribute('src'); v.load(); } catch (e) {}
      if (ov.parentNode) ov.parentNode.removeChild(ov);
      if (st.parentNode) st.parentNode.removeChild(st);
    }, 1000);
  }
  function onKey(e) {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault(); finish();
    }
  }
  /* 스크롤하려는 손짓 = 건너뛰기 (첫 1초 오작동 방지) */
  function onScrollIntent() { if (Date.now() - t0 > 1000) finish(); }

  ov.querySelector('.ir-skip').addEventListener('click', finish);
  snd.addEventListener('click', function () {
    v.muted = !v.muted;
    snd.textContent = v.muted ? '소리 켜기' : '소리 끄기';
    snd.setAttribute('aria-pressed', String(!v.muted));
  });
  document.addEventListener('keydown', onKey);
  window.addEventListener('wheel', onScrollIntent, { passive: true });
  window.addEventListener('touchmove', onScrollIntent, { passive: true });

  v.addEventListener('playing', function () { started = true; });
  v.addEventListener('timeupdate', function () {
    if (v.duration) bar.style.width = (v.currentTime / v.duration * 100).toFixed(2) + '%';
  });
  v.addEventListener('ended', function () { finish('ended'); });
  v.addEventListener('error', function () { finish('error'); });
  /* 백그라운드 탭으로 열렸으면 화면에 보일 때 시작한다 (숨은 탭에선 재생이 거부된다) */
  function start() {
    t0 = Date.now();
    var p = v.play();
    if (p && p.catch) p.catch(function () { finish('autoplay-blocked'); });   /* 자동재생 차단 → 바로 사이트로 */
    setTimeout(function () { if (!started) finish('timeout'); }, 2500);      /* 느린 회선 → 기다리게 하지 않는다 */
  }
  if (document.hidden) {
    document.addEventListener('visibilitychange', function onVis() {
      if (document.hidden) return;
      document.removeEventListener('visibilitychange', onVis);
      start();
    });
  } else start();
})();
