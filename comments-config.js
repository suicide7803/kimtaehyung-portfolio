/* ────────────────────────────────────────────────────────────
   코멘트(Disqus) 설정 — 이 파일에 shortname 만 넣으면 작품별 코멘트가 켜집니다.

   설정 방법:
   1) https://disqus.com 가입 → "I want to install Disqus on my site"(Create a new site)
   2) 등록 시 정하는 shortname(예: kimtaehyung-portfolio)을 아래 큰따옴표 안에 입력
   3) Disqus 관리자 → Admin → Settings → Advanced → Trusted Domains 에
      suicide7803.github.io  추가 (localhost 테스트 시 localhost 도 추가)
   4) 재빌드·배포 (scripts/build-wiki-viewer.ps1 → git push)

   shortname 이 비어 있으면 각 작품 상세페이지의 코멘트 영역은 "준비 중"으로 표시됩니다.
   작품별 스레드는 제목(work:<작품명>)으로 식별되어 서로 섞이지 않습니다.
   ──────────────────────────────────────────────────────────── */
window.DISQUS_SHORTNAME = "kimtaehyung-portfolio";
