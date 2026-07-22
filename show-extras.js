// 김태형 연출작 DB — 상세 페이지 확장정보 (수동 관리)
// db-data.js(frontmatter 자동생성)와 분리된 층. 언론리뷰·관객리뷰·공연사진·주요대사를
// 작품 제목 키로 담는다. 값이 있는 섹션만 상세 페이지에 렌더된다.
// 리뷰는 실제 게시물의 짧은 발췌를 출처·링크와 함께 인용(창작 금지).
// 사진은 제작사 배포(언론 공개) 프로덕션 스틸 — 저작권은 각 제작사에 있으며 크레딧 표기.
window.SHOW_EXTRAS = {
  "빵야": {
    quotes: [
      { line: "영문도 모르고 끌려와서 모두 모두 총이 됐어", speaker: "빵야 · 99식 장총", note: "작품을 관통하는 핵심 대사 — 도구가 된 존재들의 자기고백" },
      { line: "다시 쓰고 싶다. 트리거가 필요하다", speaker: "나나 · 드라마작가", note: "주인공의 욕망 — 낡은 장총을 발견하며 이야기가 시작된다" }
    ],
    press: [
      { outlet: "스포츠동아", date: "2026.03.11", quote: "관객 심장 겨눴다…170분 순삭", context: "삼연(두산아트센터 연강홀) 리뷰" }
    ],
    press_note: "2026 상반기 삼연 기간 데일리 리뷰 모니터링(5/7 · 5/23 · 6/4 · 7/9 리포트)이 볼트에 별도 정리되어 있음. 다음 단계에서 이 페이지로 편입 예정.",
    audience: [
      { quote: "참 좋은 작품입니다. 여운이 많이 남아요", source: "네이버 블로그 · 라희뷰", date: "2026.03", url: "https://blog.naver.com/rahee21k/224210608863" },
      { quote: "워낙 웰메이드", source: "네이버 블로그 · 다꾸미", date: "2026.06", url: "https://blog.naver.com/daggumy/224305062911" },
      { quote: "연극 좋아하시는 분들 빵야 강추드립니다", source: "네이버 블로그 · 티끌모아", date: "2024.06", url: "https://blog.naver.com/tjdrb2012/223496588001" },
      { quote: "웃음과 감동이 함께 있는 작품이라 가족이 함께 보기에도 괜찮은 공연", source: "네이버 블로그 · 롯데헬스(포천)", date: "2026.07", url: "https://blog.naver.com/kong059/224344816072" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/빵야/빵야_2023_still.jpg", caption: "초연 (2023) — 빵야와 나나", credit: "제공 ㈜엠비제트컴퍼니" },
      { src: "assets/photos/빵야/빵야_2024_still.jpg", caption: "재연 (2024) — 소품창고의 두 사람", credit: "제공 ㈜엠비제트컴퍼니" },
      { src: "assets/photos/빵야/빵야_2026_still.jpg", caption: "삼연 (2026) — 장총을 겨눈 나나", credit: "제공 ㈜엠비제트컴퍼니" }
    ],
    photos_note: "제작사 배포(언론 공개) 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "마리 퀴리": {
    audience: [
      { quote: "이렇게 울었던 공연은 처음이야", source: "네이버 블로그 · 청인재의 아카이브", date: "2025.09", url: "https://blog.naver.com/cij_bookshelf/224008196669" },
      { quote: "화려한 쇼보다 깊고 진한 감동을 원한다면 반드시 만나야 할 뮤지컬", source: "네이버 블로그 · 안 녕 일 기", date: "2025.05", url: "https://blog.naver.com/tjsdudrhadl/223881582610" },
      { quote: "뮤지컬 넘버와 드라마틱한 무대를 좋아하시는 분께 강력 추천", source: "네이버 블로그 · 내가 힐링하는 방법", date: "2025.08", url: "https://blog.naver.com/ysy0117love/223985796658" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/마리퀴리/마리퀴리_2020_still.jpg", caption: "라듐 공장 장면 (2020)", credit: "프로덕션 스틸 · 언론 공개" },
      { src: "assets/photos/마리퀴리/마리퀴리_2020_still2.jpg", caption: "프레스콜 — 전 배우 넘버 (2020)", credit: "프레스콜 · 언론 공개" },
      { src: "assets/photos/마리퀴리/마리퀴리_2020_still3.jpg", caption: "라듐의 밤 장면 (2020)", credit: "프레스콜 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "멤피스": {
    audience: [
      { quote: "에너지, 감동, 스토리, 음악까지 빠지는 게 하나도 없고", source: "네이버 블로그 · Eat, Play, Love", date: "2025.08", url: "https://blog.naver.com/younifer1004/223961623617" },
      { quote: "무대가 시작되자마자 그 기대는 벅찬 감동으로 바뀌었습니다", source: "네이버 블로그 · 피노맘의 알록달록 세상", date: "2025.07", url: "https://blog.naver.com/kambohs/223952609462" },
      { quote: "볼까 말까 고민하시는 분들에겐 무조건 추천", source: "네이버 블로그 · 레오나르도 아 카프리치오", date: "2025.06", url: "https://blog.naver.com/ksw05168/223903740889" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/멤피스/멤피스_2023_still.jpg", caption: "앙상블 넘버 (2023)", credit: "프로덕션 스틸 · 언론 공개" },
      { src: "assets/photos/멤피스/멤피스_2025_still.jpg", caption: "Rolling Rocks 무대 (2025)", credit: "프로덕션 스틸 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "팬레터": {
    audience: [
      { quote: "너무너무 좋은 공연", source: "네이버 블로그 · 별을 잇는 사람", date: "2026.06", url: "https://blog.naver.com/12009701/224304180453" },
      { quote: "감동 그 자체. 여러분 보세요. 재밌습니다", source: "네이버 블로그 · 다온", date: "2026.05", url: "https://blog.naver.com/yume917/224280256375" },
      { quote: "처음 봤을 때 감동, 다시 느끼고 싶다", source: "네이버 블로그 · 혜니의 계절", date: "2026.06", url: "https://blog.naver.com/0_dls_0/224331920594" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/팬레터/팬레터_2021_still.jpg", caption: "문우회 장면 (2021)", credit: "프로덕션 스틸 · 언론 공개" },
      { src: "assets/photos/팬레터/팬레터_2025_still.jpg", caption: "10주년 공연 (2025)", credit: "프로덕션 스틸 · 언론 공개" },
      { src: "assets/photos/팬레터/팬레터_2021_still2.jpg", caption: "4연 프레스콜 — 편지 장면 (2021)", credit: "프레스콜 · 언론 공개" },
      { src: "assets/photos/팬레터/팬레터_2025_still2.jpg", caption: "10주년 프레스콜 — 문우회 대치 (2025)", credit: "프레스콜 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "히스토리 보이즈": {
    audience: [
      { quote: "30분 관람 후 10분 동안 박수치기", source: "네이버 블로그 · 나의 DREAM", date: "2026.06", url: "https://blog.naver.com/dsdqkr23/224312786455" },
      { quote: "즉각적인 감동보다는 깊은 울림을 줬고", source: "네이버 블로그 · 포튜나의 공연전시 이야기", date: "2026.05", url: "https://blog.naver.com/eleanor-fortuna/224291722615" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/히스토리보이즈/히스토리보이즈_2013_still.jpg", caption: "초연 출연진 (2013)", credit: "프로덕션 스틸 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "매디슨 카운티의 다리": {
    audience: [
      { quote: "서사, 음악, 배우들 연기, 무대까지 완벽한 명작이다", source: "네이버 블로그 · 천의", date: "2025.05", url: "https://blog.naver.com/kjk200/223856288180" },
      { quote: "정말로 큰 충격과 감동을 받았던 기억", source: "네이버 블로그 · 호짱짱의 한달살기", date: "2025.07", url: "https://blog.naver.com/hozzangzzang_/223930923175" },
      { quote: "두 사람 감정 고조를 제대로 표현해 주어서 감동이었다", source: "네이버 블로그 · L'art reste", date: "2026.02", url: "https://blog.naver.com/art_reste/224171276285" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/매디슨/매디슨_2017_still.jpg", caption: "초연 무대 (2017)", credit: "프로덕션 스틸 · 언론 공개" },
      { src: "assets/photos/매디슨/매디슨_2025_still.jpg", caption: "삼연 (2025)", credit: "프로덕션 스틸 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "카포네 트릴로지": {
    audience: [
      { quote: "영화 같은 연출에 엄청난 연기 실력, 보는 내내 입을 다물지 못하고 몰입", source: "네이버 블로그 · 새봄 in 취향가옥", date: "2025.05", url: "https://blog.naver.com/saebom_eugene/223876579578" },
      { quote: "전회 매진인 핫한 대학로 연극", source: "네이버 블로그 · 쎄려니", date: "2025.03", url: "https://blog.naver.com/sseryuni/223803148480" },
      { quote: "극대화된 관음에의 허용과 스타일리시한 미장센", source: "네이버 블로그 · 나무&", date: "2021.10", url: "https://blog.naver.com/faithjjj/222540043119" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/카포네트릴로지/카포네_2021_still.jpg", caption: "렉싱턴 호텔 661호 (2021)", credit: "프로덕션 스틸 · 언론 공개" },
      { src: "assets/photos/카포네트릴로지/카포네_2025_still.jpg", caption: "2025 프로덕션", credit: "프로덕션 스틸 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "벙커 트릴로지": {
    audience: [
      { quote: "참혹하지만 아름다운 인간의 초상", source: "네이버 블로그 · 자유로운영혼", date: "2025.10", url: "https://blog.naver.com/freespirit___/224044969774" },
      { quote: "표만 있으면 무조건 들어가서 보시는 것을 적극 추천", source: "네이버 블로그 · 늘보토끼의 공연전시 일지", date: "2025.12", url: "https://blog.naver.com/hopeful1101/224123172734" },
      { quote: "정말 오랜만에 심장 빨리 뛰는 공연을 보고 왔어요", source: "네이버 블로그 · 뿔로그", date: "2026.01", url: "https://blog.naver.com/oxo777777/224164793307" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/벙커트릴로지/벙커_2017_still.jpg", caption: "참호 속 장면 (2017)", credit: "프로덕션 스틸 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "미러 (A Mirror)": {
    audience: [
      { quote: "웃기고, 감동적이고, 신기하고, 반전 짜릿하고", source: "네이버 블로그 · 순간을 소중하게", date: "2025.07", url: "https://blog.naver.com/around_5_am/223941569110" },
      { quote: "연극 속 연극이 또 반전의 연극이 되는 흥미로운 연극", source: "네이버 블로그 · 영혼의 잡덕수프", date: "2025.07", url: "https://blog.naver.com/jobduglife/223939939077" },
      { quote: "예상치 못한 반전으로 큰 사랑을 받은", source: "네이버 블로그 · 루이스뚱이의 일상", date: "2025.07", url: "https://blog.naver.com/ddongee17/223921118731" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/미러/미러_2025_still.jpg", caption: "예식 장면 (2025 초연)", credit: "프로덕션 스틸 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "스윙데이즈": {
    audience: [
      { quote: "유일한 박사의 뜨거운 애국심과 감동… 최애 뮤지컬로 등극", source: "네이버 블로그 · 내맘대로 인문학", date: "2024.12", url: "https://blog.naver.com/lindaift/223680188126" },
      { quote: "커튼콜 때 관객들은 모두 기립박수", source: "네이버 블로그 · 오늘의 드라마", date: "2024.11", url: "https://blog.naver.com/micahyesung/223671687330" },
      { quote: "감동 가득 무대", source: "네이버 블로그 · 채널샤넬", date: "2026.06", url: "https://blog.naver.com/2jonga/224329697158" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/스윙데이즈/스윙데이즈_2024_still.jpg", caption: "초연 무대 (2024)", credit: "프로덕션 스틸 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "더헬멧": {
    audience: [
      { quote: "로비 소품까지 충실한 갓극", source: "네이버 블로그 · 행복따리", date: "2026.07", url: "https://blog.naver.com/charming_graphy/224345715562" },
      { quote: "몰입도가 중요한데 정말 최고였다", source: "네이버 블로그 · 공연기록", date: "2024.07", url: "https://blog.naver.com/gunbbbang_/223502595804" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/더헬멧/더헬멧_2018_still.jpg", caption: "룸알레포 장면 (2018)", credit: "프로덕션 스틸 · 언론 공개" },
      { src: "assets/photos/더헬멧/더헬멧_2019_still.png", caption: "분할 무대 (2019)", credit: "프로덕션 스틸 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "로기수": {
    audience: [
      { quote: "정말 재밌는 뮤지컬이어서 꼭 추천드리고 싶다", source: "네이버 블로그 · 하루하루 즐겁고 재미있게", date: "2015.05", url: "https://blog.naver.com/cobongin/220369270912" },
      { quote: "웃다가 울고 흐뭇해지고 참 즐거운 시간, 누구나 즐겁게 보실만한 작품", source: "네이버 블로그 · LIVE", date: "2015.04", url: "https://blog.naver.com/25danny/220361457829" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/로기수/로기수_2015_still.jpg", caption: "초연 무대 (2015)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "리지": {
    audience: [ { quote: "가녀린 몸에서 파워 넘치는 목소리에 감동", source: "네이버 블로그 · 베르니의 하루하루이야기", date: "2020.05", url: "https://blog.naver.com/vernie222/221937404025" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/리지/리지_2020_still.jpg", caption: "초연 무대 (2020)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "창문 넘어 도망친 100세 노인": {
    audience: [ { quote: "배우들의 호흡이 간결해서 더 즐겁게 관람했던", source: "네이버 블로그 · 먹꾸름", date: "2020.05", url: "https://blog.naver.com/fmsjjang/221958811861" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/창문넘어도망친100세노인/창문넘어_2019_still.jpg", caption: "무대 장면 (2019)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "바스커빌 - 셜록홈즈 미스터리": {
    audience: [ { quote: "홈즈 팬으로 호기심으로 보러 왔다가 대만족하고 돌아옴", source: "네이버 블로그 · 여행계의 만수르", date: "2024.08", url: "https://blog.naver.com/zadusuki/223548755385" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/바스커빌/바스커빌_2024_still.jpg", caption: "초연 무대 (2024)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "보이A": {
    audience: [ { quote: "울림 있는 뮤지컬", source: "네이버 블로그 · 볼로그", date: "2023.06", url: "https://blog.naver.com/tttley00/223146749790" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/보이A/보이A_2023_still.jpg", caption: "초연 무대 (2023)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "보니 앤 클라이드": {
    photos: [ { src: "assets/photos/보니앤클라이드/보니앤클라이드_2025_still.jpg", caption: "무대 장면 (2025)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "존경하는 엘레나 선생님": {
    photos: [ { src: "assets/photos/존경하는엘레나선생님/존경하는엘레나_2020_still.jpg", caption: "무대 장면 (2020)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "오펀스": {
    audience: [
      { quote: "1막은 티키타카가 끝내주는 깔깔 극이었다", source: "네이버 블로그 · from_echu", date: "2026.05", url: "https://blog.naver.com/from_echu/224272848487" },
      { quote: "블랙코미디는 제 취향이 아닌데 오펀스는 취향이었어요", source: "네이버 블로그 · 혤로, 연뮤덕", date: "2024.09", url: "https://blog.naver.com/everday_pit-a-pat/224239193356" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/오펀스/오펀스_2022_still.jpg", caption: "무대 장면 (2022)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "홀연했던 사나이": {
    audience: [
      { quote: "웃다 보면 어느새 마음이 따뜻해지는 힐링 뮤지컬", source: "네이버 블로그 · 김조빵의 슬기로운생활", date: "2018.02", url: "https://blog.naver.com/jiwon3131/223299290296" },
      { quote: "나이 상관없이 즐겁게 관람할 수 있는 극", source: "네이버 블로그 · 냠냠이 일기장", date: "2018.02", url: "https://blog.naver.com/yamyam_diary/223334217537" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/홀연했던사나이/홀연했던_2018_still.jpg", caption: "초연 무대 (2018)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "비더슈탄트": {
    audience: [
      { quote: "절대 강추! 감동의 눈물을 흘리고 싶은 짜릿한 카타르시스", source: "네이버 블로그 · gogo며들기", date: "2022.11", url: "https://blog.naver.com/juimju1208/223231381000" },
      { quote: "탄탄한 내용, 웅장한 넘버, 뛰어난 노래 실력으로 이입이 좋았다", source: "네이버 블로그 · 이지한 일상", date: "2022.09", url: "https://blog.naver.com/tooeasy_/222854515536" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/비더슈탄트/비더슈탄트_2023_still.jpg", caption: "펜싱 장면 (2023 재연)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "언더스터디": {
    photos: [ { src: "assets/photos/언더스터디/언더스터디_2021_still.jpg", caption: "초연 무대 (2021)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "식스 더 뮤지컬": {
    audience: [
      { quote: "엄청난 완성도를 자랑하는 수준 높은 뮤지컬", source: "네이버 블로그 · Stay Positive", date: "2023.04", url: "https://blog.naver.com/han159753/223067130136" },
      { quote: "연출, 배우, 넘버, 커튼콜 진짜 미쳤다", source: "네이버 블로그 · :D", date: "2023.04", url: "https://blog.naver.com/seo05017/223062633653" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/식스/식스_2023_still.jpg", caption: "SIX 콘서트 무대 (2023)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "금란방": {
    audience: [
      { quote: "여지껏 본 적 없는 장르라 추천드려요", source: "네이버 블로그 · 해밍의 하루", date: "2024.09", url: "https://blog.naver.com/moonhaemini/223589931076" },
      { quote: "단순한 오락을 넘어 관객에게 깊은 생각과 감동을 줄 수 있다", source: "네이버 블로그 · 치링치링", date: "2024.09", url: "https://blog.naver.com/tkxkdwhdk888/223572111875" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "아몬드": {
    audience: [
      { quote: "너무너무 행복하고 좋았다", source: "네이버 블로그 · 오늘 하루도", date: "2025.07", url: "https://blog.naver.com/seulgi066/224344512798" },
      { quote: "여운이 가득했던", source: "네이버 블로그 · 찬찬히", date: "2025.07", url: "https://blog.naver.com/o3o_0511/224351114274" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "천 개의 파랑": {
    audience: [ { quote: "지난해 5월에 처음 보고 푹 빠져든 뒤", source: "네이버 블로그 · 이야기를 찾는 사람", date: "2025.01", url: "https://blog.naver.com/felizerin/223770539006" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "오늘 처음 만드는 뮤지컬": {
    audience: [
      { quote: "막공 3일 전 첫 경험한 게 너무 아쉬울 정도로 좋았던", source: "네이버 블로그 · 캠핑갈까영", date: "2024.08", url: "https://blog.naver.com/joycamp0/223568508316" },
      { quote: "너무 재밌게 보고 온", source: "네이버 블로그 · 혤로, 연뮤덕", date: "2024.07", url: "https://blog.naver.com/everday_pit-a-pat/223523887747" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "이토록 보통의": {
    audience: [
      { quote: "이렇게 감동을 받으며 공연을 관람하고", source: "네이버 블로그 · 월광", date: "2023.10", url: "https://blog.naver.com/jaykey0103/223235573339" },
      { quote: "단순히 감성 말랑한 사랑 뮤지컬이 아니었다", source: "네이버 블로그 · 안 녕 일 기", date: "2023.12", url: "https://blog.naver.com/tjsdudrhadl/223306438111" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "0528": {
    audience: [
      { quote: "보는 내내 엄마 미소를 짓느라 끝나고 나올 때 잇몸이 다 마를 지경", source: "네이버 블로그 · 혼자서도 잘 놀아요", date: "2025.11", url: "https://blog.naver.com/cocod4321/224053677134" },
      { quote: "웃음과 감동의 두 마리 토끼를 잡은 작품", source: "네이버 블로그 · 미래를 준비하는 사람들", date: "2026.01", url: "https://blog.naver.com/cgs2020/224238141733" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "글로리아": {
    audience: [ { quote: "내가 관람한 연극 중 가장 잘 만든 극이라고 말하고 싶다", source: "네이버 블로그 · Rejoice Always!", date: "2017.08", url: "https://blog.naver.com/somabo/221068227942" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "한밤중에 개에게 일어난 의문의 사건": {
    audience: [ { quote: "후기가 너무 좋아서 우리 크리스마스 문화활동으로 당첨", source: "네이버 블로그 · eRICA'sTORY", date: "2015.12", url: "https://blog.naver.com/kjherica/220578734255" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "아나키스트": {
    audience: [
      { quote: "초연이라는데 완성도나 연기력, 넘버까지 모두 좋아서", source: "네이버 블로그 · 쏠라의 문화 탐방기", date: "2025.01", url: "https://blog.naver.com/onlylove0908/223736241287" },
      { quote: "웃음과 감동이 뒤섞인 공연의 매력을 일깨워 준 창작극", source: "네이버 블로그 · 언제나 좋은 시절", date: "2025.02", url: "https://blog.naver.com/windforlife/223745036704" },
      { quote: "잔잔한 감동을 가져온다", source: "네이버 블로그 · 사랑, 함께 했던 시간에 대한 예의", date: "2025.01", url: "https://blog.naver.com/hyoniholic/223736022589" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "부치하난": {
    audience: [
      { quote: "나의 평점은 별 4개, 화려한 무대장치와 수시로 바뀌는 세트들", source: "네이버 블로그 · 너굴's 스토리", date: "2024.09", url: "https://blog.naver.com/nugulpanda/223593745300" },
      { quote: "대립구도가 확실한 점이 너무 좋았어요", source: "네이버 블로그 · Silverpaper", date: "2024.09", url: "https://blog.naver.com/silverpap2r_/223593305881" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/부치하난/부치하난_2024_still.png", caption: "초대형 고래 무대 (2024)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "브루클린": {
    audience: [
      { quote: "폭발적인 가창력! 가슴을 울리는 힐링 뮤지컬", source: "네이버 블로그 · 타오르는 태양", date: "2013.01", url: "https://blog.naver.com/kk97653/70157890932" },
      { quote: "벅찬 감동이 남아 있었다", source: "네이버 블로그 · 로폰의 즐거운 하루", date: "2013.02", url: "https://blog.naver.com/weeeunjee/30160607876" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "모범생들": {
    audience: [ { quote: "작은 감동으로 가득 채워줬습니다", source: "네이버 블로그 · 스트레스제로", date: "2012.02", url: "https://blog.naver.com/jslee402/10133161394" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "어쩔 수 없는 막, 다른 길에서": {
    audience: [
      { quote: "이머시브 공연이지만 부담스럽지 않은 수준의 참여라서 좋았다", source: "네이버 블로그 · 혀기의 소소한 블로그", date: "2021.03", url: "https://blog.naver.com/classical97/222287610353" },
      { quote: "2층에서 일어난 일들이 제일 좋았다", source: "네이버 블로그 · 혀기의 소소한 블로그", date: "2021.03", url: "https://blog.naver.com/classical97/222287610353" }
    ],
    audience_note: "전태일기념관 제작 이머시브(2021 초연, 김태형 연출)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음."
  },

  "월하가요": {
    audience: [
      { quote: "우연히 보게 된 공연이지만 너무 재밌었어요", source: "네이버 블로그 · Life is a Journey", date: "2023.06", url: "https://blog.naver.com/sealice/223132643234" },
      { quote: "새로운 시도였고 재미도 있었기에 전반적으로는 매우 만족스러운 공연이었다", source: "네이버 블로그 · 소근소근", date: "2023.06", url: "https://blog.naver.com/suhaniee/223142578212" }
    ],
    audience_note: "강릉 선교장 고택 이머시브(2023 초연, 김태형 연출)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음."
  },

  "땡큐 베리 스트로베리": {
    audience: [
      { quote: "진짜진짜 슬펐고 여운이 많이 남는 뮤지컬이었다", source: "네이버 블로그 · 김다감의 취미생활", date: "2021.07", url: "https://blog.naver.com/9amzaw/222428784053" },
      { quote: "넓은 의미의 사랑 얘기였고 메시지도 있고 감동도 있었습니다", source: "네이버 블로그 · 미헤이 컬쳐데이", date: "2021.07", url: "https://blog.naver.com/nggaggi/222448359631" }
    ],
    audience_note: "2021 재연(김태형 연출, 서경대 스콘1관)의 공개 관람 후기 발췌. 초연(2018)은 타 연출. 각 후기의 저작권은 작성자에게 있음."
  },

  "개와 고양이의 시간": {
    audience: [
      { quote: "인간 VS 인간, 인간 VS 동물이 서로 기대어 사랑하는 모습은 한없이 따뜻하고 아름답다", source: "네이버 블로그 · 하얀나무 극장에 가다", date: "2020.08", url: "https://blog.naver.com/hanseul73/222056662352" },
      { quote: "관극으로 지쳤던 내 마음은 다시, 관극으로 위로 받는다 … 주제는 힐링", source: "네이버 블로그 · 하얀나무 극장에 가다", date: "2020.08", url: "https://blog.naver.com/hanseul73/222056662352" }
    ],
    audience_note: "2020 초연(김태형 연출, 드림아트센터 1관)의 공개 관람 후기 발췌. 2021 재연·2025는 타 연출이라 제외. 각 후기의 저작권은 작성자에게 있음."
  }
};
