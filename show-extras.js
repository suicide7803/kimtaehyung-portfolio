// 김태형 연출작 DB — 상세 페이지 확장정보 (수동 관리)
// db-data.js(frontmatter 자동생성)와 분리된 층. 언론리뷰·관객리뷰·공연사진·주요대사를
// 작품 제목 키로 담는다. 값이 있는 섹션만 상세 페이지에 렌더된다.
// 리뷰는 실제 게시물의 짧은 발췌를 출처·링크와 함께 인용(창작 금지).
// 사진은 제작사 배포(언론 공개) 프로덕션 스틸 — 저작권은 각 제작사에 있으며 크레딧 표기.
window.SHOW_EXTRAS = {
  "신과 함께 - 이승편": {
    photos: [ { src: "assets/photos/신과함께이승편/신과함께이승편_2019_still.jpg", caption: "재개발 달동네 무대 (2019)", credit: "연합뉴스 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시.",
    press: [
      { outlet: "뉴시스", date: "2019.06", quote: "진정한 한국형 창작뮤지컬을 만났다", url: "http://www.newsis.com/view/?id=NISX20190628_0000694579" },
      { outlet: "동아닷컴 스포츠", date: "2019.06", quote: "'착하게 살자'던 '신과 함께', 이제는 '다 같이 살'", url: "http://sports.donga.com/3/all/20190626/96180011/2" },
      { outlet: "연합뉴스TV", date: "2019.06", quote: "원작자도 눈물나", url: "http://www.yonhapnewstv.co.kr/MYH20190624018100038/?did=1825m" },
      { outlet: "아이뉴스24", date: "2019.06", quote: "음악·무대적으로 다른 시도를 해보고 있습니다", context: "김태형 연출", url: "http://www.inews24.com/view/1183599" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
  },

  "미 온 더 송": {
    photos: [ { src: "assets/photos/미온더송/미온더송_2017_still.jpg", caption: "카바레 'Blue Velvet Live' (2017)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시.",
    press: [
      { outlet: "뉴스컬처", date: "2017.08", quote: "카바레 분위기 속의 뮤지컬 '미 온 더 송'", url: "http://www.newsculture.press/view.htm?idxno=2017082402250051097" },
      { outlet: "헤럴드경제", date: "2017.08", quote: "소소하고 담백한 위로", url: "https://m.entertain.naver.com/article/112/0002951316" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
  },

  "앙상블": {
    press: [
      { outlet: "뉴스컬처", date: "2019.07", quote: "안무를 작품 개발의 출발점으로 시작한 특징", context: "우란문화재단 트라이아웃", url: "http://www.newsculture.press/view.htm?idxno=2019071708513716880" },
      { outlet: "더뮤지컬", date: "2019.07", quote: "우란이상 공연예술 개발 프로그램", url: "http://www.themusical.co.kr/News/Detail?num=12403" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
  },

  "아직 끝나지 않았다": {
    press: [
      { outlet: "한경닷컴", date: "2011.04", quote: "임나진 작가와 김태형 연출이 힘을 합쳐 만든 무대", url: "https://n.news.naver.com/mnews/article/015/0002433010?sid=103" },
      { outlet: "이데일리", date: "2011.03", quote: "2010 봄 작가, 겨울무대 최우수 작품 선정작", url: "https://m.entertain.naver.com/article/018/0002409337" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
  },

  "가족오락관": {
    press: [
      { outlet: "뉴시스", date: "2010.08", quote: "살인이 취미활동인 패밀리…연극 '가족오락관'", context: "이오진 작", url: "https://n.news.naver.com/mnews/article/003/0003390319?sid=103" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
  },

  "Coffee Play - 맛": {
    press: [
      { outlet: "한겨레", date: "2017.07", quote: "커피숍에서 커피 마시며 보는 연극", context: "인터뷰 언급", url: "https://m.entertain.naver.com/article/028/0002371268" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
  },

  "오월엔 결혼할꺼야": {
    press: [
      { outlet: "연합뉴스", date: "2007.07", quote: "대학로 씨어터 디아더에서", url: "https://n.news.naver.com/mnews/article/001/0001694861?sid=103" },
      { outlet: "매일신문", date: "2009.09", quote: "맛깔스런 대사와", url: "https://n.news.naver.com/mnews/article/088/0000140741?sid=102" },
      { outlet: "전자신문", date: "2011.04", quote: "시즌 6을 개막하기에", url: "https://n.news.naver.com/mnews/article/030/0002115041?sid=103" },
      { outlet: "연합뉴스", date: "2007.07", quote: "세 여자 친구의 결혼과 사랑, 우정이 입에 착착 달라붙는", context: "김효진 작·김태형 연출", url: "https://n.news.naver.com/mnews/article/001/0001695477?sid=103" },
      { outlet: "문화일보", date: "2010.11", quote: "계속되는 흥행에 힘입어", context: "시즌1", url: "https://n.news.naver.com/mnews/article/086/0002026774" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
  },

  "초록": {
    photos: [ { src: "assets/photos/초록/초록_2026_still.jpg", caption: "배따라기 모티프 장면 (2026)", credit: "언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시.",
    press: [
      { outlet: "더뮤지컬", date: "2026.03", quote: "운명을 비집고 몰아친 근현대, 뒤늦은 개안", url: "http://www.themusical.co.kr/Magazine/Detail?num=5579" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "다시 한번 더 보러 가고 싶다", source: "네이버 블로그 · 뮤미땅의 사부작사부작", date: "2026.03", url: "https://blog.naver.com/mumittang/224213818165" },
      { quote: "재밌는 뮤지컬로 탄생했다", source: "네이버 블로그 · live every minute", date: "2026.02", url: "https://blog.naver.com/enddl0911/224187230178" },
      { quote: "그렇게 기대하고 보고 싶었던 뮤지컬", source: "네이버 블로그 · 서툰 관객의 지독한 시선", date: "2026.03", url: "https://blog.naver.com/mint_baby_g/224215951248" }
    ],
    audience_note: "2026 초연(김태형 연출, 링크아트센터드림 드림3관)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음."
  },

  "옥탑방 고양이": {
    photos: [ { src: "assets/photos/옥탑방고양이/옥탑방고양이_2010_still.jpg", caption: "옥탑방 무대 (대학로 공연)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시.",
    press: [
      { outlet: "매일경제", date: "2013.04", quote: "펀(FUN)한, 결코 뻔하지 않은", url: "https://m.entertain.naver.com/article/009/0002927717" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "10년 만에 다시 봐도 재밌는 연극", source: "네이버 블로그 · 마녀의 은밀한 연구실", date: "2025.04", url: "https://blog.naver.com/alicec__/223824414955" },
      { quote: "연극하면 떠오르는 아주 유명한 작품", source: "네이버 블로그 · 소중한 보금자리", date: "2026.02", url: "https://blog.naver.com/dfgfdertre/224192012601" },
      { quote: "공연 내내 시간 가는줄 모르고 재밌게 봤습니다", source: "네이버 블로그 · 자몽이와 전국팔도", date: "2025.11", url: "https://blog.naver.com/with__mong/224061100282" }
    ],
    audience_note: "대학로 장기 공연(김태형 연출) '더 라스트 시즌'의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음."
  },

  "연애시대": {
    press: [
      { outlet: "아시아경제", date: "2013.10", quote: "김수로 프로젝트 6탄-연애시대", context: "황인영 연극 데뷔", url: "http://view.asiae.co.kr/news/view.htm?idxno=2013100416371355338" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "본인이 본 몇 안되는 연극중에 제일 재미있는 연극", source: "네이버 블로그 · 힐러리스트", date: "2013.11", url: "https://blog.naver.com/baba_here/90184886613" },
      { quote: "은근 호평인 공연이길래", source: "네이버 블로그 · 감성큐레이터", date: "2013.10", url: "https://blog.naver.com/ralrapo/100198760208" },
      { quote: "언제나 내가 좋아하는 공연, 선호하는 공연", source: "네이버 블로그 · lovely_with", date: "2013.11", url: "https://blog.naver.com/lovely_with/140200616175" }
    ],
    audience_note: "2011·2013 연극(김태형 연출, 김수로프로젝트, 대학로)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음."
  },

  "내일 공연인데 어떡하지": {
    press: [
      { outlet: "뉴스컬처", date: "2017.05", quote: "게임 같은 연극, 극장 백스테이지까지 투어", url: "http://www.newsculture.press/view.htm?idxno=2017052206040099934" },
      { outlet: "연합뉴스", date: "2017.06", quote: "관객참여형 연극으로 주목받은 연극", url: "http://app.yonhapnews.co.kr/YNA/Basic/SNS/r.aspx?c=AKR20170626112600005" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "메시지와 재미가 함께 한 연극이다", source: "네이버 블로그 · 읽고 걷는 삶의 재발견", date: "2017.07", url: "https://blog.naver.com/scent72/221060370600" },
      { quote: "워낙 단기간 하는 극이라서 못 볼 뻔했는데 다행히 표를 구했어요", source: "네이버 블로그 · For Forever.", date: "2017.07", url: "https://blog.naver.com/epilography/221044080352" }
    ],
    audience_note: "2013·2017 연극(김태형 연출, 지이선 작, 대학로예술극장)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음."
  },

  "내일도 공연할 수 있을까": {
    audience: [
      { quote: "아주 흥미로운 공연이었습니다", source: "네이버 블로그 · 봉봉오쇼콜라", date: "2014.08", url: "https://blog.naver.com/tenderfox/220091452821" },
      { quote: "진짜! 진짜!! 오랜만에 본 유진언니 공연", source: "네이버 블로그 · daL _B", date: "2014.08", url: "https://blog.naver.com/constant_r/220101705184" }
    ],
    audience_note: "2014 관객참여형 연극(김태형 연출, 씨어터RPG Ver.2.0)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음."
  },

  "두결한장": {
    press: [
      { outlet: "예스24", date: "2014.10", quote: "특별한 사람들의 평범한 사랑", url: "http://ch.yes24.com/Article/View/26468" },
      { outlet: "뉴스컬처", date: "2014.10", quote: "웨딩드레스가 어울리는 이 남자, 음악극 '두결한장'", url: "http://www.newsculture.press/view.htm?idxno=2014102601150011954" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "영화와 비슷한 부분과 각색된 부분이 적절히 조화되어 있었어요", source: "네이버 블로그 · For Forever.", date: "2014.10", url: "https://blog.naver.com/epilography/220141734682" },
      { quote: "그들의 진실된 사랑에 박수를 보낸다", source: "네이버 블로그 · 엔냥의 한줄놀이", date: "2014.10", url: "https://blog.naver.com/nadiyaggo/220150929398" }
    ],
    audience_note: "2014 음악극(김태형 연출, '두 번의 결혼식과 한 번의 장례식', DCF대명문화공장)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음."
  },

  "베헤모스": {
    photos: [ { src: "assets/photos/베헤모스/베헤모스_2017_still.jpg", caption: "법정 취조 장면 (2017)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시.",
    press: [
      { outlet: "헤럴드경제", date: "2017.03", quote: "무대에 펼쳐진 현실, 그 씁쓸한 뒷맛", url: "http://biz.heraldcorp.com/view.php?ud=201703311606136330124_1" },
      { outlet: "연합뉴스", date: "2017.03", quote: "괴물을 삼킨 인간…연극 '베헤모스'", url: "http://app.yonhapnews.co.kr/YNA/Basic/SNS/r.aspx?c=AKR20170317114100704" },
      { outlet: "서울신문", date: "2017.03", quote: "인간 심연에 자리잡은 악마성에 대한 이야기", url: "http://www.seoul.co.kr/news/newsView.php?id=20170302024011" },
      { outlet: "서울경제", date: "2017.03", quote: "욕망에 기생하는 惡···인간은 '괴물'", url: "http://www.sedaily.com/NewsView/1OD7QRAXIB" },
      { outlet: "뉴스컬처", date: "2017.02", quote: "어떤 칼도 통하지 않는 괴물이 있다", url: "http://www.newsculture.press/view.htm?idxno=2017021110320022926" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "현실을 꼬집는 영화 같은 연극", source: "네이버 블로그 · 무비무비", date: "2017.03", url: "https://blog.naver.com/winterwind19/220962198544" },
      { quote: "다음 이야기가 궁금하게 만드는 극, 너무 좋다", source: "네이버 블로그 · 사랑, 함께 했던 시간에 대한 예의", date: "2017.02", url: "https://blog.naver.com/hyoniholic/220939608096" },
      { quote: "프리뷰 같지않게 완성도 있는 공연이었어요", source: "네이버 블로그 · Musical AND Travel", date: "2017.02", url: "https://blog.naver.com/wisdom_jh337/220927687651" }
    ],
    audience_note: "2017 초연(김태형 연출, 충무아트센터 중극장 블랙)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음."
  },

  "푸른 눈 박연": {
    press: [
      { outlet: "오마이뉴스", date: "2013.11", quote: "네덜란드인 박연은 왜 조선을 떠나지 못했을까?", url: "https://m.entertain.naver.com/article/047/0002037986" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "지금껏 뮤지컬을 봐오면서 처음 느낀 감정", source: "네이버 블로그 · amy with", date: "2013.11", url: "https://blog.naver.com/mo_on_uh/90185139888" }
    ],
    audience_note: "2013 가무극(김태형 연출, 성남아트센터 오페라하우스)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음."
  },

  "신창극시리즈2 우주소리": {
    photos: [ { src: "assets/photos/신창극우주소리/신창극우주소리_2018_still.jpg", caption: "SF창극 무대 (2018)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시.",
    press: [
      { outlet: "RPM9", date: "2018.10", quote: "창극으로 즐기는 머나먼 우주", url: "http://www.rpm9.com/news/article.html?id=20181023090008" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "무대는 조명과 소품으로 신비롭고 아름다운 우주를 잘 표현해냈고", source: "네이버 블로그 · 항상 즐거운 날이 되기를", date: "2018.10", url: "https://blog.naver.com/2000121037/221387412758" }
    ],
    audience_note: "2018 초연(구성·각색·연출 김태형, 국립극장 달오름극장)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음."
  },

  "BBK라는 이름의 떡밥": {
    press: [
      { outlet: "뉴스토마토", date: "2012.10", quote: "이 연극, 참 뜨겁다", url: "http://www.newstomato.com/ReadNews.aspx?no=300743" },
      { outlet: "연합뉴스", date: "2012.10", quote: "'BBK라는 이름의 떡밥'(극사발 프로젝트)은 풍자극", url: "https://n.news.naver.com/mnews/article/001/0005862877?sid=103" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "연극과 연극하는 나를 돌아보는 이중구조가 딜레마적 상황을 재치있게 포착한다", source: "네이버 블로그 · 수상한 소문", date: "2012.08", url: "https://blog.naver.com/kdoonga/30144042944" },
      { quote: "두 편 모두 굉장히 기대했던 작품", source: "네이버 블로그 · 서울프린지페스티벌", date: "2012.09", url: "https://blog.naver.com/hellofringe/80168045176" }
    ],
    audience_note: "2012 연극(김태형 연출, 극사발 프로젝트 공동창작, 카톨릭청년회관 다리)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음."
  },

  "빵야": {
    director_note: { body: "낡은 장총 한 자루의 눈으로 한국 현대사를 통과하는 이야기다. 무대에는 화려한 장치 대신 배우의 몸과 목소리만 둔다. 세트를 바꾸지 않고 여덟 명의 배우가 수십 개의 인물과 시대를 넘나들게 한 것은, '역사를 어떻게 소비할 것인가'라는 질문을 관객이 직접 짊어지게 하기 위해서다. 총이 된 존재들의 자기고백이 지금 우리의 이야기로 되돌아오기를 바랐다.", note: "※ 초안 — 연출가 검토 후 본인 언어로 확정 예정." },
    quotes: [
      { line: "영문도 모르고 끌려와서 모두 모두 총이 됐어. 너도 나도 총이 됐어.", speaker: "빵야 · 99식 장총", note: "도구가 된 존재들의 자기고백 — 작품을 관통하는 핵심 대사" },
      { line: "이야기 하나를 아프게 쓰면 아픈 사람 하나가 조금은 나아질지도 몰라.", speaker: "빵야", note: "나나의 초기 창작 동기를 빵야가 고쳐 되뇌는 대사 — 작품 주제의 응축" }
    ],
    press: [
      { outlet: "오마이뉴스", date: "2024.08", quote: "일본이 남기고 간 '79세' 소총이", url: "https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003058682" },
      { outlet: "위드인뉴스", date: "2024.07", quote: "한국 현대사의 비극 속 빵야가", url: "http://www.withinnews.co.kr/news/view.html?section=134&category=137&item=&no=33758" },
      { outlet: "문화뉴스", date: "2024.07", quote: "아픈 시대의 꿈들이 울려퍼지는 소리", context: "재연 리뷰", url: "https://www.mhns.co.kr/news/articleView.html?idxno=613020" },
      { outlet: "ABC뉴스", date: "2026.04", quote: "화려한 무대 장치보다 배우의 힘으로 완성되는 작품", context: "삼연 리뷰", url: "https://www.abcn.kr/news/articleView.html?idxno=87228" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음. 2026 상반기 삼연 데일리 리뷰 모니터링은 볼트에 별도 정리.",
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

  "경성의 고독한 미식가들": {
    press: [
      { outlet: "서울문화투데이", date: "2026.07", quote: "추리와 미식이 만난 이머시브 연극", url: "http://www.sctoday.co.kr/news/articleView.html?idxno=48186" },
      { outlet: "미디어저널", date: "2026.07", quote: "총성을 쫓고 푸딩을 맛본다", url: "https://www.mhj21.com/news/articleView.html?idxno=253125" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    quotes: [
      { line: "진정한 맛은 혀 끝에 느껴지는 화려함이 아니라, 함께 씹고 삼키는 이의 온기에 있다.", speaker: "해운 · 미식 칼럼", note: "작품의 미학을 압축한 대사" },
      { line: "적의 적은 동지라고들 하죠. 난 같은 적을 가진 사람들만이 가질 수 있는 강력한 연대를 믿어요.", speaker: "아이나", note: "연대의 논리" },
      { line: "세상에 저절로 터지는 폭탄은 없다는 거.", speaker: "영재", note: "" }
    ],
    quotes_note: "대본 기준 주요 대사. 2026.7.25 두산아트센터 개막 — 관객·언론 리뷰는 개막 후 수집 예정."
  },

  "마리 퀴리": {
    press: [
      { outlet: "VOP", date: "2025.08", quote: "방사성 물질 '라듐' 뒤에 감춰진", url: "https://vop.co.kr/A00001677258.html" },
      { outlet: "한경닷컴", date: "2025.10", quote: "마리퀴리의 고뇌·개츠비의 환상", url: "https://www.hankyung.com/article/2025100231807" },
      { outlet: "기호일보", date: "2025.09", quote: "과학자 아닌 인간 마리를 말하다", url: "http://www.kihoilbo.co.kr/news/articleView.html?idxno=1159856" },
      { outlet: "스타뉴스", date: "2025.08", quote: "빛과 그림자 속 되살아난 위대한 과학자", url: "http://www.starnewsk.com/news/articleView.html?idxno=48300" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    quotes: [
      { line: "당신은 왜 과학을 하십니까?", speaker: "피에르", note: "마리와 피에르의 첫 만남 장면 — 명대사로 회자" },
      { line: "애썼어 마리, 충분한 삶이었어.", speaker: "안느", note: "마리의 고단했던 삶에 대한 마지막 위로" }
    ],
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
    press: [
      { outlet: "아트인사이트", date: "2025.08", quote: "내 안에 살아 숨쉬네 하카두!", url: "https://www.artinsight.co.kr/news/view.php?no=76816" },
      { outlet: "더팩트", date: "2025.07", quote: "음악의 힘과 매력에 흠뻑 취해", url: "https://news.tf.co.kr/read/entertain/2225629.htm" },
      { outlet: "퀸매거진", date: "2025.07", quote: "여름을 뚫고 나를 흔드는 음악", url: "http://www.queen.co.kr/news/articleView.html?idxno=437270" },
      { outlet: "VOP", date: "2025.07", quote: "로큰롤로 뒤흔든 인종차별의 시대", url: "https://vop.co.kr/A00001674745.html" },
      { outlet: "위드인뉴스", date: "2025.07", quote: "차별의 벽을 부순 영혼의 음악", url: "http://www.withinnews.co.kr/news/view.html?section=9&category=119&item=&no=36595" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "에너지, 감동, 스토리, 음악까지 빠지는 게 하나도 없고", source: "네이버 블로그 · Eat, Play, Love", date: "2025.08", url: "https://blog.naver.com/younifer1004/223961623617" },
      { quote: "무대가 시작되자마자 그 기대는 벅찬 감동으로 바뀌었습니다", source: "네이버 블로그 · 피노맘의 알록달록 세상", date: "2025.07", url: "https://blog.naver.com/kambohs/223952609462" },
      { quote: "볼까 말까 고민하시는 분들에겐 무조건 추천", source: "네이버 블로그 · 레오나르도 아 카프리치오", date: "2025.06", url: "https://blog.naver.com/ksw05168/223903740889" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/멤피스/멤피스_2023_still.jpg", caption: "앙상블 넘버 (2023)", credit: "프로덕션 스틸 · 언론 공개" },
      { src: "assets/photos/멤피스/멤피스_2025_still.jpg", caption: "Rolling Rocks 무대 (2025)", credit: "프로덕션 스틸 · 언론 공개" },
      { src: "assets/photos/멤피스/멤피스_2023_still2.jpg", caption: "개막 무대 — Rolling Rocks·군무·피날레 (2023)", credit: "언론 공개 · 개막 리뷰" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "팬레터": {
    press: [
      { outlet: "아트인사이트", date: "2026.02", quote: "나를 잃지 않고 당신에게", url: "https://www.artinsight.co.kr/news/view.php?no=79488" },
      { outlet: "기호일보", date: "2026.01", quote: "편지로 피어난 그 시절 문인들의", url: "https://www.kihoilbo.co.kr/news/articleView.html?idxno=3010242" },
      { outlet: "TV데일리", date: "2026.01", quote: "지독하게 매혹적인 사랑의 희열", url: "http://www.tvdaily.co.kr/read.php3?aid=17673399001774080002" },
      { outlet: "SBS", date: "2025.12", quote: "느리지만 묵직한 여운…그것은 사랑이었다", url: "https://ent.sbs.co.kr/news/article.do?article_id=E10010310779" },
      { outlet: "아트인사이트", date: "2026.02", quote: "찬란한 봄과 나란히 앉은 비극", context: "10주년", url: "https://www.artinsight.co.kr/news/view.php?no=79497" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    quotes: [
      { line: "아이고, 우리 원고 때문에? 괜찮소. 그깟 거 김형이라면 한 획에 써도 명작이겠지요. 대충 쓰시오.", speaker: "이윤", note: "4연 대본집 28p 인용 — 세 배우(철윤·형훈윤·표윤)가 각기 다른 톤으로 연기하는 대표 장면" }
    ],
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
    press: [
      { outlet: "더뮤지컬", date: "2026.05", quote: "내가 사랑했던 낡은 고전 문학에게", url: "http://www.themusical.co.kr/Magazine/Detail?num=5599" },
      { outlet: "셀럽미디어", date: "2026.04", quote: "교실 안의 역사, 그 찬란하고 불편한 기록", url: "http://www.celuvmedia.com/article.php?aid=1775204178517910006" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
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
    press: [
      { outlet: "퀸매거진", date: "2025.06", quote: "7년 만에 다시 무대에", url: "http://www.queen.co.kr/news/articleView.html?idxno=436072" },
      { outlet: "조이뉴스24", date: "2025.05", quote: "단 나흘간의 만남으로", url: "http://www.joynews24.com/view/1841615" },
      { outlet: "SWTV뉴스", date: "2025.05", quote: "감정의 파도를 느끼게", url: "https://swtvnews.com/news/newsview.php?ncode=1065614694875918" },
      { outlet: "한경닷컴", date: "2025.05", quote: "아내·엄마 아닌 진짜 '나'를 만났다", url: "https://www.hankyung.com/article/202505167474H" },
      { outlet: "문화저널21", date: "2025.05", quote: "7년 만에 돌아온 웰메이드 로맨스 뮤지컬", url: "https://vop.co.kr/A00001671161.html" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
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
    director_note: { body: "하나의 호텔 방, 렉싱턴 661호. 그 좁은 공간에서 10년을 사이에 두고 벌어지는 세 개의 범죄를 관객이 '목격'하게 하고 싶었다. 무대와 객석의 경계를 지우고 관객을 사건의 증인이자 공범으로 앉힌다. 화려함이 아니라 밀도로 승부하는 연극.", note: "※ 초안 — 연출가 검토 후 본인 언어로 확정 예정." },
    press: [
      { outlet: "오마이뉴스", date: "2025.05", quote: "코로나19 팬데믹 탓에", url: "https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003127429" },
      { outlet: "엑스포츠뉴스", date: "2025.03", quote: "피비린내 나는 복수극", url: "https://www.xportsnews.com/article/1974550" },
      { outlet: "한경닷컴", date: "2025.03", quote: "대학로 오픈런 무대, 사건에 빠져들다", url: "https://www.hankyung.com/article/202503257618H" },
      { outlet: "SWTV뉴스", date: "2025.03", quote: "시카고의 좁은 호텔 방 안, 직접 목격하는 세 번의 살인", url: "https://swtvnews.com/news/newsview.php?ncode=1065603472559187" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "영화 같은 연출에 엄청난 연기 실력, 보는 내내 입을 다물지 못하고 몰입", source: "네이버 블로그 · 새봄 in 취향가옥", date: "2025.05", url: "https://blog.naver.com/saebom_eugene/223876579578" },
      { quote: "전회 매진인 핫한 대학로 연극", source: "네이버 블로그 · 쎄려니", date: "2025.03", url: "https://blog.naver.com/sseryuni/223803148480" },
      { quote: "극대화된 관음에의 허용과 스타일리시한 미장센", source: "네이버 블로그 · 나무&", date: "2021.10", url: "https://blog.naver.com/faithjjj/222540043119" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/카포네트릴로지/카포네_2015_still.jpg", caption: "초연 — 렉싱턴 호텔 661호 이머시브 무대 (2015)", credit: "뉴시스 · 언론 공개" },
      { src: "assets/photos/카포네트릴로지/카포네_2018_still.jpg", caption: "3연 장면 — 김도빈·손지윤 (2018)", credit: "스타데일리뉴스 · 언론 공개" },
      { src: "assets/photos/카포네트릴로지/카포네_2025_still.jpg", caption: "4연 장면 (2025)", credit: "프로덕션 스틸 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "벙커 트릴로지": {
    press: [
      { outlet: "위드인뉴스", date: "2026.01", quote: "4년 만에 돌아왔다", url: "http://www.withinnews.co.kr/news/view.html?section=134&category=137&item=&no=35582" },
      { outlet: "동아일보", date: "2019.01", quote: "전쟁터의 참호처럼 꾸민", url: "http://news.donga.com/3/all/20190115/93701887/1" },
      { outlet: "문화저널21", date: "2018.12", quote: "세 편의 옴니버스 연극", url: "http://www.vop.co.kr/A00001366953.html" },
      { outlet: "서울경제", date: "2025.12", quote: "참호 속에서 목격하는 전쟁의 비극", url: "https://www.sedaily.com/NewsView/2H1WNDJCAD" },
      { outlet: "문화저널21", date: "2026.01", quote: "전쟁의 참상을 공감각 할 수 있는 무대", url: "https://vop.co.kr/A00001687160.html" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "참혹하지만 아름다운 인간의 초상", source: "네이버 블로그 · 자유로운영혼", date: "2025.10", url: "https://blog.naver.com/freespirit___/224044969774" },
      { quote: "표만 있으면 무조건 들어가서 보시는 것을 적극 추천", source: "네이버 블로그 · 늘보토끼의 공연전시 일지", date: "2025.12", url: "https://blog.naver.com/hopeful1101/224123172734" },
      { quote: "정말 오랜만에 심장 빨리 뛰는 공연을 보고 왔어요", source: "네이버 블로그 · 뿔로그", date: "2026.01", url: "https://blog.naver.com/oxo777777/224164793307" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/벙커트릴로지/벙커_2017_still.jpg", caption: "참호 속 장면 (2017)", credit: "프로덕션 스틸 · 언론 공개" },
      { src: "assets/photos/벙커트릴로지/벙커_2018_still.jpg", caption: "소총 대치 장면 (2018 재연)", credit: "프레스콜 · 언론 공개" },
      { src: "assets/photos/벙커트릴로지/벙커_2019_still.jpg", caption: "주요 장면 모음 (2019)", credit: "언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "미러 (A Mirror)": {
    director_note: { body: "관객은 극장에 들어서는 순간 이미 '허가되지 않은 연극'을 보러 온 하객이 된다. 결혼식이라는 위장, 그리고 끝내 커튼콜을 지우는 선택은, 검열이 외부의 강제가 아니라 우리 안으로 스며드는 방식임을 몸으로 느끼게 하려는 장치다. '당신은 지금 무엇을 보고 있다고 믿는가' — 그 질문을 관객에게 되돌려준다.", note: "※ 초안 — 연출가 검토 후 본인 언어로 확정 예정." },
    press: [
      { outlet: "한겨레", date: "2025.07", quote: "연극과 검열에 대한 재기발랄하고 스릴 넘치는 풍자", context: "관객이 자발적으로 '스포일러 금지' 외치는 연극", url: "https://www.hani.co.kr/arti/culture/music/1207305.html" },
      { outlet: "중앙일보", date: "2025.07", quote: "이 결혼은 허가되지 않은 연극…검열과 예술의 한판 승부", url: "https://www.joongang.co.kr/article/25350928" },
      { outlet: "한국일보", date: "2025.07", quote: "위장 결혼식에서 시작된 극중극… 허구 속에 드러나는 진실", url: "https://www.hankookilbo.com/News/Read/A2025070816120000017" },
      { outlet: "서울신문", date: "2025.07", quote: "관객이 곧 하객… 경보음 울리는 '불온한 결혼식'", context: "연극 리뷰", url: "https://www.seoul.co.kr/news/life/performance/2025/07/29/20250729030001" },
      { outlet: "세계일보", date: "2025.09", quote: "검열의 국가 폭력 실체 비추다", context: "'이 공연은 허가되지 않았습니다'", url: "https://www.segye.com/newsView/20250914507750" },
      { outlet: "서울문화투데이", date: "2025.07", quote: "말해지지 않은 것들을 통해 오히려 더 많은 것을 드러내는 연극", context: "거울은 무엇을 비추고 있는가", url: "http://www.sctoday.co.kr/news/articleView.html?idxno=45671" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "웃기고, 감동적이고, 신기하고, 반전 짜릿하고", source: "네이버 블로그 · 순간을 소중하게", date: "2025.07", url: "https://blog.naver.com/around_5_am/223941569110" },
      { quote: "연극 속 연극이 또 반전의 연극이 되는 흥미로운 연극", source: "네이버 블로그 · 영혼의 잡덕수프", date: "2025.07", url: "https://blog.naver.com/jobduglife/223939939077" },
      { quote: "예상치 못한 반전으로 큰 사랑을 받은", source: "네이버 블로그 · 루이스뚱이의 일상", date: "2025.07", url: "https://blog.naver.com/ddongee17/223921118731" },
      { quote: "나에게 <미러>는 평생 끝나지 않는 연극이 되었다", source: "티스토리 · 행성B", date: "2025.08", url: "https://space1344.tistory.com/173" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/미러/미러_2025_still.jpg", caption: "예식 장면 (2025 초연)", credit: "프로덕션 스틸 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "스윙데이즈": {
    press: [
      { outlet: "4th뉴스", date: "2026.05", quote: "유일한 박사 실화 기반 뮤지컬 '스윙데이즈' 흥행 돌풍", url: "http://www.4th.kr/news/articleView.html?idxno=2112114" },
      { outlet: "데일리스마트", date: "2024.11", quote: "과정의 휴머니즘을 담은", context: "암호명 A", url: "http://www.dailysmart.co.kr/news/articleView.html?idxno=100954" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    quotes: [
      { line: "보웅아 — 야스오라고 부르면 돌아볼 거냐?", speaker: "일형 · 야스오", note: "2막 M20 핵심 교환 — 이름과 정체성" }
    ],
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
    press: [
      { outlet: "동아일보", date: "2019.01", quote: "백골단 곤봉 피하려 지하실에 숨어든 학생들", context: "룸 서울", url: "http://news.donga.com/3/all/20190129/93900918/1" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    quotes: [
      { line: "정권이 바뀌어도 우린 그대로야. 왜? 편하니까.", speaker: "룸서울", note: "체제 순응을 응축한 서울 룸의 대표 대사" },
      { line: "세상이 변해도 이 믹스커피는 남을 걸, 우리처럼?", speaker: "룸서울", note: "변하지 않는 일상의 상징 — 믹스커피" }
    ],
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
    press: [
      { outlet: "위드인뉴스", date: "2018.12", quote: "1952년 거제포로수용소의 소년 공산포로", url: "http://withinnews.co.kr/news/view.html?section=169&category=170&item=&no=17455" },
      { outlet: "뉴스컬처", date: "2016.03", quote: "춤을 내세운 뮤지컬의 본보기, 만개해 돌아온", url: "http://www.newsculture.press/view.htm?idxno=2016030710520005903" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "정말 재밌는 뮤지컬이어서 꼭 추천드리고 싶다", source: "네이버 블로그 · 하루하루 즐겁고 재미있게", date: "2015.05", url: "https://blog.naver.com/cobongin/220369270912" },
      { quote: "웃다가 울고 흐뭇해지고 참 즐거운 시간, 누구나 즐겁게 보실만한 작품", source: "네이버 블로그 · LIVE", date: "2015.04", url: "https://blog.naver.com/25danny/220361457829" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/로기수/로기수_2015_still.jpg", caption: "초연 무대 (2015)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "리지": {
    press: [
      { outlet: "위드인뉴스", date: "2024.10", quote: "콘서트와 뮤지컬의 경계를 넘나드는", url: "http://www.withinnews.co.kr/news/view.html?section=9&category=119&item=&no=34578" },
      { outlet: "동아닷컴 스포츠", date: "2022.04", quote: "록음악에 살인사건을 때려넣은 희대의 뮤지컬", url: "https://sports.donga.com/article/all/20220419/112965574/2" },
      { outlet: "톱스타뉴스", date: "2024.09", quote: "여성 락 뮤지컬의 진가", url: "http://www.topstarnews.net/news/articleView.html?idxno=15549879" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [ { quote: "가녀린 몸에서 파워 넘치는 목소리에 감동", source: "네이버 블로그 · 베르니의 하루하루이야기", date: "2020.05", url: "https://blog.naver.com/vernie222/221937404025" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/리지/리지_2020_still.jpg", caption: "초연 무대 (2020)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "창문 넘어 도망친 100세 노인": {
    press: [
      { outlet: "위드인뉴스", date: "2019.12", quote: "'삶의 불꽃'을 피우는 100세 노인", url: "http://withinnews.co.kr/news/view.html?section=134&category=137&item=&no=20628" },
      { outlet: "뉴스컬처", date: "2019.12", quote: "다시 불을 붙여..창문 넘어 도망친 100세 노인", url: "http://www.newsculture.press/view.htm?idxno=2019122714364205055" },
      { outlet: "아트인사이트", date: "2019.12", quote: "반복된 일상에 지친 이들이여, 창문을 넘자", url: "https://www.artinsight.co.kr/news/view.php?no=45316" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [ { quote: "배우들의 호흡이 간결해서 더 즐겁게 관람했던", source: "네이버 블로그 · 먹꾸름", date: "2020.05", url: "https://blog.naver.com/fmsjjang/221958811861" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/창문넘어도망친100세노인/창문넘어_2019_still.jpg", caption: "무대 장면 (2019)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "바스커빌 - 셜록홈즈 미스터리": {
    press: [
      { outlet: "뉴스컬처", date: "2024.07", quote: "5명의 배우가 40여개", url: "https://www.newsculture.press/news/articleView.html?idxno=551525" },
      { outlet: "뉴스컬처", date: "2024.05", quote: "관객리뷰 평점 9.9", url: "https://www.newsculture.press/news/articleView.html?idxno=548818" },
      { outlet: "위드인뉴스", date: "2024.06", quote: "홈즈의 유쾌한 수사가 시작된다", url: "http://www.withinnews.co.kr/news/view.html?section=134&category=137&item=&no=33582" },
      { outlet: "뉴스티엔티", date: "2024.05", quote: "2024년 대학로 공연들 중에서 단연 주목받고 있는 공연", context: "인터파크 평점 9.9", url: "http://www.newstnt.com/news/articleView.html?idxno=376401" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [ { quote: "홈즈 팬으로 호기심으로 보러 왔다가 대만족하고 돌아옴", source: "네이버 블로그 · 여행계의 만수르", date: "2024.08", url: "https://blog.naver.com/zadusuki/223548755385" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/바스커빌/바스커빌_2024_still.jpg", caption: "초연 무대 (2024)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "보이A": {
    press: [
      { outlet: "브릿지경제", date: "2023.08", quote: "마지막까지 '나이키 이스케이프'를 신", url: "https://www.viva100.com/main/view.php?key=20230804010001414" },
      { outlet: "위드인뉴스", date: "2023.06", quote: "우리의 편견에 질문을 던지는", url: "http://www.withinnews.co.kr/news/view.html?section=9&category=119&item=&no=30944" },
      { outlet: "경인일보", date: "2023.07", quote: "두 번째 삶 꿈꾼 '소년범'", url: "http://www.kyeongin.com/main/view.php?key=20230723010004429" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [ { quote: "울림 있는 뮤지컬", source: "네이버 블로그 · 볼로그", date: "2023.06", url: "https://blog.naver.com/tttley00/223146749790" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/보이A/보이A_2023_still.jpg", caption: "초연 무대 (2023)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "보니 앤 클라이드": {
    press: [
      { outlet: "퀸매거진", date: "2026.01", quote: "우리에게 내일은", url: "http://www.queen.co.kr/news/articleView.html?idxno=448878" },
      { outlet: "스포츠월드", date: "2026.01", quote: "1934년 5월", url: "https://www.sportsworldi.com/newsView/20260118504250" },
      { outlet: "SWTV뉴스", date: "2026.02", quote: "파멸로 내달리는 두", url: "https://www.swtvnews.com/news/newsview.php?ncode=1065602661758619" },
      { outlet: "위드인뉴스", date: "2025.12", quote: "끝을 알 것 같은 비극으로 가는 청춘들", url: "http://www.withinnews.co.kr/news/view.html?section=9&category=119&item=&no=38076" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "마치 보니랑 클라이드의 집에 제가 잠깐 놀러 간 것 같은 느낌", source: "네이버 블로그 · 초쵸춉의 소소한 여행일기", date: "2026.02", url: "https://blog.naver.com/chochocho_o/224189345399" },
      { quote: "음악이 진짜 중독성 있어요", source: "네이버 블로그 · 크레센도 : 점점 크게", date: "2026.01", url: "https://blog.naver.com/so891111/224155626681" },
      { quote: "배나라 배우님은 눈빛 자체가 이미 클라이드 그 자체였고", source: "네이버 블로그 · 라쏘의 하루", date: "2026.02", url: "https://blog.naver.com/oozzzi/224192962177" }
    ],
    audience_note: "2025–2026 시즌(김태형 연출, 홍익대 대학로 아트센터 대극장)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/보니앤클라이드/보니앤클라이드_2025_still.jpg", caption: "무대 장면 (2025)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "존경하는 엘레나 선생님": {
    press: [
      { outlet: "노컷뉴스", date: "2020.07", quote: "양심의 기준은 뭘까…'엘레나 선생님'의 질문", url: "https://www.nocutnews.co.kr/news/5386840" },
      { outlet: "문화저널21", date: "2020.06", quote: "도덕과 욕망에 대한 100분간의 설전", url: "https://www.vop.co.kr/A00001497222.html" },
      { outlet: "위드인뉴스", date: "2020.07", quote: "배우들의 연기가 주는 긴장감과 불편한 설정", url: "http://withinnews.co.kr/news/view.html?section=134&category=137&item=&no=22390" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "배우분들이 이렇게 연기를 잘해서 화가 치밀어 오르는 극은 정말 처음이었네요", source: "네이버 블로그 · 꿈을 향한 정거장", date: "2020.06", url: "https://blog.naver.com/qhrguscjf99/222008213621" },
      { quote: "흥미로운 연극이 생겨 예매하고 보고왔습니다", source: "네이버 블로그 · 평범한 하루", date: "2020.07", url: "https://blog.naver.com/tjklc0310/222032150825" }
    ],
    audience_note: "2020 공연(김태형 연출, 홍익대 대학로 아트센터 소극장)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/존경하는엘레나선생님/존경하는엘레나_2020_still.jpg", caption: "무대 장면 (2020)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "오펀스": {
    press: [
      { outlet: "위드인뉴스", date: "2022.12", quote: "단지 필요한 건 단 한마디의 격려일 뿐", url: "http://www.withinnews.co.kr/news/view.html?section=134&category=137&item=&no=29497" },
      { outlet: "경기일보", date: "2023.01", quote: "베테랑 배우들의 묵직한 메시지, 연극 '오펀스'", url: "http://www.kyeongin.com/main/view.php?key=20230108010001386" },
      { outlet: "BNT뉴스", date: "2026.04", quote: "9년 만 복귀…'욕설 열연' 파격 변신", url: "https://www.bntnews.co.kr/article/view/bnt202604290166" },
      { outlet: "위드인뉴스", date: "2026.03", quote: "대학로 최고의 화제작 연극 《오펀스》가 4년 만의 돌아왔다", url: "http://www.withinnews.co.kr/news/view.html?section=134&category=137&item=&no=38785" },
      { outlet: "셀럽미디어", date: "2026.04", quote: "격려를 잃은 시대, '오펀스'가 건네는 한마디", url: "http://www.celuvmedia.com/article.php?aid=1776753701519001006" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "1막은 티키타카가 끝내주는 깔깔 극이었다", source: "네이버 블로그 · from_echu", date: "2026.05", url: "https://blog.naver.com/from_echu/224272848487" },
      { quote: "블랙코미디는 제 취향이 아닌데 오펀스는 취향이었어요", source: "네이버 블로그 · 혤로, 연뮤덕", date: "2024.09", url: "https://blog.naver.com/everday_pit-a-pat/224239193356" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/오펀스/오펀스_2022_still.jpg", caption: "무대 장면 (2022)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "홀연했던 사나이": {
    press: [
      { outlet: "뉴스컬처", date: "2018.02", quote: "확실히, 아주 다른 뮤지컬 '홀연했던 사나이'", url: "http://www.newsculture.press/view.htm?idxno=2018022309393148515" },
      { outlet: "이데일리", date: "2021.08", quote: "크게 웃고 즐기려면? 뮤지컬 '홀연했던 사나이'", url: "http://www.edaily.co.kr/news/newspath.asp?newsid=01105366629145352" },
      { outlet: "이투데이", date: "2021.08", quote: "꿈이 있다면 인생은 '희극'", url: "https://www.etoday.co.kr/news/view/2051764" },
      { outlet: "위드인뉴스", date: "2021.07", quote: "허세를 기세로 만드는 작품", url: "http://www.withinnews.co.kr/news/view.html?section=9&category=119&item=&no=25323" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "웃다 보면 어느새 마음이 따뜻해지는 힐링 뮤지컬", source: "네이버 블로그 · 김조빵의 슬기로운생활", date: "2018.02", url: "https://blog.naver.com/jiwon3131/223299290296" },
      { quote: "나이 상관없이 즐겁게 관람할 수 있는 극", source: "네이버 블로그 · 냠냠이 일기장", date: "2018.02", url: "https://blog.naver.com/yamyam_diary/223334217537" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/홀연했던사나이/홀연했던_2018_still.jpg", caption: "초연 무대 (2018)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "비더슈탄트": {
    press: [
      { outlet: "MHN스포츠", date: "2023.10", quote: "평점 9점 이상...대학로 뮤지컬 PICK3", url: "https://www.mhns.co.kr/news/articleView.html?idxno=564228" },
      { outlet: "위드인뉴스", date: "2023.10", quote: "야만의 시대에 살았던 소년들의 격정적인 넘버들", url: "http://www.withinnews.co.kr/news/view.html?section=9&category=119&item=&no=31842" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    quotes: [
      { line: "이 칼 앞에 맹세해, 우린 서로 세상 끝까지 목숨 다해 지킨다고", speaker: "매그너스 · 아벨", note: "두 사람의 맹세 — 작품의 정서적 중심" },
      { line: "부서질 듯 가느다란 한 줄기의 빛, 양날의 검 같은 위태로움", speaker: "매그너스 · 프롤로그 「양날의 검」", note: "저항의 위태로움을 여는 첫 넘버" }
    ],
    audience: [
      { quote: "절대 강추! 감동의 눈물을 흘리고 싶은 짜릿한 카타르시스", source: "네이버 블로그 · gogo며들기", date: "2022.11", url: "https://blog.naver.com/juimju1208/223231381000" },
      { quote: "탄탄한 내용, 웅장한 넘버, 뛰어난 노래 실력으로 이입이 좋았다", source: "네이버 블로그 · 이지한 일상", date: "2022.09", url: "https://blog.naver.com/tooeasy_/222854515536" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/비더슈탄트/비더슈탄트_2023_still.jpg", caption: "펜싱 장면 (2023 재연)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "언더스터디": {
    press: [
      { outlet: "오뉴스", date: "2022.01", quote: "내가 배우가 아니라고?", url: "https://www.onews.tv/news/articleView.html?idxno=109176" },
      { outlet: "아트인사이트", date: "2022.02", quote: "이해관계를 통해 권한과 권위를 다루는", url: "https://www.artinsight.co.kr/news/view.php?no=58107" },
      { outlet: "경향신문", date: "2022.01", quote: "막 뒤에서 펼쳐지는 진짜 무대 이야기", url: "https://www.khan.co.kr/article/202201091544011" },
      { outlet: "아트인사이트", date: "2022.01", quote: "삶이란 무대 위에선 누구나 주인공", url: "https://www.artinsight.co.kr/news/view.php?no=58065" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "배우들 연기의 진수를 보고싶으신 분들께 추천", source: "네이버 블로그 · 해피더쿠의 즐거운 생활", date: "2022.01", url: "https://blog.naver.com/dmstjrooda/222618912927" },
      { quote: "무대 뒤, 배우들의 애환을 담아낸 내용이라 기대하면서 예매", source: "네이버 블로그 · 어제와 오늘", date: "2022.01", url: "https://blog.naver.com/dusk3012/222628418399" }
    ],
    audience_note: "2021–2022 한국 초연(김태형 연출, 예술의전당 자유소극장)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/언더스터디/언더스터디_2021_still.jpg", caption: "초연 무대 (2021)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "식스 더 뮤지컬": {
    press: [
      { outlet: "스포츠월드", date: "2023.06", quote: "팝 음악으로 신랄하게 그린 여섯 왕비", url: "https://www.sportsw.kr/news/newsview.php?ncode=1065594253340319" },
      { outlet: "스타리스트", date: "2023.05", quote: "헨리 8세 여섯 왕비의 흥에 취한다", url: "http://www.slist.kr/news/articleView.html?idxno=447465" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "엄청난 완성도를 자랑하는 수준 높은 뮤지컬", source: "네이버 블로그 · Stay Positive", date: "2023.04", url: "https://blog.naver.com/han159753/223067130136" },
      { quote: "연출, 배우, 넘버, 커튼콜 진짜 미쳤다", source: "네이버 블로그 · :D", date: "2023.04", url: "https://blog.naver.com/seo05017/223062633653" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/식스/식스_2023_still.jpg", caption: "SIX 콘서트 무대 (2023)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "금란방": {
    press: [
      { outlet: "한경닷컴", date: "2024.09", quote: "2024년에 문 연 조선 클럽", url: "https://www.hankyung.com/article/202409283926H" },
      { outlet: "매일경제", date: "2024.09", quote: "내로남불을 깨는 통쾌함", context: "서울예술단 삼연", url: "https://n.news.naver.com/mnews/article/009/0005366567?sid=103" },
      { outlet: "조선일보", date: "2024.09", quote: "국립극장 후끈 달구는 '조선 19禁'", url: "https://n.news.naver.com/mnews/article/023/0003858156?sid=103" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "여지껏 본 적 없는 장르라 추천드려요", source: "네이버 블로그 · 해밍의 하루", date: "2024.09", url: "https://blog.naver.com/moonhaemini/223589931076" },
      { quote: "단순한 오락을 넘어 관객에게 깊은 생각과 감동을 줄 수 있다", source: "네이버 블로그 · 치링치링", date: "2024.09", url: "https://blog.naver.com/tkxkdwhdk888/223572111875" },
      { quote: "요즘 가장 핫한 공연", source: "네이버 블로그 · WANNA B", date: "2025.06", url: "https://blog.naver.com/songsu374/223910304760" },
      { quote: "뮤지컬의 화려함을 한껏 뽐내면서도 연극적 상상과 재치를 놓치지 않았다", source: "네이버 블로그 · rright-r", date: "2024.09", url: "https://blog.naver.com/rright-r/223577779326" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/금란방/금란방_2024_still1.jpg", caption: "앙상블 장면 (2024)", credit: "프로덕션 스틸 · 언론 공개" },
      { src: "assets/photos/금란방/금란방_2024_still2.jpg", caption: "무대 장면 (2024)", credit: "프로덕션 스틸 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "아몬드": {
    press: [
      { outlet: "서울신문", date: "2025.10", quote: "주인공 무표정인데 눈물·콧물이", url: "https://www.seoul.co.kr/news/life/performance/2025/10/29/20251029025002" },
      { outlet: "JTBC", date: "2025.10", quote: "무대에 오른 문학…뮤지컬 '아몬드'", url: "https://news.jtbc.co.kr/article/NB12266949" },
      { outlet: "오마이뉴스", date: "2025.12", quote: "감정을 느끼지 못하는 삶", url: "https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003189179" },
      { outlet: "오마이뉴스", date: "2025.07", quote: "배우와 관객 찬사 한몸에 받은", url: "https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003151929" },
      { outlet: "조이뉴스24", date: "2025.10", quote: "한권의 책을 읽었다⋯한글의 아름다운 매력", url: "http://www.joynews24.com/view/1901691" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "너무너무 행복하고 좋았다", source: "네이버 블로그 · 오늘 하루도", date: "2025.07", url: "https://blog.naver.com/seulgi066/224344512798" },
      { quote: "여운이 가득했던", source: "네이버 블로그 · 찬찬히", date: "2025.07", url: "https://blog.naver.com/o3o_0511/224351114274" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/아몬드/아몬드_2025_still1.jpg", caption: "재연 무대 — 소년을 둘러싼 시선들 (2025)", credit: "언론 공개" },
      { src: "assets/photos/아몬드/아몬드_2025_still2.jpg", caption: "재연 무대 장면 (2025, NOL 유니플렉스)", credit: "언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "천 개의 파랑": {
    photos: [ { src: "assets/photos/천개의파랑/천개의파랑_2024_still.jpg", caption: "로봇과 앙상블 — 2035년 서울 (2024)", credit: "연합뉴스 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시.",
    press: [
      { outlet: "위드인뉴스", date: "2024.05", quote: "2035년의 서울을", url: "http://www.withinnews.co.kr/news/view.html?section=9&category=119&item=&no=33436" },
      { outlet: "매일신문", date: "2024.04", quote: "따뜻한 위로를 전하고", url: "https://www.imaeil.com/page/view/2024042408304003028" },
      { outlet: "이데일리", date: "2025.01", quote: "K뮤지컬의 저력을", url: "http://www.edaily.co.kr/news/newspath.asp?newsid=01207046642041656" },
      { outlet: "데일리스마트", date: "2024.06", quote: "인간과 비인간의 경계를 허무는 연대와 공존", url: "https://www.dailysmart.co.kr/news/articleView.html?idxno=88389" },
      { outlet: "위드인뉴스", date: "2025.03", quote: "가장 차가워 보이는 소재로 가장 따스한 이야기를 그린 작품", url: "http://www.withinnews.co.kr/news/view.html?section=9&category=119&item=&no=35757" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "지난해 5월에 처음 보고 푹 빠져든 뒤", source: "네이버 블로그 · 이야기를 찾는 사람", date: "2025.01", url: "https://blog.naver.com/felizerin/223770539006" },
      { quote: "탄탄한 스토리라인 인간과 휴머노이드의 만남을 잘 풀어낸", source: "네이버 블로그 · eunpiri715", date: "2025.03", url: "https://blog.naver.com/eunpiri715/223779306827" },
      { quote: "찾아간 공연에서 저는 따뜻한 위로를 받고", source: "네이버 블로그 · jaykey0103", date: "2025.08", url: "https://blog.naver.com/jaykey0103/223964693828" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "오늘 처음 만드는 뮤지컬": {
    press: [
      { outlet: "브라보마이라이프", date: "2025.03", quote: "정해진 대본 없이 배우와 관객이", url: "https://bravo.etoday.co.kr/view/atc_view/16134" },
      { outlet: "문화뉴스", date: "2017.04", quote: "즉흥 뮤지컬 '오늘 처음 만드는 뮤지컬'", url: "http://www.munhwanews.com/news/articleView.html?idxno=51626" },
      { outlet: "위드인뉴스", date: "2024.12", quote: "오늘이 첫공이자, 막공이다", url: "http://www.withinnews.co.kr/news/view.html?section=9&category=119&item=&no=35179" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "막공 3일 전 첫 경험한 게 너무 아쉬울 정도로 좋았던", source: "네이버 블로그 · 캠핑갈까영", date: "2024.08", url: "https://blog.naver.com/joycamp0/223568508316" },
      { quote: "너무 재밌게 보고 온", source: "네이버 블로그 · 혤로, 연뮤덕", date: "2024.07", url: "https://blog.naver.com/everday_pit-a-pat/223523887747" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/오늘처음만드는뮤지컬/오늘처음_2024_still.jpg", caption: "연남장 캬바레 무대 (2024)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "이토록 보통의": {
    photos: [ { src: "assets/photos/이토록보통의/이토록보통의_2021_still.jpg", caption: "별밤 창문 — '어느 밤 그녀가 우주에서' (2021)", credit: "뉴시스 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시.",
    press: [
      { outlet: "위드인뉴스", date: "2021.09", quote: "사랑이야기 그 너머에 있는 감정", url: "http://www.withinnews.co.kr/news/view.html?section=9&category=119&item=&no=25803" },
      { outlet: "엑스포츠뉴스", date: "2021.10", quote: "특별한 감성 로맨스 (ft.반전)", url: "https://www.xportsnews.com/?ac=article_view&entry_id=1491078" },
      { outlet: "아트인사이트", date: "2021.09", quote: "사랑에 빠진 프란체스와 레미", url: "https://www.artinsight.co.kr/news/view.php?no=56107" },
      { outlet: "MHN", date: "2021.10", quote: "사랑하는 사람과 똑같은 복제인간", url: "http://www.mhns.co.kr/news/articleView.html?idxno=512756" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "이렇게 감동을 받으며 공연을 관람하고", source: "네이버 블로그 · 월광", date: "2023.10", url: "https://blog.naver.com/jaykey0103/223235573339" },
      { quote: "단순히 감성 말랑한 사랑 뮤지컬이 아니었다", source: "네이버 블로그 · 안 녕 일 기", date: "2023.12", url: "https://blog.naver.com/tjsdudrhadl/223306438111" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "#0528": {
    press: [
      { outlet: "위드인뉴스", date: "2025.11", quote: "실패한 배우들과 청년이 서로를 빛내는 법", url: "http://www.withinnews.co.kr/news/view.html?section=9&category=119&item=&no=37666" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "보는 내내 엄마 미소를 짓느라 끝나고 나올 때 잇몸이 다 마를 지경", source: "네이버 블로그 · 혼자서도 잘 놀아요", date: "2025.11", url: "https://blog.naver.com/cocod4321/224053677134" },
      { quote: "웃음과 감동의 두 마리 토끼를 잡은 작품", source: "네이버 블로그 · 미래를 준비하는 사람들", date: "2026.01", url: "https://blog.naver.com/cgs2020/224238141733" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "글로리아": {
    press: [
      { outlet: "문화뉴스", date: "2017.08", quote: "연극 '글로리아'가 보여주는 거대한 충격", url: "http://www.munhwanews.com/news/articleView.html?idxno=71555" },
      { outlet: "서울신문", date: "2017.07", quote: "가장 오래 근무했지만 모두에게 소외된", url: "http://www.seoul.co.kr/news/newsView.php?id=20170727029008" },
      { outlet: "뉴스컬처", date: "2016.08", quote: "외면받던 존재의 선택, 인간성 상실의 오늘을 비추다", context: "초연", url: "http://www.newsculture.press/view.htm?idxno=2016080512390036908" },
      { outlet: "헤럴드경제", date: "2017.08", quote: "진한 여운과 동반되는 근본적인 성찰", context: "재연", url: "https://biz.heraldcorp.com/view.php?ud=201708111821238452373_1" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [ { quote: "내가 관람한 연극 중 가장 잘 만든 극이라고 말하고 싶다", source: "네이버 블로그 · Rejoice Always!", date: "2017.08", url: "https://blog.naver.com/somabo/221068227942" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/글로리아/글로리아_2016_still.jpg", caption: "잡지사 사무실 (2016 초연)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "한밤중에 개에게 일어난 의문의 사건": {
    press: [
      { outlet: "BNT뉴스", date: "2015.12", quote: "열다섯 자폐아의 성장통은 결국", url: "https://www.bntnews.co.kr/article/view/bnt201512220006" },
      { outlet: "파이낸셜뉴스", date: "2015.12", quote: "범인을 잡겠다며 마을 사람들을", url: "http://www.fnnews.com/news/201512161821488312" },
      { outlet: "뉴스컬처", date: "2015.12", quote: "눈이 즐겁다? 마음마저 사로잡는", url: "http://www.newsculture.press/view.htm?idxno=2015121706510045829" },
      { outlet: "마이데일리", date: "2015.12", quote: "그건 내가 뭐든 할 수 있다는 뜻인가요?", context: "마지막 대사", url: "http://www.mydaily.co.kr/new_yk/html/read.php?newsid=201512151109911151" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [ { quote: "후기가 너무 좋아서 우리 크리스마스 문화활동으로 당첨", source: "네이버 블로그 · eRICA'sTORY", date: "2015.12", url: "https://blog.naver.com/kjherica/220578734255" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/한밤중에개/한밤중에개_2015_still.jpg", caption: "크리스토퍼 (2015 한국 초연)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "아나키스트": {
    press: [
      { outlet: "뉴스브라이트", date: "2024.12", quote: "독립운동기 세 청년의 이야기", context: "초연 개막", url: "http://www.newsbrite.net/news/articleView.html?idxno=187039" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "초연이라는데 완성도나 연기력, 넘버까지 모두 좋아서", source: "네이버 블로그 · 쏠라의 문화 탐방기", date: "2025.01", url: "https://blog.naver.com/onlylove0908/223736241287" },
      { quote: "웃음과 감동이 뒤섞인 공연의 매력을 일깨워 준 창작극", source: "네이버 블로그 · 언제나 좋은 시절", date: "2025.02", url: "https://blog.naver.com/windforlife/223745036704" },
      { quote: "잔잔한 감동을 가져온다", source: "네이버 블로그 · 사랑, 함께 했던 시간에 대한 예의", date: "2025.01", url: "https://blog.naver.com/hyoniholic/223736022589" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음."
  },

  "부치하난": {
    press: [
      { outlet: "위드인뉴스", date: "2024.10", quote: "상상력이 극대화된 창작 뮤지컬", url: "http://www.withinnews.co.kr/news/view.html?section=9&category=119&item=&no=34512" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "나의 평점은 별 4개, 화려한 무대장치와 수시로 바뀌는 세트들", source: "네이버 블로그 · 너굴's 스토리", date: "2024.09", url: "https://blog.naver.com/nugulpanda/223593745300" },
      { quote: "대립구도가 확실한 점이 너무 좋았어요", source: "네이버 블로그 · Silverpaper", date: "2024.09", url: "https://blog.naver.com/silverpap2r_/223593305881" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/부치하난/부치하난_2024_still.png", caption: "초대형 고래 무대 (2024)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "브루클린": {
    press: [
      { outlet: "매일경제", date: "2012.10", quote: "메마른 가슴 적시는 파스텔톤 동화", url: "http://news.mk.co.kr/news_forward.php?domain=news&no=672832&year=2012" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "폭발적인 가창력! 가슴을 울리는 힐링 뮤지컬", source: "네이버 블로그 · 타오르는 태양", date: "2013.01", url: "https://blog.naver.com/kk97653/70157890932" },
      { quote: "벅찬 감동이 남아 있었다", source: "네이버 블로그 · 로폰의 즐거운 하루", date: "2013.02", url: "https://blog.naver.com/weeeunjee/30160607876" }
    ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/브루클린/브루클린_2012_still1.jpg", caption: "콘서트 뮤지컬 무대 (2012)", credit: "프로덕션 스틸 · 언론 공개" },
      { src: "assets/photos/브루클린/브루클린_2012_still2.jpg", caption: "공연 장면 (2012)", credit: "프로덕션 스틸 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "모범생들": {
    press: [
      { outlet: "서울신문", date: "2017.07", quote: "친구는 적이 되었을까", url: "https://n.news.naver.com/mnews/article/081/0002836814" },
      { outlet: "문화뉴스", date: "2017.06", quote: "원조 '지탱극'인 '모범생들'은", url: "http://www.munhwanews.com/news/articleView.html?idxno=60376" },
      { outlet: "연합뉴스", date: "2017.07", quote: "엘리트의 비열한 욕망", url: "https://m.entertain.naver.com/article/001/0009403099" },
      { outlet: "베타뉴스", date: "2012.05", quote: "싸구려 가치관에 왜곡된 욕망", url: "http://www.betanews.net/article/562055" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [ { quote: "작은 감동으로 가득 채워줬습니다", source: "네이버 블로그 · 스트레스제로", date: "2012.02", url: "https://blog.naver.com/jslee402/10133161394" } ],
    audience_note: "예매처·SNS·블로그 공개 후기 중 호평을 선별 인용(짧은 발췌 + 원문 링크). 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/모범생들/모범생들_2017_still.jpg", caption: "무대 장면 (2017 프레스콜)", credit: "프레스콜 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "어쩔 수 없는 막, 다른 길에서": {
    press: [
      { outlet: "뉴시스", date: "2021.03", quote: "내용·형식·공간이 잘 맞물린 이머시브", url: "https://n.news.naver.com/mnews/article/003/0010414056?sid=103" },
      { outlet: "경향신문", date: "2021.03", quote: "'문청' 전태일의 못다 이룬 꿈, 무대에 오르다", url: "https://n.news.naver.com/mnews/article/032/0003063696?sid=103" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "이머시브 공연이지만 부담스럽지 않은 수준의 참여라서 좋았다", source: "네이버 블로그 · 혀기의 소소한 블로그", date: "2021.03", url: "https://blog.naver.com/classical97/222287610353" },
      { quote: "2층에서 일어난 일들이 제일 좋았다", source: "네이버 블로그 · 혀기의 소소한 블로그", date: "2021.03", url: "https://blog.naver.com/classical97/222287610353" }
    ],
    audience_note: "전태일기념관 제작 이머시브(2021 초연, 김태형 연출)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음.",
    photos: [
      { src: "assets/photos/어쩔수없는막/어쩔수없는막_2021_still1.jpg", caption: "무대 장면 (2021)", credit: "뉴시스 · 언론 공개" },
      { src: "assets/photos/어쩔수없는막/어쩔수없는막_2021_still2.jpg", caption: "가이드 생존권 장면 (2021)", credit: "뉴시스 · 언론 공개" }
    ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  },

  "월하가요": {
    press: [
      { outlet: "서울문화투데이", date: "2023.05", quote: "이머시브 뮤지컬 '월하가요'", url: "http://www.sctoday.co.kr/news/articleView.html?idxno=40717" },
      { outlet: "한국일보", date: "2023.06", quote: "배우·관객이 함께 만드는 '환상의 밤'", context: "300년 고택 선교장", url: "https://n.news.naver.com/mnews/article/469/0000744818?sid=103" },
      { outlet: "스타뉴스", date: "2023.06", quote: "강릉 지역 스토리 기반 창작 공연 호평", url: "http://www.starnewsk.com/news/articleView.html?idxno=37881" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
    audience: [
      { quote: "우연히 보게 된 공연이지만 너무 재밌었어요", source: "네이버 블로그 · Life is a Journey", date: "2023.06", url: "https://blog.naver.com/sealice/223132643234" },
      { quote: "새로운 시도였고 재미도 있었기에 전반적으로는 매우 만족스러운 공연이었다", source: "네이버 블로그 · 소근소근", date: "2023.06", url: "https://blog.naver.com/suhaniee/223142578212" }
    ],
    audience_note: "강릉 선교장 고택 이머시브(2023 초연, 김태형 연출)의 공개 관람 후기 발췌. 각 후기의 저작권은 작성자에게 있음."
  },

  "땡큐 베리 스트로베리": {
    press: [
      { outlet: "스포츠월드", date: "2023.04", quote: "2021년 재연되며 한국 관객들의 많은 사랑을 받아 왔다", url: "http://www.slist.kr/news/articleView.html?idxno=445460" }
    ],
    press_note: "언론 기사·리뷰 발췌를 출처 링크와 함께 인용. 각 기사의 저작권은 해당 매체에 있음.",
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
    audience_note: "2020 초연(김태형 연출, 드림아트센터 1관)의 공개 관람 후기 발췌. 2021 재연·2025는 타 연출이라 제외. 각 후기의 저작권은 작성자에게 있음.",
    photos: [ { src: "assets/photos/개와고양이의시간/개와고양이_2020_still.jpg", caption: "초연 무대 (2020)", credit: "프로덕션 스틸 · 언론 공개" } ],
    photos_note: "언론 공개 프로덕션 스틸. 저작권은 제작사에 있으며 아카이브 목적으로 크레딧과 함께 게시."
  }
};
