import { WorkCategory } from "../models/category.model";
import { Work } from "../models/work.model";

export const WORKS: { [key in WorkCategory]: Work[] } = {
  COMMUNICATION: [
    {
      id: 1,
      teamName: null,
      designer: [{ id: 23, nameKo: "박승주", studentId: 21700271 }],
      title: "PARTY WAVE AGIT",
      summary: "서핑 하우스 브랜딩",
      description:
        "파티웨이브 아지트는 서핑 스테이라는 새로운 경험을 제공합니다. 이곳은 서퍼들의 문화, 라이프스타일, 그리고 그들의 가치관을 다양한 활동을 통해 경험할 수 있는 공간입니다. 파티웨이브 아지트의 공간은 과 경험은 낡은 서핑 잡지, 판자집, 그리고 액자에서 영감을 받아 만들어졌습니다. 사람들은 음식, 서핑, 바다, 태양, 그리고 음악을 즐기며, 이를 통해 살아있음을 느낍니다. 우리는 다양한 맥락에서 모인 낯선 사람들에게 서핑이라는 연대 속에서 이뤄지는 모든 놀라움을 제공합니다.",
      thumbnail: "images/creation/communication/SeungjuPark_A/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/SeungjuPark_A/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/creation/communication/SeungjuPark_A/pc_contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/SeungjuPark_A/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/creation/communication/SeungjuPark_A/pc_contents_04.gif",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/communication/SeungjuPark_A/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "youtube",
          src: "wJpGLV84zOA",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/creation/communication/SeungjuPark_A/pc_contents_07.webp",
        },
      ],
    },
    {
      id: 2,
      teamName: null,
      designer: [{ id: 37, nameKo: "안희재", studentId: 21700427 }],
      title: "식(蝕) | 신성의 잔해",
      summary: "사라진 빛, 엇갈린 두 운명",
      description:
        "천명궁을 비추던 신성한 빛, '성휘'가 사라졌다. 그날 이후 천명궁은 어둠에 잠식되었고, 운명적으로 얽힌 연오와 세오는 각자의 길에서 성휘의 비밀을 추적하기 시작한다. 잃어버린 신성의 조각들을 되찾기 위한 여정에 연오와 세오의 곁을 지키는 것은 신비로운 조력자 '해태'. 그는 두 인물을 위험으로부터 보호하며 그들이 마주할 진실을 예고한다. 연오와 세오가 맞닥뜨릴 '신성의 잔해'는 과연 무엇일까? 운명에 저항하고자 하는 그들의 발걸음은 천명궁의 새로운 역사를 써내려갈 것이다.",
      thumbnail: "images/creation/communication/HeejaeAhn/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/HeejaeAhn/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "vtlp0e0XvDw",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/HeejaeAhn/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 3,
      teamName: null,
      designer: [{ id: 24, nameKo: "박승주", studentId: 21800297 }],
      title: "BOOGIE",
      summary: "다양하고 독특한 매력의 외계 친구들",
      description:
        "국내에서 최근 애완용 파출류를 입양하는 반려인들이 많아졌다. 낮선 동물을 데려다 키우는 것은 세상 다른 곳에서 느낄 수 있는 경험을 간접적으로 할 뿐 아니라, 끝없이 많은 종류들의 매력은 신비롭고 소소하게 재밌기로 알려졌다. 도통 속을 알 수 없는 파충류 친구들의 몸부림과 다양하고 도특한 매력들을 그래픽 디자인을 통해 해석했습니다, 그리고 파충류를 키우기 위해서는 일단 반려견이나 반려묘와 다르게 축소된 자연에 가까운 생태계 환경을 만들어줘야 하기 때문에, 자연의 법칙을 간접적으로 느끼며 그 작은 생태계를 직접 만들고 누리는 경험을 드립니다.",
      thumbnail: "images/creation/communication/SeungjuPark_B/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/SeungjuPark_B/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "N4iDH05KLV8",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/SeungjuPark_B/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/communication/SeungjuPark_B/pc_contents_04.webp",
        },
      ],
    },
    {
      id: 4,
      teamName: null,
      designer: [{ id: 27, nameKo: "박창조", studentId: 21800323 }],
      title: "한 수 베어스",
      summary: "프로야구 구단 '두산 베어스' 박물관",
      description:
        "'한 수 베어스'는 한국 프로야구 구단 '두산 베어스'를 주제로 만든 가상의 박물관입니다. 한국 프로야구 출범을 함께했으며 40년이 넘는 기간동안 많은 업적과 선수를 배출한 두산 베어스를 박물관에서 소개하고자 합니다. '한 수 베어스' 박물관을 홍보하기 위한 모션 그래픽 영상을 제작했습니다. '다양성'을 키워드로 하여 40년간 두산 베어스가 보여준 다양한 야구, 다양한 선수 등을 모션 그래픽 안에 담았습니다. 박물관을 통해 두산 베어스가 어떤 역사를 가지고 왔는지 함께 즐겨주시길 바랍니다.",
      thumbnail: "images/creation/communication/ChangjoPark/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/ChangjoPark/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "C3IcGHBf_wA",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/ChangjoPark/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 5,
      teamName: null,
      designer: [{ id: 31, nameKo: "송민준", studentId: 21800393 }],
      title: "삼국통일",
      summary: "한국의 삼국시대를 배경으로 한 보드게임",
      description:
        "‘삼국통일’은 한국의 삼국시대를 배경으로, 각 나라의 왕이 되어 다른 두 나라와의 전투에서 승리하고, 최종적으로 한반도를 통일하는 전략 보드게임입니다. 플레이어는 고구려, 백제, 신라 중 하나를 선택해 군사와 자원을 관리하며, 상대방의 성을 점령하고 영토를 확장해 나가야 합니다. 각 나라는 특수 능력을 가진 고유의 위인들을 보유하고 있어, 다양한 전략과 전술을 통해 승리를 쟁취할 수 있습니다. 삼국을 통일할 최강의 왕은 누구인가? 여러분의 지혜와 용기로 삼국의 운명을 바꿔보세요!",
      thumbnail: "images/creation/communication/MinjunSong/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/MinjunSong/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/communication/MinjunSong/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/MinjunSong/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/communication/MinjunSong/pc_contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/communication/MinjunSong/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/creation/communication/MinjunSong/pc_contents_06.webp",
        },
      ],
    },
    {
      id: 6,
      teamName: null,
      designer: [{ id: 49, nameKo: "이하준", studentId: 21800595 }],
      title: "네이버 나눔 스퀘어 네오 아랍",
      summary: "나눔 스퀘어 네오의 아랍 문자 폰트 페어링",
      description:
        "온라인 세상에 한글로 표현된 생각과 정보가 많아지길 바라며, 네이버가 2008년 한글 캠페인을 시작했습니다. 그 시작과 함께 탄생한 나눔 글꼴 시리즈의 후속작인 '나눔 스퀘어 네오'는 고유의 직선적인 형태의 글꼴로 친근한 미감과 안정적인 글줄이 특징이며, 다양한 환경에서 메시지를 주목도 있게 전달하기 좋은 글꼴입니다. 본 프로젝트는 한국 문화와 함께 다국적으로 널리 퍼지는 한글이, 라틴 문자와 매칭된 폰트 페어링을 넘어서 아랍 문자와 매칭한 폰트 페어링을 통해 더욱 다양하게 표현되길 바라며 진행되었습니다.",
      thumbnail: "images/creation/communication/HajuneLee/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/HajuneLee/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 7,
      teamName: null,
      designer: [{ id: 64, nameKo: "최가흔", studentId: 21800722 }],
      title: "색안경 끼고 보는 세상",
      summary: "젠틀몬스터 X 이찬혁 쇼케이스 브랜딩",
      description:
        "\"색안경 끼고 보는 게 나쁜 거야?\" '색안경 끼고 보는 세상' 은 젠틀몬스터와 이찬혁이 콜라보하여 기존 젠틀몬스터의 아이웨어 제품을 홍보하는 가상의 쇼케이스입니다. 새로운 도전을 마다하지 않는 이 둘이 만나 '색안경을 끼고 보다' 라는 부정적인 말을 나만의 뚜렷한 주관을 가지고 세상을 바라보는 것으로 새롭게 재정의합니다. 이 쇼케이스를 통해 사람들에게 본인만의 색안경을 찾아 착용하고 과감하게 도전하는 삶으로 함께 뛰어나가자고 제안합니다. ",
      thumbnail: "images/creation/communication/GaheunChoi/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/GaheunChoi/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/creation/communication/GaheunChoi/pc_contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/GaheunChoi/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/creation/communication/GaheunChoi/pc_contents_04.gif",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/communication/GaheunChoi/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "youtube",
          src: "sB1okTE33VY",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/creation/communication/GaheunChoi/pc_contents_07.webp",
        },
      ],
    },
    {
      id: 8,
      teamName: null,
      designer: [{ id: 2, nameKo: "강수빈", studentId: 21900006 }],
      title: "TILT-UP Festa",
      summary: "Nopamine TILT-UP Festa",
      description:
        "즉각적인 쾌락을 좇는 사회에서 오랜 시간의 흔적을 보는 것이 드문 일인 요즘, 노파민 틸트업 페스타는 삶의 지평을 새롭게 넓히는 발걸음이다. 발걸음이 이어가는 건강한 자극과 생각의 확장은 피사체의 아래에서부터 위를 향하는 카메라의 시선과 비슷하다. 틸트업 페스타는 러닝을 통해 새로운 유대와 만남의 장을 만들어 새로운 삶의 에너지와 깊은 취향 탐색을 통한 새로운 삶의 방식을 제공하고자 한다. 국민의 건강과 행복을 슬로건으로 내세워 90년간 한 자리를 지켜온 국민의 박카스, 동아제약과 함께",
      thumbnail: "images/creation/communication/SubinKang/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/SubinKang/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/communication/SubinKang/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "youtube",
          src: "BuRx7th5sEc",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/communication/SubinKang/pc_contents_04.webp",
        },
      ],
    },
    {
      id: 9,
      teamName: null,
      designer: [{ id: 4, nameKo: "고수영", studentId: 21900025 }],
      title: "HAPPY NEW DAY : 오늘의집 캠페인",
      summary: "오늘의집 팝업스토어 캠페인 브랜딩",
      description:
        "Happy New Year? ... Day! 오늘의집에서 주최하는 Happy New Day 캠페인 팝업스토어에 초대합니다. 매해 새해가 오면 우리는 \"Happy New Year!\"를 외치며 새로운 시작을 축하합니다. 하지만 사실 해는 매일 떠오르며, 언제나 새로운 날인걸요! 반복되는 일상이 지루해진 이들을 위해, 하루를 가장 가까이서 시작하고 마무리하는 '집'이라는 공간이 즐거워질 수 있도록 오늘의집 팝업스토어에서 라이프스타일 용품을 제안합니다. 이어 매일을 소중히 여기자는 캠페인 메시지를 던지며 '오늘의집'이 '일상을 소중히 하는 브랜드'로 이미지를 확장하고자 합니다.",
      thumbnail: "images/creation/communication/SuyoungKo/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/SuyoungKo/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "GYZUCW_oHwQ",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/SuyoungKo/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 10,
      teamName: null,
      designer: [{ id: 6, nameKo: "김가현", studentId: 21900061 }],
      title: "퐝퐝포항 VISIT POHANG YEAR 2025",
      summary: "2025 포항 방문의 해 프로모션 디자인",
      description:
        "2025년 여름, 포항 방문의 해를 기념하여 다양한 바다 액티비티와 함께 포항 프로모션 디자인을 진행했습니다. 이곳 포항은 이름에 걸맞게 서핑과 스노클링을 비롯한 해양 스포츠, 아름다운 바다 일몰과 활기 넘치는 수산시장, 그리고 바다 위에서 펼쳐지는 화려한 불빛 축제까지 더해져 퐝퐝 터지는 즐거움와 에너지를 만끽할 수 있습니다. 이번 프로모션을 통해 여름날의 포항을 단순한 관광지를 넘어, 바다와 함께 다채로운 활동을 즐길 수 있는 매력적인 도시로 표현하고자 했습니다. 2025년 여름, 즐거움이 퐝퐝터지는 포항에서 특별한 추억을 만들어보세요!",
      thumbnail: "images/creation/communication/GahyeonKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/GahyeonKim/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 11,
      teamName: null,
      designer: [{ id: 7, nameKo: "김경진", studentId: 21900067 }],
      title: "Int'l Art Cup Festa",
      summary: "Int'l Art Cup Festa 브랜딩",
      description:
        "Cut the Cup, in your way! 매일유업과 월간디자인이 함께하는 국제 아트 컵 페스타. 일상적인 컵의 새로운 가능성을 탐구하며, 즐거운 음료 문화를 선도합니다. 상상력 자극과 균형, 순수함을 표현하기 위해 앙리 마티스의 Cut-Outs 기법을 재해석 했습니다. 컵의 재구성과 조합은 엉뚱한 변화를 도모합니다. 컵이 단순한 물건을 넘어 창의적 도구로 변신하는 이 즐거운 축제에 여러분을 초대합니다. ",
      thumbnail: "images/creation/communication/KyungjinKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/KyungjinKim/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/creation/communication/KyungjinKim/pc_contents_02.gif",
        },
      ],
    },
    {
      id: 12,
      teamName: null,
      designer: [{ id: 8, nameKo: "김나경", studentId: 21900074 }],
      title: "빵과후 과일생각",
      summary: "과일타르트 베이커리 브랜딩",
      description:
        "빵과후 과일생각은 사람들이 건강하게 감정을 해소할 수 있는 제철과일 타르트를 판매하는 베이커리 브랜드입니다. 빵과후 과일생각은 계절마다 바뀌는 메뉴와 패키지를 통하여 계절의 흐름을 느끼고 감정을 환기하도록 돕습니다. 일상 속 하굣길, 퇴근길에 달달한 디저트가 생각날 때 혹은 사랑하는 사람의 마음을 다독여주고 싶을 때 가게를 방문하기를 바라는 마음을 담았습니다. 언제나 찾아올 수 있는 따뜻한 베이커리의 이미지, 타르트를 먹은 후 기분이 새롭게 변할 수 있다는 이미지를 전달하고자 합니다.",
      thumbnail: "images/creation/communication/NagyeongKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/NagyeongKim/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "VI_6bRmphK4",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/NagyeongKim/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 13,
      teamName: null,
      designer: [{ id: 12, nameKo: "김성순", studentId: 21900114 }],
      title: '"하나님의 관심"',
      summary: '싱어송라이터 이하진의 데뷔앨범 "관심"',
      description:
        "CCM 싱어송라이터의 대표곡인 “하나님의 관심은 온통 너에게” 그리고 \"내가 네 손을 놓지 않으리라\"가 수록된 데뷔앨범 '관심'의 앨범 브랜딩 작업이다. 각 곡에서 느낄 수 있는 하나님의 관심과 의지는 아름다운 피아노의 선율과 따뜻한 가수의 목소리를 통해 우리에게 깊은 감동으로 전해진다. 복음의 기쁜 소식을 담아낸 각 곡들이 어떤 표현과 기법으로 온전히 전달될 수 있을지에 대한 고민이 담겨있다.  복음의 통로가 될 싱어송라이터 '이하진'의 앞으로의 모든 행보의 초석이 되는 시간이 되길 소망한다.",
      thumbnail: "images/creation/communication/SeongsoonKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/SeongsoonKim/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 14,
      teamName: null,
      designer: [{ id: 26, nameKo: "박은실", studentId: 21900299 }],
      title: "서울극장 1979",
      summary: "서울극장 리브랜딩",
      description:
        "서울극장, 기억하시나요? 1979년 문을 열어 수많은 추억을 쌓았던 서울극장은 2021년 8월 31일, 긴 여정을 마치고 잠시 막을 내렸습니다. 본 프로젝트는 그 서울극장을 다시 열어, 과거의 시간과 현재를 이어주는 문화의 연결고리를 복원하고자 합니다. 과거와 현대가 공존하는 공간을 통해 서울극장은 다시금 새로운 세대에게 다가가고, 그 속에 담긴 이야기는 계속해서 이어질 것입니다.",
      thumbnail: "images/creation/communication/EunsilPark/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/EunsilPark/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/creation/communication/EunsilPark/pc_contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/EunsilPark/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 15,
      teamName: null,
      designer: [{ id: 28, nameKo: "서유나", studentId: 21900365 }],
      title: "The Seoul Graphic Art Fair",
      summary: "서울그래픽아트페어 브랜딩",
      description:
        "서울그래픽아트페어는 그래픽분야의 다양한 아티스트들이 참여하여 자신들의 개성 넘치는 작품을 전시하여 알리고, 대중과 소통하는 아트 축제입니다. 폭넓은 작품을 선보이며, 그래픽 디자인의 혁신과 창의성을 강조합니다. 관람객이 예술과 디자인의 세계에 몰입하고, 새로운 시각을 경험할 수 있도록 하는 것을 목표로 합니다. 또한 그래픽 아트의 최신 트렌드와 기술을 접할 수 있는 기회를 제공하며, 아트 컬렉터와 디자이너들에게 영감을 줄 것입니다. 여러분을 서울그래픽아트페어에서 만날 수 있기를 기대합니다!",
      thumbnail: "images/creation/communication/YunaSeo/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/YunaSeo/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "BB-KV9WRqNw",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/YunaSeo/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 16,
      teamName: null,
      designer: [{ id: 35, nameKo: "안다진", studentId: 21900417 }],
      title: "Timeless Sweetness",
      summary: "Baskin Robbins X Swatch 팝업",
      description:
        "컬러풀한 디자인과 즐거움의 가치을 중시하는 두 브랜드, 스와치(Swatch)와 배스킨라빈스(Baskin-Robbins)가 콜라보레이션을 선보입니다. 배스킨라빈스가 다양한 아이스크림을 통해 고객에게 개성과 즐거움을 제공하듯, 스와치는 다양한 시계 디자인으로 사람들에게 선택의 기쁨과 자신만의 스타일을 표현할 기회를 제공합니다. 팝업 스토어 'Timeless Sweetness'를 통해 시간과 달콤함은 빠르게 지나가지만, 그 순간을 즐길 수 있는 기회를 강조하며, 일상 속에서의 소중한 순간을 두 브랜드가 함께 제공한다는 메시지를 전달합니다.",
      thumbnail: "images/creation/communication/DajeenAhn/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/DajeenAhn/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 17,
      teamName: null,
      designer: [{ id: 40, nameKo: "이동연", studentId: 21900494 }],
      title: "Fotografiska Rebranding",
      summary: "사진 박물관 포토그래피스카 리브랜딩",
      description:
        'Fotografiska Museet(포토그라피스카 뮤지엄)은 사진, 예술, 그리고 문화를 전시하는 사진 미술관입니다. 포토그라피스카는 세계적인 미술관이며 현재 스톡홀름, 뉴욕, 베를린, 탈린, 그리고 상하이 총 다섯 군데에 개관했습니다. 포토그라피스카는 사진이라는 매체를 통해서 변화를 촉진하고 많은 사람들에게 영감을 주고자 하는 목표를 가지고 있습니다. 미술관의 기존 아이덴티티 시스템을 "Through a Different Perspective"이라는 컨셉으로 새롭게 리브랜딩을 진행했습니다.',
      thumbnail: "images/creation/communication/JohnDongyonLee/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "youtube",
          src: "4IKHCAuqYY4",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/communication/JohnDongyonLee/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "gif",
          src: "images/creation/communication/JohnDongyonLee/pc_contents_03.gif",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/communication/JohnDongyonLee/pc_contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/communication/JohnDongyonLee/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/creation/communication/JohnDongyonLee/pc_contents_06.webp",
        },
      ],
    },
    {
      id: 18,
      teamName: null,
      designer: [{ id: 47, nameKo: "이지향", studentId: 21900569 }],
      title: "Fairytale of Rotutu",
      summary: "'아름다운 커피' 팝업스토어",
      description:
        "'Fairytale of Rotutu'는 사회적 기업 '아름다운 커피'에서 로투투 마을의 공정무역 원두를 판매하는 팝업스토어 입니다. 공정무역을 이용하는 소비자들이 로투투를 살리는 열쇠를 갖고 있다는 설정으로 '로투투의 이야기'라는 동화 컨셉을 가져가게 되었습니다. 공정무역이라는 콘텐츠를 너무 무겁지 만은 않게 풀어내어 사람들에게 인상깊게 다가가도록 하였고 '아름다운 커피'의 선한 영향력을 알림과  동시에 사람들에게 환상적인 로투투 동화의 주인공을 경험케 하는 공간입니다.",
      thumbnail: "images/creation/communication/JihyangLee/thumnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/JihyangLee/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/communication/JihyangLee/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "youtube",
          src: "BUzxZPjAurU",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/communication/JihyangLee/pc_contents_04.webp",
        },
      ],
    },
    {
      id: 19,
      teamName: null,
      designer: [{ id: 50, nameKo: "이현화", studentId: 21900598 }],
      title: "Whiff",
      summary: "샌드캔들 브랜드 '위프' 브랜딩",
      description:
        "위프의 샌드캔들은 일상 속에서 찾기 어려운 고요한 휴식을 선사합니다. 위프가 제공하는 은은하고 깊이 있는 향은, 단순한 향기를 넘어 감각을 깨우고 마음의 평온을 가져다줍니다. 모래의 부드러움을 닮은 움직임은 자연의 고요함을 떠올리게 하며, 시각적으로도 차분함을 느끼게 합니다. 각각의 요소들이 조화롭게 어우러져 당신만의 공간에 편안함과 평화를 더합니다. 위프와 함께라면, 당신의 감각을 새롭게 일깨우고 내면의 고요함을 깊이 느끼며 진정한 휴식을 경험할 수 있습니다.",
      thumbnail: "images/creation/communication/HyounhwaLee/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/HyounhwaLee/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/creation/communication/HyounhwaLee/pc_contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/HyounhwaLee/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/creation/communication/HyounhwaLee/pc_contents_04.gif",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/communication/HyounhwaLee/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "youtube",
          src: "IJzVsgmDhHY",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/creation/communication/HyounhwaLee/pc_contents_07.webp",
        },
      ],
    },
    {
      id: 20,
      teamName: null,
      designer: [{ id: 59, nameKo: "정해인", studentId: 21900653 }],
      title: "From Rain to Roots",
      summary: "레인부츠 업사이클링 팝업",
      description:
        "합성고무로 제작된 레인부츠는 그 특성상 내구성과 방수 기능이 뛰어나지만, 재활용이 어렵다는 단점이 있습니다. 이에 락피쉬웨더웨어는 이러한 문제를 해결하고, 동시에 브랜드의 친환경적인 가치를 소비자에게 알리기 위한 프로젝트를 기획합니다. 이 팝업 스토어는 소비자들에게 기존 레인부츠를 새로운 용도로 변환함으로써 지속 가능한 소비의 중요성을 일깨우고, 환경 보호에 직접 참여할 수 있는 기회를 제공합니다. 이 과정에서 브랜드는 친환경적인 라이프스타일을 제시하며, 소비자에게 지속 가능한 패션의 가치를 전달합니다.",
      thumbnail: "images/creation/communication/HaeineJeong/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/HaeineJeong/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/creation/communication/HaeineJeong/pc_contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/HaeineJeong/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/communication/HaeineJeong/pc_contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/communication/HaeineJeong/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "gif",
          src: "images/creation/communication/HaeineJeong/pc_contents_06.gif",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/creation/communication/HaeineJeong/pc_contents_07.webp",
        },
        {
          id: 8,
          extension: "youtube",
          src: "br3tCw0tmlc",
        },
        {
          id: 9,
          extension: "webp",
          src: "images/creation/communication/HaeineJeong/pc_contents_09.webp",
        },
      ],
    },
    {
      id: 21,
      teamName: null,
      designer: [{ id: 62, nameKo: "조은비", studentId: 21900709 }],
      title: "Stigma 가상의 버츄얼 그룹 캐릭터 디자인",
      summary: "스티그마(stigma) 캐릭터 디자인",
      description:
        "스티그마(stigma)는 세상의 혼란과 유혹 속에서 신앙을 잃고 떠나려는 젊은이들을 보호하고, 그들이 다시 교회로 돌아오도록 돕는 가상의 보이그룹입니다. 각 멤버는 상징적인 'stigma'를 지니고 있으며, 이들은 단순한 아이돌이 아닌 영적인 수호자로서, 각기 다른 능력을 지닌 존재들 입니다. 각 멤버는 자신만의 특별한 '표식(stigma)'을 지니고 있으며, 이들은 각자의 능력을 통해 방황하는 영혼들이 다시 교회로 돌아올 수 있도록 인도하며, 하나님의 사랑과 구원의 길로 이끄는 영적인 수호자들 입니다.",
      thumbnail: "images/creation/communication/EunbeeCho/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/EunbeeCho/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 22,
      teamName: null,
      designer: [{ id: 3, nameKo: "강지은", studentId: 21901003 }],
      title: "réblue",
      summary: "업사이클링 쥬얼리 브랜딩",
      description:
        "réblue는 젠틀몬스터의 사이드 브랜드로, 버려질 선글라스를 재활용하여 고급스러운 주얼리로 재탄생시켜 환경 문제에 앞장서고자 합니다. 일정시간이 지나면 자외선 차단 기능이 떨어져 재기능을 발휘할 수 없는 선글라스는 결국 폐기되며 바다로 흘러가서 해양오염을 유발할 수 있습니다. 이를 해결하기 위해 réblue는 고객이 사용하지 않는 선글라스를 가져오면, 재활용하여 새로운 주얼리로 재탄생시킵니다. réblue와 함께 버려지게될 선글라스가 아름다운 액세서리로 다시 태어나는 과정을 지켜보며, 업사이클링으로 지구를 살릴수 있는 가치에 동참해 보세요!",
      thumbnail: "images/creation/communication/JieunKang/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/JieunKang/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "rFhIlIcIrOk",
        },
      ],
    },
    {
      id: 23,
      teamName: null,
      designer: [{ id: 13, nameKo: "김수아", studentId: 22000110 }],
      title: "어쨌든 달콤함",
      summary: "수제캔디 전문점 브랜딩",
      description:
        '일상 속 무료하거나 입이 심심한 순간이 올 때 자연스럽게 손이 가는 사탕. 이 사탕을 건강하게 맛볼 수 있다면 어떨까요? "어쨌든 달콤함"은 설탕 대신 자일리톨을 사용하고, 다양한 천연 재료들을 더해 건강하면서도 맛있는 수제 사탕을 제공합니다. 사탕을 소중한 사람에게 선물하여, 소소하지만 확실한 행복을 함께 공유합니다. 먹는 순간 느껴지는 작은 기쁨이 일상을 더욱 특별하게 만듭니다. 건강과 달콤함을 동시에 담아낸 "어쨌든 달콤함"의 사탕과 함께 행복을 나누세요!',
      thumbnail: "images/creation/communication/SuaKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/SuaKim/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "vaC3t9a9G-c",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/SuaKim/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/communication/SuaKim/pc_contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/communication/SuaKim/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/creation/communication/SuaKim/pc_contents_06.webp",
        },
      ],
    },
    {
      id: 24,
      teamName: null,
      designer: [{ id: 15, nameKo: "김은빈", studentId: 22000160 }],
      title: "커스텀 초콜릿 브랜드 'viv'",
      summary: "나만의 이야기를 담을 수 있는 초콜릿 브랜드",
      description:
        "자유분방하고 순수하던 어린 시절이 지나 어느새 어른이 되어버린 우리. 눈치 보기 바빠 이젠 어릴 적의 '진짜 내 모습'을 찾아보기가 어렵다. 'viv'는 개인의 취향과 이야기를 고스란히 담아낼 수 있는 커스텀 초콜릿 브랜드이다. 각자가 선호하는 필링, 초콜릿 타입, 토핑을 선택함으로써 자신만의 개성을 자연스럽게 표현할 수 있다. 어울리지 않을 것만 같은 조합을 시도해 보고, 남들이 존중해 주지 않는 취향을 마음대로 조합해 볼 수 있는 경험을 제공함으로써 어릴 적의 순수하고 창의적인 감성을 되살려준다.",
      thumbnail: "images/creation/communication/EunbinKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/EunbinKim/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "kW1-5KSfK0o",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/EunbinKim/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/creation/communication/EunbinKim/pc_contents_04.gif",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/communication/EunbinKim/pc_contents_05.webp",
        },
      ],
    },
    {
      id: 25,
      teamName: null,
      designer: [{ id: 18, nameKo: "노유원", studentId: 22000227 }],
      title: "논알콜 한식 다이닝 <반주>",
      summary: "논알콜 한식 다이닝 <반주> 브랜딩",
      description:
        "논알콜 한식 다이닝 <반주>는 음주자와 비음주자가 함께 한식과 전통주를 즐길 수 있는 새로운 개념의 한식 다이닝 공간입니다. 음식과 술의 조화를 즐기는 자리에서 비음주자가 소외되지 않고, 음주자와 비음주자가 함께 어울려 즐길 수 있는 문화를 만들고자 이 브랜드가 탄생했습니다. <반주>에서는 술을 마시지 않는 사람들도 한식과 함께 소주와 막걸리의 맛을 경험할 수 있도록 논알콜 공소주와 공막걸리를 제공합니다. <반주>는 술을 마시지 않아도 모두가 함께 어울려 즐길 수 있는 새로운 음주 문화를 지향합니다. 반주의 즐거움을  느껴보세요. Feel the joy of Banju!",
      thumbnail: "images/creation/communication/YuwonRo/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/YuwonRo/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/creation/communication/YuwonRo/pc_contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/YuwonRo/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/creation/communication/YuwonRo/pc_contents_04.gif",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/communication/YuwonRo/pc_contents_05.webp",
        },
      ],
    },
    {
      id: 26,
      teamName: null,
      designer: [{ id: 22, nameKo: "박보민", studentId: 22000260 }],
      title: "어쨌든,",
      summary: '"아무튼," 에세이 시리즈2 ',
      description:
        "기존의 '아무튼 시리즈'는 사소한 어떤 것이든 책 한 권의 주제가 될 수 있음을 보여준다. 위고, 제철소, 코난북스, 세 출판사가 함께 기획하고 돌아가며 출판하며 다양한 직종의 사람들이 기록한 일상 속 소중한 기쁨을 소개한다. <아무튼,> 시리즈의 2탄으로 <어쨌든,>을 가상으로 출시한다. 기존의 아무튼 시리즈는 일상 속 개인마다의 소중한 기쁨이나 일상을 소개했다면 시즌 2에서는 일상속에서 누구나 공감할 법한 상황들과 불편함들을 코믹스트립의 방식으로 이를 공유하고자 한다.",
      thumbnail: "images/creation/communication/BominPark/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/BominPark/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "3ui8JFogO70",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/BominPark/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 27,
      teamName: null,
      designer: [{ id: 30, nameKo: "서하령", studentId: 22000353 }],
      title: "몽나니",
      summary: "못난이과일 상생브랜드",
      description:
        "못난이과일 상생 프로젝트는 외형이 불완전한 과일을 주제로 한 캐릭터 브랜딩을 통해 소비자들에게 친근감과 재미를 전달하고자 기획된 작품입니다. 겉모습은 불완전하지만, 과일의 풍부한 맛과 영양이 그대로 유지됨을 강조하며, 소비자들이 외형이 아닌 본질적인 가치를 인식하도록 유도합니다. 이 브랜드는 단순한 제품 판매를 넘어 자연 자원의 효율적 이용과 환경 보호를 목표로 하며 불필요한 농작물 낭비를 줄이는 친환경적이고 윤리적인 소비를 실천할 수 있도록 돕는 것이 궁극적인 목표입니다.",
      thumbnail: "images/creation/communication/HaryungSeo/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/HaryungSeo/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 28,
      teamName: null,
      designer: [{ id: 34, nameKo: "안가현", studentId: 22000399 }],
      title: "Inside me, PiPPi",
      summary: "싱어송라이터 민수 브랜딩",
      description:
        "가수 민수는 음악을 통해 때로는 장난기 넘치는 리듬으로, 때로는 진솔한 감정을 담아낸 가사로 진심 어린 마음을 표현합니다. 이러한 민수의 개성있고 진정성 있는 음악을 '장난스럽지만 순수하게 마음을 표현하는 삐삐'로 정의하였습니다. 또한 자유롭고 독창적인 무드를 전달하기 위해 낙서 스타일의 드로잉 기법으로, 민수의 꾸밈없는 사랑과 개성을 나타내고자 했습니다. 민수의 음악을 들으며 우리 안에 있던 솔직한 마음을 마주해 볼까요? 'Inside me, PiPPi!'",
      thumbnail: "images/creation/communication/GahyunAn/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/GahyunAn/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/creation/communication/GahyunAn/pc_contents_02.gif",
        },
        {
          id: 3,
          extension: "gif",
          src: "images/creation/communication/GahyunAn/pc_contents_03.gif",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/communication/GahyunAn/pc_contents_04.webp",
        },
        {
          id: 5,
          extension: "youtube",
          src: "4l8rTZWSOGA",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/creation/communication/GahyunAn/pc_contents_06.webp",
        },
      ],
    },
    {
      id: 29,
      teamName: null,
      designer: [{ id: 39, nameKo: "유주희", studentId: 22000465 }],
      title: "LUSH, Korean Tradition Collection",
      summary: "코스메틱 브랜드 러쉬, 한국 한정판 컬렉션",
      description:
        "다채로운 색감과 향으로 많은 사랑을 받는 코스메틱 브랜드, 러쉬에서 한국 익스클루시브 에디션으로 선보이는 한국 전통 컬렉션을 소개합니다. 이 컬렉션에는 한국의 오방색과 조각보에서 영감을 받아, 전통의 아름다움을 현대적으로 재해석한 특별한 디자인과 감성이 담겨 있습니다. 한국 러쉬의 첫 번째 자체 제작 제품 컬렉션으로, 오직 한국에서만 경험할 수 있는 한정판 제품들로 구성되어 있습니다. 고유한 아름다움으로 가득 차 당신에게 특별한 순간을 선사할 러쉬의 한국 전통 컬렉션을 만나보세요!",
      thumbnail: "images/creation/communication/JooheeYoo/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/JooheeYoo/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "DDMDfIK1xFM",
        },
      ],
    },
    {
      id: 30,
      teamName: null,
      designer: [{ id: 44, nameKo: "이주아", studentId: 22000565 }],
      title: "무작정",
      summary: "시외버스를 이용한 여행 서비스 플랫폼",
      description:
        "무작정은 혼자 떠나는 여행에 동행하는 여행 서비스 플랫폼입니다. 지금 당장 떠나고 싶을 때, 편하게 혼자서 여행을 다녀오고 싶을 때, 친구나 가족과 시간을 맞추기 어려울 때 국내 시외버스를 이용하여 여행을 갈 수 있도록 돕습니다. 버스 안에서는 비행기 기내식처럼 음식 서비스를 제공합니다. 무작정과 연결된 숙소와 맛집을 이용 시 쿠폰을 받게 되고 마일리지를 통해 여행용품 굿즈를 받을 수 있습니다. 무작정은 국내에 가보지 못한 지역들을 즐겁게 가볼 수 있도록 쉬운 접근성을 만들고 시외버스 이용을 활성화 시켜 터미널 폐업을 막는 역할이 되고자 합니다.",
      thumbnail: "images/creation/communication/JuaLee/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/JuaLee/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "vvXJTXJQWIU",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/JuaLee/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 31,
      teamName: null,
      designer: [{ id: 45, nameKo: "이주영", studentId: 22000566 }],
      title: "Groove Round",
      summary: "춤추는 사람들을 위한 영상 플랫폼",
      description:
        "댄서들이 출연한 서바이벌 프로그램의 흥행과 댄스 챌린지가 하나의 숏폼 컨텐츠로 자리잡아가며 춤에 대한 사람들의 관심은 여느 때보다 더 높아지고 있습니다. 춤 중에서도 특히 스트릿 댄스 같은 경우에는 입문이 어렵고 오랜 연습 과정이 필요합니다. Groove Round는 춤추는 사람들을 위한 영상 공유 플랫폼으로 춤을 사랑하는 사람들이 무대뿐만 아니라 일상에서도 춤과 함께할 수 있도록 돕습니다. 같은 장르를 연습하는 댄서들이 Groove Round에서 서로 소통하고 배틀을 비롯한 각종 온오프라인 행사에서 댄서 간의 연대감을 느낄 수 있도록 합니다.",
      thumbnail: "images/creation/communication/JuyoungLee/thumnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/JuyoungLee/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "uY1lvDPwpvw",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/JuyoungLee/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "youtube",
          src: "wTvvfDGl7JM",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/communication/JuyoungLee/pc_contents_05.webp",
        },
      ],
    },
    {
      id: 32,
      teamName: null,
      designer: [{ id: 53, nameKo: "임예담", studentId: 22000615 }],
      title: "반디사과",
      summary: "반디 사과 브랜딩",
      description:
        "'반디 사과'는 청송 비봉산 중턱에 있는 과수원입니다. '반디'는 반딧불이를 줄여 이르는 말로, 이 이름을 통해 깨끗한 자연 환경에서 사과가 재배됨을 나타냅니다. 나무 과수원의 자연 리듬을 시각화하여 사과가 자라는 과정과 자연의 생명력을 담아냈습니다. 과수원에는 해로운 벌레도 많지만, 반딧불이처럼 반가운 존재도 있어 잠시 멈춰 바라보게 됩니다. '반디 사과'는 짧은 만남 후에도 오래 기억에 남는 반딧불이처럼, 마음에 깊이 남는 브랜드가 되고자 합니다. 깨끗한 자연 속에서 자란 '반디 사과'를 통해 특별한 맛과 추억을 느껴보세요.",
      thumbnail: "images/creation/communication/YedamIm/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/YedamIm/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/creation/communication/YedamIm/pc_contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/YedamIm/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 33,
      teamName: null,
      designer: [{ id: 54, nameKo: "장소윤", studentId: 22000622 }],
      title: "홀리몰리! (HolyMoly!)",
      summary: "성경 기반 카드 게임",
      description:
        "'홀리몰리!(HolyMoly!)'는 일본의 '카루타' 형식을 채용한 카드 게임입니다. 규칙은 간단합니다. 두 세트 중 한 세트를 골라 카드를 잘 섞은 후 그림이 그려진 면을 위에 오게 해 카드를 펼쳐 놓습니다. 그리고 사회자는 나머지 세트를 섞은 후 뒷면에 적힌 성경 구절을 읽습니다. 플레이어들은 사회자가 말하는 것을 잘 듣고, 방금 말한 구절의 앞 혹은 뒤의 내용을 말하면서 해당 구절의 인물이 그려진 카드를 가져갑니다. 펼쳐진 카드가 전부 사라지면 게임이 끝나고, 더 많은 카드를 가져간 사람이 승리하게 됩니다. 성경 암기와 즐거운 카드 게임, 두 마리 토끼를 모두 잡아보세요!",
      thumbnail: "images/creation/communication/SoyoonJang/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/SoyoonJang/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 34,
      teamName: null,
      designer: [{ id: 56, nameKo: "전유은", studentId: 22000651 }],
      title: "Between Us",
      summary: "일광전구 X 에너지 절약 캠페인",
      description:
        "현대사회에서 기술의 발전은 우리에게 많은 편리함을 가져다주지만, 동시에 지구 환경에 큰 위협이 되기도 합니다. 기후위기에 시대에 지속가능한 미래를 위해 에너지 절약은 이제 선택이 아닌 필수입니다. 'Between Us' 는 아름다운 빛을 올바르게 사용하며 가치있는 삶을 가꾸어가는 지혜를 전하는 길잡이가 되고자 하는 조명 브랜드 ‘일광전구’가 전개하는 에너지 절약 캠페인입니다. 귀여운 3D 캐릭터가 보여주는 과거와 현재의 에너지 사용 방식 대조를 통해 유쾌하게 에너지 절약을 지향하고자 합니다.",
      thumbnail: "images/creation/communication/UeunJeon/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/UeunJeon/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/creation/communication/UeunJeon/pc_contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/UeunJeon/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/creation/communication/UeunJeon/pc_contents_04.gif",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/communication/UeunJeon/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "gif",
          src: "images/creation/communication/UeunJeon/pc_contents_06.gif",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/creation/communication/UeunJeon/pc_contents_07.webp",
        },
        {
          id: 8,
          extension: "youtube",
          src: "mL9dWQXWxt4",
        },
        {
          id: 9,
          extension: "webp",
          src: "images/creation/communication/UeunJeon/pc_contents_09.webp",
        },
      ],
    },
    {
      id: 35,
      teamName: null,
      designer: [{ id: 57, nameKo: "정예은", studentId: 22000681 }],
      title: "nighty-night",
      summary: "수면 라이프스타일 브랜딩",
      description:
        "'nighty-night'은 '잘 자'라는 인사의 의미로 쉽게 잠에 들지 못하는 현대인들을 위로하고 케어하는 수면 전문 브랜드입니다. 오감을 일깨워 하루의 긴장과 피로를 풀어주는 수면용품들을 제공하며 자신에게 최적화된 수면 환경을 조성함으로 '나만의 템포를 갖춘 밤'의 경험을 선사합니다. 별들이 찬란히 빛나는 밤, 부정적인 것들을 벗어 스스로를 아끼고 다독이는 애정과 응원 아래 안온하고 평안한 숙면을 누리길 바랍니다. \" Nighty-night! \"",
      thumbnail: "images/creation/communication/YeeunJung/thumnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/YeeunJung/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "hbilQIc1ipE",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/YeeunJung/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 36,
      teamName: null,
      designer: [{ id: 58, nameKo: "정은서", studentId: 22000686 }],
      title: "쉼, 패턴과 만나다",
      summary: "오패턴스튜디오X오늘의집 협업 전시",
      description:
        "패턴 디자인 연구소 O!Pattern.Studio가 라이프스타일 브랜드 오늘의집과 함께  <쉼, 패턴과 만나다>라는 주제로 특별한 전시를 진행합니다. 현대인들이 지친 일상 속에서 위로를 받고 휴식을 취할 수 있는 공간을 제안하며, 다양한 패턴 디자인을 통해 시각적 즐거움과 편안함을 제공합니다. 시아노타입 기법을 사용하여 얻은 형상을 패턴화함으로써, 색다른 패턴의 매력을 보여주고자 합니다. 전시를 통해 일상에서 벗어나 새로운 영감을 얻고, 자연에서 얻은 패턴의 아름다움을 감상하며 쉼을 가질 수 있는 시간을 경험하시길 바랍니다.",
      thumbnail: "images/creation/communication/EunseoJung/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/EunseoJung/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "soyHVOFDTnc",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/EunseoJung/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 37,
      teamName: null,
      designer: [{ id: 16, nameKo: "김현지", studentId: 22001014 }],
      title: "MUYU (無有)",
      summary: "자동차 비쥬얼 튜닝샵 'MUYU' 브랜딩",
      description:
        "철없는 애들이 철(iron)드는 튜닝샵 무유입니다. MUYU는 기본형 '무(無)'에서 차주들의 아이덴티티를 담아 '유(有)'니크한 차량으로 변신시키는 자동차 튜닝 브랜드입니다. 우리는 나이를 먹어도 철은 들지 않고, 오히려 자유분방한 상상력과 거침없는 도전을 즐기는 장난꾸러기들의 개성을 담아냅니다. 이러한 철학은 재미있고 엉뚱한 것을 좋아하는 무유가 기존의 틀에 얽매이지 않고 차 스타일링 문화를 누구나 쉽게 즐길 수 있는, 개성과 즐거움이 넘치는 새로운 흐름으로 만들어갑니다.",
      thumbnail: "images/creation/communication/HyunjiKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/HyunjiKim/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/communication/HyunjiKim/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "gif",
          src: "images/creation/communication/HyunjiKim/pc_contents_03.gif",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/communication/HyunjiKim/pc_contents_04.webp",
        },
        {
          id: 5,
          extension: "youtube",
          src: "-buNKpcBP1s",
        },
      ],
    },
    {
      id: 38,
      teamName: null,
      designer: [{ id: 19, nameKo: "류혜빈", studentId: 22001019 }],
      title: "After time, 29",
      summary: "29cm '기록' 팝업 스토어",
      description:
        "29cm는 일상의 작은 순간과 선택이 모여 각자의 고유한 라이프스타일을 형성한다고 믿습니다. 그 순간들은 스쳐가는 찰나가 아닌, 삶을 깊이 있게 만들어주는 소중한 흔적들입니다. '기록'은 이러한 작은 순간들을 담아내고, 이를 통해 더 풍부한 삶을 살아가는 방법을 제안합니다. 이번 'After time 29' 팝업스토어에서는 스테이셔너리 브랜드를 소개하며, 여러분이 그 순간들을 소중히 기록하고 간직할 수 있도록 돕는 다양한 제품들을 선보입니다. 기록을 통해 여러분만의 특별한 순간을 더 깊이 느끼고, 오래도록 간직해보세요. 지금 29cm와 함께.",
      thumbnail: "images/creation/communication/HyebinRyu/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/HyebinRyu/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/communication/HyebinRyu/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "youtube",
          src: "zA1hMoX9ZOI",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/communication/HyebinRyu/pc_contents_04.webp",
        },
      ],
    },
    {
      id: 39,
      teamName: null,
      designer: [{ id: 51, nameKo: "임다솔", studentId: 22001057 }],
      title: "Bluedot",
      summary: "뷰티 브랜드 Bluedot",
      description:
        "Bluedot은 색조 화장품 브랜드로 생동감 넘치는 색조로 바다의 순수한 아름다움을 담아냅니다. 자유롭고 자연스러운 아름다움을 강조하며, 워터프루프 제품으로 '물에서도 아름다움은 지워지지 않는다'라는 메시지를 전달합니다. Bluedot은 바쁜 일상 속에서 아름다움을 잊고 지내는 현대인들에게 활력을 불어넣고, 본연의 매력을 발견하게 하는 브랜드입니다. 브랜드의 동그란 엠블럼은 바다의 맑음과 순수함을 상징적으로 담아내며, 수족관의 동그란 창을 통해 바라본 수중 세계의 아름다움에서 영감을 받아 완성되었습니다.",
      thumbnail: "images/creation/communication/DasolLim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/DasolLim/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/creation/communication/DasolLim/pc_contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/DasolLim/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 40,
      teamName: null,
      designer: [{ id: 55, nameKo: "장희진", studentId: 22001058 }],
      title: "EDENIQUE",
      summary: "크리스찬 웨딩 스타일링 브랜드 EDENIQUE",
      description:
        "에데니크〈EDENIQUE〉는 획일화된 현대 결혼 문화의 장식적 외형에서 벗어나, 결혼의 본질에 대해 성찰할 수 있는 여정을 제시합니다. 우리는 결혼이라는 신성한 결합이 지닌 내면적 의미와 영속적인 아름다움을 되새기고자 합니다. 에데니크〈EDENIQUE〉는 진정한 기쁨과 깊은 사랑이 피어나는 장을 마련하여, 결혼식이 단순한 의식이 아니라 인생에서 가장 의미 있는 성찰과 축복의 순간으로 거듭날 수 있도록 합니다. 자연의 숨결 속에서, 창조의 조화와 영원한 사랑의 약속이 어우러진 깊은 감동의 하루를 경험해보세요.",
      thumbnail: "images/creation/communication/heejinJang/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/heejinJang/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "0Yd72LFdgPk",
        },
        {
          id: 3,
          extension: "gif",
          src: "images/creation/communication/heejinJang/pc_contents_03.gif",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/communication/heejinJang/pc_contents_04.webp",
        },
        {
          id: 5,
          extension: "gif",
          src: "images/creation/communication/heejinJang/pc_contents_05.gif",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/creation/communication/heejinJang/pc_contents_06.webp",
        },
      ],
    },
    {
      id: 41,
      teamName: null,
      designer: [{ id: 66, nameKo: "최예영", studentId: 22001069 }],
      title: "OPACITY",
      summary: "향수 브랜드",
      description:
        "향수 브랜드 'OPACITY'는 도시적이고 모던한 라이프스타일을 추구하는 사람들을 위한 향수입니다. 투명함의 농도를 조절하여 개인의 개성과 감각을 자연스럽게 표현할 수 있는 것이 특징으로, 화려한 장식보다 심플하고 세련된 디자인을 선호하는 현대인을 위한 향수입니다. 투명 농도 0%, 30%, 50%에 따라 자신만의 독특한 향기를 찾아 완성된 스타일을 만들어낼 수 있습니다. 향기와 함께 자신만의 특별한 순간을 담아낼 수 있는 브랜드입니다. 투명함의 농도로 당신만의 이야기를 담아보세요.",
      thumbnail: "images/creation/communication/YeyeongChoi/thumnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/YeyeongChoi/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "L9aY0piOtEw",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/communication/YeyeongChoi/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/creation/communication/YeyeongChoi/pc_contents_04.gif",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/communication/YeyeongChoi/pc_contents_05.webp",
        },
      ],
    },
    {
      id: 42,
      teamName: null,
      designer: [{ id: 60, nameKo: "정희주", studentId: 22100696 }],
      title: "BookBookBugBug",
      summary: "중고책 서점 브랜딩",
      description:
        "북북벅벅은 헌책을 판매하는 중고책 서점입니다. Book과 Bug가 합쳐진 BookBookBugBug은 '책벌레'를 의미하기도 하며 헌책의 모습을 재미있게 그려냅니다. 물론 최근엔 새 책을 쉽게 구할 수 있지만 북북벅벅은 헌책만의 매력을 강조합니다. 각자 나름의 이유로 헌책을 찾으러 온 여러분을 환영하며 이곳에서만큼은 헌책의 매력을 천천히 느껴보시길 바라요. 헌책 한 권 한 권에 담긴 시간의 흔적을 통해 새로운 독서의 즐거움을 발견하실 수 있을 겁니다. 그 즐거움과 여유를 북북벅벅에서 즐기시길!",
      thumbnail: "images/creation/communication/HeejooJung/thumnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/communication/HeejooJung/pc_contents_01.webp",
        },
      ],
    },
  ],
  SERVICE: [
    {
      id: 1,
      teamName: "4패트",
      designer: [
        { id: 13, nameKo: "김수아", studentId: 22000110 },
        { id: 15, nameKo: "김은빈", studentId: 22000160 },
        { id: 22, nameKo: "박보민", studentId: 22000260 },
        { id: 45, nameKo: "이주영", studentId: 22000566 },
      ],
      title: "met",
      summary: "헬멧을 이용한 전동 킥보드 서비스",
      description:
        "전동 킥보드는 10 · 20대의 새로운 이동 수단으로 자리 잡고 있으나 이용 대비 안전 관련 문제는 잘 지켜지지 않고 있습니다. 그중 헬멧 미착용 비율이 가장 높고 이는 사고 시 큰 부상으로 이어지는 원인이 됩니다. 사람들이 헬멧을 개인적으로 소지할 수 있도록 돕는 서비스 met은 기존의 공유 모빌리티 서비스에서 NFC 헬멧으로 잠금 해제 및 결제를 할 수 있도록 합니다. 더불어 개인이 원하는 형태, 원하는 컬러로 헬멧을 선택할 수 있도록 하여 사용자마다 다른 헬멧의 니즈를 만족시킬 수 있도록 합니다.",
      teamImg: "images/designers/service/4pat.webp",
      thumbnail: "images/creation/service/4pat/thumnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/service/4pat/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 2,
      teamName: "깔쌈랄키",
      designer: [
        { id: 49, nameKo: "이하준", studentId: 21800595 },
        { id: 35, nameKo: "안다진", studentId: 21900417 },
        { id: 40, nameKo: "이동연", studentId: 21900494 },
        { id: 60, nameKo: "정희주", studentId: 22100696 },
      ],
      title: "BLEND IN'",
      summary: "경계선 지능 청년을 위한 일자리 경험 서비스",
      description:
        "경계선 지능 청년은 평균 지능과 발달 장애 사이에 위치해 학습 및 사회적 상호작용에서 어려움을 겪는 이들입니다. 이들은 청년기에 자립에 필요한 능력을 충분히 갖추지 못해 경제적, 사회적 도전에 직면하게 됩니다. 특히 낮은 업무 습득력과 상황 대처 능력으로 경계선 지능인은 단순 작업이나 단기 근무 형태의 직종 마저 쉽게 해고당합니다. 이러한 청년들에게 카페 바리스타 보조 역할을 통해 실무 경험을 제공하고, 직업 적응력을 높이며 사회 참여를 유도하는 일자리 경험 서비스를 제공합니다.",
      teamImg: "images/designers/service/KkalsseomRalki.webp",
      thumbnail: "images/creation/service/KkalsseomRalki/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/service/KkalsseomRalki/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 3,
      teamName: "둥둥",
      designer: [
        { id: 4, nameKo: "고수영", studentId: 21900025 },
        { id: 6, nameKo: "김가현", studentId: 21900061 },
        { id: 12, nameKo: "김성순", studentId: 21900114 },
        { id: 30, nameKo: "서하령", studentId: 22000353 },
      ],
      title: "이룸",
      summary: "이혼가정을 위한 비대면 면접교섭 서비스",
      description:
        "우리나라는 아시아 국가 중 이혼율 1위를 차지하고 있습니다. 이혼율이 높다는 것은, 이혼 가정이 되는 아이들도 많다는 뜻인데요. 특히 학령전기 아동이 이혼 환경에 가장 많이 놓이고 있습니다. 이들은 정서, 환경적으로 많은 어려움을 겪고 있어 심리적 안정과 이혼 후 적응을 도울 수 있는 '면접교섭'이 필수적이나 전배우자간의 적대감과 지속적 갈등으로 대부분 불이행되고 있습니다. 양부모가 겪고 있는 어려움들과 갈등사항들을 알아보고, 이해관계를 적절히 적용시킨 솔루션을 제공해 이혼가정의 아이들을 도울 수 있는 프로젝트를 진행했습니다.",
      teamImg: "images/designers/service/DoongDoong.webp",
      thumbnail: "images/creation/service/DoongDoong/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/service/DoongDoong/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/service/DoongDoong/pc_contents_02.webp",
        },
      ],
    },
    {
      id: 4,
      teamName: "디두",
      designer: [
        { id: 24, nameKo: "박승주", studentId: 21800297 },
        { id: 27, nameKo: "박창조", studentId: 21800323 },
        { id: 58, nameKo: "정은서", studentId: 22000686 },
        { id: 16, nameKo: "김현지", studentId: 22001014 },
      ],
      title: ".endeeve",
      summary: "동물병원에서 진행하는 반려동물 장례 서비스",
      description:
        "코로나 19 이후 급격하게 증가한 반려동물 가구 수. 반려동물의 평균 수명을 고려하였을 때 가까운 미래에 수많은 반려동물이 죽음을 맞이하게 될 것으로 예측됩니다. 이를 위해 반려동물 장례가 진행되고 있지만 여전히 많은 보호자들은 장례의 개념을 모르고 있습니다. 저희는 아직 반려동물 장례를 준비하지 못한 보호자를 위해 동물병원을 중심으로 새로운 반려동물 장례 서비스를 제공할 것입니다. 이를 통해 반려동물 장례가 모든 보호자들이 쉽게 이용할 수 있는 대중적인 장례 시스템을 만들 것입니다.",
      teamImg: "images/designers/service/DIDU.webp",
      thumbnail: "images/creation/service/DIDU/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/service/DIDU/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/service/DIDU/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/service/DIDU/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 5,
      teamName: "삼자대면",
      designer: [
        { id: 31, nameKo: "송민준", studentId: 21800393 },
        { id: 18, nameKo: "노유원", studentId: 22000227 },
        { id: 51, nameKo: "임다솔", studentId: 22001057 },
      ],
      title: "얼마EASY",
      summary: "대학생들을 위한 용돈 관리 서비스",
      description:
        "대학생들이 늘 용돈이 부족하다고 느끼는 이유는 무엇일까요? 그 이유 중 하나는 '용돈 관리를 소홀히 해서'가 아니라 매달 변하는 가용예산을 모르고 지출하기 때문입니다. ‘얼마EASY’는 매달 용돈 관리가 어려운 대학생들을 위한 하나은행에서 제공하는 대학생들을 위한 자산관리 서비스입니다. 사용자로 하여금 고정지출과 유동지출을 나누어 관리할 수 있게 도와주고 고정비용을 제외한 매달 실제로 사용할 수 있는 예산을 알려줍니다. 내 가용예산이 얼마인지 쉽게 알고 싶다면? 얼마EASY에서 확인하세요!",
      teamImg: "images/designers/service/SamjaDaemyeon.webp",
      thumbnail: "images/creation/service/SamjaDaemyeon/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/service/SamjaDaemyeon/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/service/SamjaDaemyeon/pc_contents_02.webp",
        },
      ],
    },
    {
      id: 6,
      teamName: "싸그리",
      designer: [
        { id: 23, nameKo: "박승주", studentId: 21700271 },
        { id: 59, nameKo: "정해인", studentId: 21900653 },
        { id: 53, nameKo: "임예담", studentId: 22000615 },
        { id: 55, nameKo: "장희진", studentId: 22001058 },
      ],
      title: "Blinker",
      summary: "냉장고 안 버려지는 반찬 문제를 돕는 서비스",
      description:
        "한국인들은 다양한 반찬을 소비하는 식문화 때문에 냉장고에서 반찬을 관리하는 데 어려움을 겪습니다. 냉장고의 구조와 포화도 때문에 반찬의 상태나 소비기한을 쉽게 파악하기 어려워, 음식이 상하거나 낭비되는 문제가 발생합니다. 따라서, 저희는 냉장고 문을 열었을 때 음식의 소비 우선순위와 위치 정보를 직관적으로 전달하는 서비스를 제안합니다. 사용자는 간단하게 소비기한을 설정하고, 보다 체계적으로 반찬을 관리할 수 있습니다. 이를 통해 사용자는 기억에 의존하지 않고 정확히 음식의 상태와 기한을 관리할 수 있습니다.",
      teamImg: "images/designers/service/Ssageuri.webp",
      thumbnail: "images/creation/service/Ssageuri/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/service/Ssageuri/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/creation/service/Ssageuri/pc_contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/service/Ssageuri/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/creation/service/Ssageuri/pc_contents_04.gif",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/service/Ssageuri/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "gif",
          src: "images/creation/service/Ssageuri/pc_contents_06.gif",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/creation/service/Ssageuri/pc_contents_07.webp",
        },
      ],
    },
    {
      id: 7,
      teamName: "오브",
      designer: [
        { id: 2, nameKo: "강수빈", studentId: 21900006 },
        { id: 50, nameKo: "이현화", studentId: 21900598 },
        { id: 56, nameKo: "전유은", studentId: 22000651 },
        { id: 19, nameKo: "류혜빈", studentId: 22001019 },
      ],
      title: "PAZ",
      summary: "건설 재해 저감을 위한 서비스",
      description:
        "작업의 이동성과 옥외환경이라는 특징을 가진 건설현장은 매일 1.7명의 근로자가 사망하며 수많은 근로자들이 위험 상황에 놓이고 있습니다. 특히나 건설현장에서 '베테랑'으로 불리는 숙련공은 수많은 안전사고를 목격해왔음에도 불구하고, 축적된 내공에 기반한 불안전한 행동을 지속하고 있습니다. 이로 인해 재해 저감이 절대적으로 중요해진 원청사의 페인포인트를 파악하고 이해관계자 간의 관계를 분석하여 근로자의 불안전한 행동을 예방하도록 돕는 모니터링 서비스를 제안합니다.",
      teamImg: "images/designers/service/Aube.webp",
      thumbnail: "images/creation/service/Aube/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/service/Aube/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/service/Aube/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/service/Aube/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/service/Aube/pc_contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/service/Aube/pc_contents_05.webp",
        },
      ],
    },
    {
      id: 8,
      teamName: "정준하",
      designer: [
        { id: 8, nameKo: "김나경", studentId: 21900074 },
        { id: 47, nameKo: "이지향", studentId: 21900569 },
        { id: 44, nameKo: "이주아", studentId: 22000565 },
        { id: 57, nameKo: "정예은", studentId: 22000681 },
      ],
      title: "Check On",
      summary: "일시적인 공연 네트워크 및 안전 관리 시스템",
      description:
        "Check On은 공연장 관객과 안전요원 간의 소통 서비스입니다. 관객들은 응급상황이 발생했을 때 안전요원이 빠르게 자신의 도움 요청 사실을 인지할 수 있기를 원합니다. 그러나 공연장 환경적 요소로 인해 안전요원은  도움 요청 행위와 호응행위를 구별하기 어려웠습니다. 따라서 Check On은 관객이 채팅을 통해 도움 요청을 할 수 있게 하고 AI 분석을 통해 안전요원에게 심각한 상황의 구역을 안내합니다. 또한 환자의 구역 정보를 전달해 빠른 대응을 할 수 있도록 돕습니다. 관객들이 안전하고 즐겁게 공연을 관람할 수 있는 서비스를 제안하고자 합니다.",
      teamImg: "images/designers/service/JungJunha.webp",
      thumbnail: "images/creation/service/JungJunha/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/service/JungJunha/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/service/JungJunha/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "youtube",
          src: "cTosNWA_zlg",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/service/JungJunha/pc_contents_04.webp",
        },
      ],
    },
    {
      id: 9,
      teamName: "티거",
      designer: [
        { id: 37, nameKo: "안희재", studentId: 21700427 },
        { id: 39, nameKo: "유주희", studentId: 22000465 },
        { id: 66, nameKo: "최예영", studentId: 22001069 },
      ],
      title: "다담",
      summary: "배달용 다회용기 서비스 제공 플랫폼",
      description:
        "배달시장이 급속히 성장함에 따라 일회용기 사용이 폭발적으로 증가하며, 이에 따른 환경오염이 심화되고 있습니다. 다담은 이러한 문제를 해결하기 위해, 배달 시 다회용기를 사용하여 다양한 음식을 수용할 수 있는 표준화된 다회용기 서비스를 제공합니다. 이 서비스는 지역 세척장을 활용한 세척 시스템을 통해 동선과 비용을 최소화하며, 이해관계자들과 상생하는 방식으로 다회용기 사용률을 높입니다. 다담은 친환경적 배달 문화를 촉진하고, 지속 가능한 배달 플랫폼을 구축하는 것을 목표로 합니다.",
      teamImg: "images/designers/service/Tigger.webp",
      thumbnail: "images/creation/service/Tigger/tumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/service/Tigger/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "gif",
          src: "images/creation/service/Tigger/pc_contents_02.gif",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/service/Tigger/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "gif",
          src: "images/creation/service/Tigger/pc_contents_04.gif",
        },
      ],
    },
    {
      id: 10,
      teamName: "하마하마",
      designer: [
        { id: 28, nameKo: "서유나", studentId: 21900365 },
        { id: 62, nameKo: "조은비", studentId: 21900709 },
        { id: 3, nameKo: "강지은", studentId: 21901003 },
        { id: 54, nameKo: "장소윤", studentId: 22000622 },
      ],
      title: "차비서",
      summary: "고령택시기사의 안전운전을 위한 서비스",
      description:
        '고령운전자의 교통사고 사망률이 증가하고 있습니다. 이는 고령택시기사의 운전자신감이 높아졌기 때문입니다. "차비서"는 고령택시기사에게 신체적·인지적 기능 저하를 이해할 수 있는 객관적인 운전능력 평가와 피드백을 영상과 함께 리포트 형식으로 제공합니다. 또한, 관리감독자에게는 고령택시기사의 주행을 출근부터 퇴근까지 실시간으로 기록하여 보고되게 함으로써 체계적으로 관리가 이루어지고 고령택시기사 스스로 안전운전을 할 수 있도록 행동을 이끌어내는 것을 목표로 합니다.',
      teamImg: "images/designers/service/HamaHama.webp",
      thumbnail: "images/creation/service/HamaHama/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/service/HamaHama/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 11,
      teamName: "DMG",
      designer: [
        { id: 64, nameKo: "최가흔", studentId: 21800722 },
        { id: 7, nameKo: "김경진", studentId: 21900067 },
        { id: 26, nameKo: "박은실", studentId: 21900299 },
        { id: 34, nameKo: "안가현", studentId: 22000399 },
      ],
      title: "Smart Laundry-tag System",
      summary: "세탁 라벨을 활용한 새로운 기능 제안",
      description:
        "세탁법을 몰라 곤란했던 적 없으신가요? 이제 세탁법을 찾아 헤매거나 고민할 필요가 없습니다. 빠르고 정확하게 세탁 방법을 안내해주는 스마트 세탁 서비스를 선보입니다. 누구나 가지고 있지만 누구도 주목하지 않았던 세탁 라벨의 숨겨진 가치를 RFID 태그로 한층 업그레이드 했습니다. 또한 세탁법에 대한 새로운 기준을 통해 더욱 쉽게 세탁법을 파악할 수 있습니다. 이서비스를 통해 손쉽게 최적의 세탁 방법을 안내받을 수 있습니다.",
      teamImg: "images/designers/service/DMG.webp",
      thumbnail: "images/creation/service/DMG/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/service/DMG/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/service/DMG/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/service/DMG/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "youtube",
          src: "X6cjG7TpXS8",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/service/DMG/pc_contents_05.webp",
        },
      ],
    },
  ],
  UX: [
    {
      id: 1,
      teamName: "해디크",
      designer: [
        { id: 61, nameKo: "조가은", studentId: 21900692 },
        { id: 5, nameKo: "권은진", studentId: 22000043 },
        { id: 36, nameKo: "안혜빈", studentId: 22000405 },
        { id: 38, nameKo: "유수정", studentId: 22100464 },
      ],
      title: "mize",
      summary: "실감나는 분위기로, 모든 순간을 풍부하게",
      description:
        "자율주행 기술이 발전하면서 자동차라는 공간은 탑승자에게 감각적인 경험을 제공할 수 있는 잠재력을 지니고 있습니다. 이를 실현시켜 자동차를 단순한 기계가 아닌 의인화된 존재로 바라보고, 그 특성을 활용하여 탑승자가 자동차와 인간다운 상호작용을 하며 실감나는 분위기를 누릴 수 있는 공간으로 변화시키고자 합니다. 이처럼 mize는 분위기를 실감나게 만드는 방법과 공감지능형 인터렉션을 융합하여 탑승자에게 기존 모빌리티에서는 경험하지 못했던 차별화된 경험을 제시합니다.",
      teamImg: "images/designers/ux/team/Haedik.webp",
      thumbnail: "images/creation/ux/Haedik/mize/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/ux/Haedik/mize/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/ux/Haedik/mize/pc_contents_02.webp",
        },
      ],
    },
    {
      id: 2,
      teamName: "BO3",
      designer: [
        { id: 65, nameKo: "최석현", studentId: 21700722 },
        { id: 9, nameKo: "김민경", studentId: 22000070 },
        { id: 69, nameKo: "허현지", studentId: 22000798 },
        { id: 48, nameKo: "이하영", studentId: 22100590 },
      ],
      title: "배민 뉴우스",
      summary: "사장님을 위한 정보를 제공하는 배민뉴우스",
      description:
        "'배민 뉴우스'는 가게 사장님들이 예측하기 어려운 지역 및 전국 정보를 미리 제공하고, 나아가 손쉽게 프로모션이나 이벤트를 구성할 수 있도록 돕는다. 이 정보는 '배민 캐스터'가 수집하며, 해당 지역과 전국의 다양한 데이터를 사장님께 제공한다. 사장님의 피드백은 AI가 분석하여, 캐스터가 더욱 관련성 높은 정보를 제공할 수 있도록 지원한다. 이를 통해 사장님들은 지역 또는 전국의 이벤트, 상권, 날씨, 트렌드에 대한 정보와 가게에 미치는 영향을 미리 파악하고 대비할 수 있다.",
      teamImg: "images/designers/ux/team/BO3.webp",
      thumbnail: "images/creation/ux/BO3/BaeminNews/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/ux/BO3/BaeminNews/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "hQ60Z7xc1Z0",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/ux/BO3/BaeminNews/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "youtube",
          src: "MRvjX_bfn-Y",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/ux/BO3/BaeminNews/pc_contents_05.webp",
        },
      ],
    },
    {
      id: 3,
      teamName: "LUX",
      designer: [
        { id: 1, nameKo: "강산길", studentId: 21700003 },
        { id: 11, nameKo: "김민영", studentId: 21900098 },
        { id: 33, nameKo: "신지수", studentId: 22000392 },
        { id: 52, nameKo: "임시은", studentId: 22000613 },
      ],
      title: "WELLCOM: 차량 커뮤니케이션의 mediator",
      summary: "NEUE 모빌리티 커뮤니케이션 경험",
      description:
        "인간다운 상호교감이 가능한 경험을 통해 차량 탑승자들의 소통을 원활하게 해주는 AI 중심의 2030 미래 모빌리티 커뮤니케이션 솔루션 ‘WELLCOM’을 소개합니다. 차량의 커뮤니케이션을 원활하게 도와주는 ‘WELLCOM’은 좌석의 위치와 방향에 상관없이 서로를 보며 소통하고, 소리의 개방정도를 조절하여 프라이빗한 공간을 생성, Dynamic한 소통 변화에 맞춰 즉각적으로 대응하여 seamless한 소통 환경을 제공합니다. 또한, 차량 내부에서의 정보 공유와 외부와의 소통 확장을 통해 풍성한 소통 경험을 선사합니다.",
      teamImg: "images/designers/ux/team/Lux.webp",
      thumbnail: "images/creation/ux/Lux/WELLCOM/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/ux/Lux/WELLCOM/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/ux/Lux/WELLCOM/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "gif",
          src: "images/creation/ux/Lux/WELLCOM/pc_contents_03.gif",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/ux/Lux/WELLCOM/pc_contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/ux/Lux/WELLCOM/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/creation/ux/Lux/WELLCOM/pc_contents_06.webp",
        },
      ],
    },
    {
      id: 4,
      teamName: "Solti",
      designer: [
        { id: 68, nameKo: "한인철", studentId: 21800781 },
        { id: 14, nameKo: "김유미", studentId: 21900166 },
        { id: 46, nameKo: "이지원", studentId: 22000581 },
        { id: 29, nameKo: "서지은", studentId: 22100369 },
        { id: 41, nameKo: "이석영", studentId: 22435003 },
      ],
      title: "Carmmunity: Car+Community",
      summary: "Weaving on the Way",
      description:
        "Mobility인 차량이 주행을 시작하면 위치와 상황이  변하고 이에 따라 탑승자의 context도 달라집니다. 나와 주행의 여정을 함께하는 차량 AI는 도로 위의 수많은context 속에서 다른 차량과의 connection point를 찾아 'Car'뮤니티의 장을 만들어줍니다. 도로 위의 차량들이 연결되었을 때 어떤 일이 일어날까요?지금 주행중인 곳의 교통상황을 다른 차량에게 공유해줄 수도,먼저 목적지에 도착한 차량에게 주차할 자리가 있는지 반대로 물어볼 수도 있어요. 다른 차와의 연결을 통해 보다 촘촘해지는 도로 위 정보망과 커지는 소통의 즐거움을 누리세요.",
      teamImg: "images/designers/ux/team/Solti.webp",
      thumbnail: "images/creation/ux/Solti/Carmmunity/thumnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/ux/Solti/Carmmunity/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/ux/Solti/Carmmunity/pc_contents_02.webp",
        },
      ],
    },
    {
      id: 5,
      teamName: "Vivaz",
      designer: [
        { id: 67, nameKo: "한상윤", studentId: 21800775 },
        { id: 25, nameKo: "박예봄", studentId: 21801030 },
        { id: 32, nameKo: "신수민", studentId: 21900396 },
        { id: 63, nameKo: "조은비", studentId: 22000723 },
      ],
      title: "Cuddy: 주행 환경 Caring Buddy",
      summary: "당신의 주행을 섬세히 보조하는 AI 'Cuddy'",
      description:
        "현재 자동차 산업은 자율주행 기술의 급격한 발전과 함께 새로운 변화를 맞이하고 있다. 본 프로젝트는 2030년의 반자율주행 시대에서 AI를 활용하여 운전자의 주행 환경을 더욱 사람답게 섬세히 caring해주는 의인화된 모빌리티 경험을 제공한다. 운전자를 세심히 센싱하며 보조가 필요한 순간을 파악해 적절한 Action을 제안, 실행해 차량 환경을 최적화 시켜주며, 필요시 사용자에게 take-over하여 Action을 fine-tunning한 후 이를 학습하며 사용자의 프로파일에 저장해 보다 개인화된, 섬세한 차량 환경 Caring을 완성한다.",
      teamImg: "images/designers/ux/team/Vivaz.webp",
      thumbnail: "images/creation/ux/Vivaz/Cuddy/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Cuddy/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Cuddy/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Cuddy/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Cuddy/pc_contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Cuddy/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Cuddy/pc_contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Cuddy/pc_contents_07.webp",
        },
      ],
    },
    {
      id: 6,
      teamName: "LUX",
      designer: [
        { id: 1, nameKo: "강산길", studentId: 21700003 },
        { id: 11, nameKo: "김민영", studentId: 21900098 },
        { id: 33, nameKo: "신지수", studentId: 22000392 },
        { id: 52, nameKo: "임시은", studentId: 22000613 },
      ],
      title: "배달의 민족 혁신 서비스 : 푸렌즈 & 분석이",
      summary: "배민의 메뉴 고민 해결사",
      description:
        "넘쳐나는 선택지 속, 현대인들에게 선택은 더 이상 즐거운 일이 아닌 피로감을 주는 과제가 되었습니다. 특히 음식 정보와 리뷰가 넘쳐나는 배달의 민족에서 사용자들은 매번 고민에 빠집니다. 배민의 혁신적인 서비스, 메뉴 고민 해결사 : 푸렌즈와 분석이를 소개합니다. '푸렌즈'는 음식의 특성을 Dynamic하게 표현하는 카메라로 음식의 특징을 생생하게 전달해 리뷰의 선순환을 제공합니다.  '분석이'는 사용자의 다양한 상황에 맞춰 기준을  flexible하게 조절할 수 있어 원하는 정보를 제공 받아 메뉴 선택을 도와줍니다.",
      teamImg: "images/designers/ux/team/Lux.webp",
      thumbnail: "images/creation/ux/Lux/Furenjeu&Bunseogi/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/ux/Lux/Furenjeu&Bunseogi/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/ux/Lux/Furenjeu&Bunseogi/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/ux/Lux/Furenjeu&Bunseogi/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "youtube",
          src: "qoHRfLNmlx8",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/ux/Lux/Furenjeu&Bunseogi/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "youtube",
          src: "F0hLbAsk13A",
        },
      ],
    },
    {
      id: 7,
      teamName: "해디크",
      designer: [
        { id: 61, nameKo: "조가은", studentId: 21900692 },
        { id: 5, nameKo: "권은진", studentId: 22000043 },
        { id: 36, nameKo: "안혜빈", studentId: 22000405 },
        { id: 38, nameKo: "유수정", studentId: 22100464 },
      ],
      title: "배민콤비 & B밀의장",
      summary: "메뉴 탐색 과정에 혁신을 더하다",
      description:
        "매일 달라지는 상황 때문에 그때마다 다른 음식을 찾지만 결국 오늘도 딱 맞는 음식을 찾지 못하는 사용자들 위해 [배민 콤비]는 시간과 공간의 제약 없이 상황과 기호에 딱 맞는 메뉴를 탐색하도록 합니다. 같은 상황과 취향을 가진 사람들과 함께 같은 행위를 둘러 보며 최적의 메뉴를 선정하세요. [B밀의 장]은 소비자에게는 좀 더 쉽게 배민에 접속하고 합리적인 소비를 할 수 있는 공간을, 사장님에게는 재고 관리에 도움이 되는 공간을 지향합니다. B급 상품의 활용 가능성을 발견하여 배민에서의 새로운 가치를 창출합니다.",
      teamImg: "images/designers/ux/team/Haedik.webp",
      thumbnail: "images/creation/ux/Haedik/BaeminCombi/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/ux/Haedik/BaeminCombi/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/ux/Haedik/BaeminCombi/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/ux/Haedik/BaeminCombi/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/ux/Haedik/BaeminCombi/pc_contents_04.webp",
        },
      ],
    },
    {
      id: 8,
      teamName: "BO3",
      designer: [
        { id: 65, nameKo: "최석현", studentId: 21700722 },
        { id: 9, nameKo: "김민경", studentId: 22000070 },
        { id: 69, nameKo: "허현지", studentId: 22000798 },
        { id: 48, nameKo: "이하영", studentId: 22100590 },
      ],
      title: "SMIDA: Seamless Meaningful Intelligent Driving cAr",
      summary: "Meaningful한 주행의 미래를 만들다",
      description:
        "SMIDA는 일상적인 주행 경험에 새로운 의미를 부여하고, 제약으로 퇴색된 순간들을 되살리는 미래형 스마트 차량 컨셉이다. 단순한 이동 수단을 넘어 의미 있는 시간을 제공하며, 경험의 재해석과 의미의 회복, 개인화된 공간, 심리스한 경험이라는 철학을 바탕으로 한다. 주행 시 발생하는 반복성과 속도 및 시야의 제약등의 무의미한 순간들을 개선하고, 제약 없이 펼쳐지는 풍경과 찰나의 순간을 포착한다. 또한 사용자가 관심 있는 장소를 주행 중에 제공하며, 디지털 오브제를 활용해 지각있는 Sentient한 디자인 방향을 제시한다.",
      teamImg: "images/designers/ux/team/BO3.webp",
      thumbnail: "images/creation/ux/BO3/SMIDA/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "gif",
          src: "images/creation/ux/BO3/SMIDA/pc_contents_01.gif",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/ux/BO3/SMIDA/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/ux/BO3/SMIDA/pc_contents_03.webp",
        },
      ],
    },
    {
      id: 9,
      teamName: "Solti",
      designer: [
        { id: 68, nameKo: "한인철", studentId: 21800781 },
        { id: 14, nameKo: "김유미", studentId: 21900166 },
        { id: 46, nameKo: "이지원", studentId: 22000581 },
        { id: 29, nameKo: "서지은", studentId: 22100369 },
        { id: 41, nameKo: "이석영", studentId: 22435003 },
      ],
      title: "신메뉴 시식단 & 샘플러 위크",
      summary: "배민이라 가능한, 배민스러운 서비스",
      description:
        "[신메뉴시식단] 새로운 메뉴를 개발중인 사장님들을 위해 배민에서 대신 시식단을 모집해드립니다! 메뉴 출시 전에 입맛과 리뷰 스타일이 담긴 시식 프로필을 바탕으로 사장님은 꼭 맞는 시식단을 모집할 수 있습니다. [샘플러] 음식을 미리 맛볼 수 있도록 선정한 음식의 표본들을 말합니다. 배민의 샘플러위크는 여러 가게가 연합하여 메뉴 하나의 가격으로 3개의 메뉴를 한번에 맛볼 수 있는 배달음식 샘플러를 제공하는 서비스입니다. 샘플러 위크, 한 끼 가격으로 다양한 메뉴를 맛보세요!",
      teamImg: "images/designers/ux/team/Solti.webp",
      thumbnail: "images/creation/ux/Solti/SamplerWeek/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/ux/Solti/SamplerWeek/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "youtube",
          src: "UwsUjNVUlfM",
        },
        {
          id: 3,
          extension: "youtube",
          src: "5os8DnFAWvo",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/ux/Solti/SamplerWeek/pc_contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/ux/Solti/SamplerWeek/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/creation/ux/Solti/SamplerWeek/pc_contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/creation/ux/Solti/SamplerWeek/pc_contents_07.webp",
        },
        {
          id: 8,
          extension: "webp",
          src: "images/creation/ux/Solti/SamplerWeek/pc_contents_08.webp",
        },
        {
          id: 9,
          extension: "webp",
          src: "images/creation/ux/Solti/SamplerWeek/pc_contents_09.webp",
        },
        {
          id: 10,
          extension: "webp",
          src: "images/creation/ux/Solti/SamplerWeek/pc_contents_10.webp",
        },
      ],
    },
    {
      id: 10,
      teamName: "Vivaz",
      designer: [
        { id: 67, nameKo: "한상윤", studentId: 21800775 },
        { id: 25, nameKo: "박예봄", studentId: 21801030 },
        { id: 32, nameKo: "신수민", studentId: 21900396 },
        { id: 63, nameKo: "조은비", studentId: 22000723 },
      ],
      title: "배달의 민족 속 혁신 기회를 찾아:비즈메이트&꿀조합도감",
      summary: "배달의 민족 내 홍보와 경험 공유 혁신 제안",
      description:
        "급격하게 성장하는 모바일 시장 서비스의 시기를 지나며 사용자들은 기존 서비스와 인터랙션에 익숙해지고 있다. 새로운 인터랙션에 대한 혁신이 필요한 상황이지만, 혁신이란 무엇인지, 혁신은 어떻게 만들어 지는지에 대한 정리가 아직은 되어 있지 않다. 본 프로젝트는 한동대학교와 배달의 민족의 산학 프로젝트로 '혁신이 무엇인지' 분석하고 배달의 민족 내에서 혁신 기회를 발견해 모바일 서비스로 제안한다. 사장님을 위한 홍보 혁신 '비즈메이트'와 배달의 민족 내 사용자 간 소통의 혁신 '꿀조합도감' 두 가지 혁신을 소개한다.",
      teamImg: "images/designers/ux/team/Vivaz.webp",
      thumbnail: "images/creation/ux/Vivaz/Bizmate/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Bizmate/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Bizmate/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Bizmate/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Bizmate/pc_contents_04.webp",
        },
        {
          id: 5,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Bizmate/pc_contents_05.webp",
        },
        {
          id: 6,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Bizmate/pc_contents_06.webp",
        },
        {
          id: 7,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Bizmate/pc_contents_07.webp",
        },
        {
          id: 8,
          extension: "webp",
          src: "images/creation/ux/Vivaz/Bizmate/pc_contents_08.webp",
        },
      ],
    },
  ],
  INDUSTRIAL: [
    {
      id: 1,
      teamName: null,
      designer: [{ id: 21, nameKo: "박범서", studentId: 21600252 }],
      title: "Ducati 826 Procella",
      summary: "조형을 통해 감성을 전달하는 오토바이 ",
      description:
        "조형적 형태언어를 통해 추상적인 개념을 전달할 수 있다면 오토바이는 그저 운송수단에 그치지지 않고 또 하나의 악세사리가 될 것입니다. Ducati의 Procella는 아름다운 악세사리로서 탑승자의 개성과 감성을 표출하는 또 다른 수단이 될 것입니다.",
      thumbnail: "images/creation/product/BeomseoPark/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/product/BeomseoPark/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 2,
      teamName: null,
      designer: [{ id: 42, nameKo: "이승현", studentId: 21701033 }],
      title: "TM-27/ JR-110",
      summary: "스마트폰 디톡스 스마트 도어락과 디스플레이",
      description:
        "사회초년생의 우울감 증가는 증가한 스마트폰의 의존도와 불리해서 볼 수 없습니다. 이들이 거주하는 좁은 원룸은 자유를 주기보다 더 작은 화면으로 구속해 버립니다. 우울감 완화에 필요한 것은 단순한 스마트폰 사용의 조절보다는 건강한 몰입을 할 수 있는 대체 여가입니다. JR-110 도어락은 스마트폰이 외부로부터 내부로 들어오는 자연스러운 연속성을 끊고, TM-27은 좁은 공간에서도 사용자에게 다양한 경험과 재미를 부여할 것입니다.",
      thumbnail: "images/creation/product/SeunghyeonLee/thumbnail.jpg",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/product/SeunghyeonLee/pc_contents_01.webp",
        },
        {
          id: 2,
          extension: "webp",
          src: "images/creation/product/SeunghyeonLee/pc_contents_02.webp",
        },
        {
          id: 3,
          extension: "webp",
          src: "images/creation/product/SeunghyeonLee/pc_contents_03.webp",
        },
        {
          id: 4,
          extension: "webp",
          src: "images/creation/product/SeunghyeonLee/pc_contents_04.webp",
        },
      ],
    },
    {
      id: 3,
      teamName: null,
      designer: [{ id: 17, nameKo: "김형진", studentId: 21800204 }],
      title: "Clutch",
      summary: "AI 팀 코칭이 가능한 축구 정강이 보호대",
      description:
        "Clutch는 아마추어 축구인의 퍼포먼스 향상을 위한 웨어러블 디바이스 플랫폼이다. Clutch의 Wearable Device를 착용한 사용자의 경기 데이터를 GPS센서를 통해 추출하고, 축구공을 트래킹하여 공과 관련된 데이터를 제공한다. 추출한 데이터들은 자체 제작한 Clutch 어플리케이션과 연결해 결과를 확인하고, 이를 바탕으로 AI코칭 서비스를 통해 문제점 분석, 맞춤 전술 추천등의 기능을 제공할 수 있다. 코치와 감독이 없는 아마추어 축구인들에게 손흥민, 이강인과 같은 프로선수들의 분석 루틴을 따라할 수 있도록 하여 성장의 가능성을 제공한다.",
      thumbnail: "images/creation/product/HyungjinKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/product/HyungjinKim/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 4,
      teamName: null,
      designer: [{ id: 43, nameKo: "이신원", studentId: 21801053 }],
      title: "티볼리 (X-200)",
      summary: "다양한 경험을 연결하는 모바일 플랫폼",
      description:
        "Z세대에게는 다양한 경험은 미래에도 변하지 않을 중요한 가치이자 메가트랜드이다. 이런 Z세대의 니즈를 반영하여 다양한 브랜드 경험을 차량 내부에서 경험하도록 한다, 이를 통해 브랜드는 차세대 티볼리를 통해서 경험을 제공하게 되고 인테리어에 내장된 스팩, 가상공간, 모션체어 등을 통해서 여러가지 브랜드 액티비티들을 경험할 수 있다.",
      thumbnail: "images/creation/product/ShinwonLee/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/product/ShinwonLee/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 5,
      teamName: null,
      designer: [{ id: 10, nameKo: "김민기", studentId: 21900093 }],
      title: "MINI - Play",
      summary: "아이들의 뛰어노는 경험을 증가시는 촉매제",
      description:
        "기존 모빌리티 시장에서 소외되었던 아이들이 새로운 소비자층으로 올라옵니다. 아이들, 특히 사춘기 이전 6-11세의 아이들은, 또래 친구들과의 놀이가 매우 중요한데요. 이때의 놀이 경험이 인지, 학습 그리고 감정 능력을 향상시켜주기 때문입니다. 하지만 발달하는 디지털 환경 속에서 아이들은 방안에서 혼자 놀게 됩니다. 이에 아이들을 위한 모빌리티는 아이들이 방 바깥에서 친구들과 안전하게 놀 수 있는 횐경이 되어야한다고 생각했습니다",
      thumbnail: "images/creation/product/MingiKim/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/product/MingiKim/pc_contents_01.webp",
        },
      ],
    },
    {
      id: 6,
      teamName: null,
      designer: [{ id: 20, nameKo: "박민석", studentId: 21900267 }],
      title: "Camaro: CALIBURN",
      summary: "전기화시대의 카마로에 대하 조형연구",
      description:
        "전기머슬카는 현재 감성적으로도, 조형적으로도 좋은 시선을 끌지 못하고 있다. 이 연구는 아직 전기모델을 선보이지 않은 쉐보레의 카마로라는 머슬카의 전기차시대의 귀환을 중점으로 가져가려 한다. 카마로가 내연기관시대에서 이루지 못한 업적을 전기화 시대에서 이룰 수 있는 기회가 생긴것이다. 그걸 이루기 위해서는 카마로에게 없던 새로운 스토리가 필요하고 그 스토리에 걸맞는 조형 또한 중요하다. 이 작품은 이에 대한 조형연구이다.",
      thumbnail: "images/creation/product/MinseokPark/thumbnail.webp",
      creation: [
        {
          id: 1,
          extension: "webp",
          src: "images/creation/product/MinseokPark/pc_contents_01.webp",
        },
      ],
    },
  ],
  Communication: [],
  Service: [],
  Industrial: [],
};
