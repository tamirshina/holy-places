import alexBox from "../assets/text-boxses/Alexdner-textbox.png";
import aliyahBox from "../assets/text-boxses/Aliyah-Church.png";
import elisTextbox from "../assets/text-boxses/elisTextbox.png";
import mariaBox from "../assets/text-boxses/Mariabox.png";
import benjiBox from "../assets/text-boxses/Benjamin-yard.png";
import russianTextbox from "../assets/text-boxses/russianTextbox.png";
import nicoTextbox from "../assets/text-boxses/nicoTextbox.png";
import mariaTextBox from "../assets/text-boxses/mariaTextBox.png";
import trinityTextbox from "../assets/text-boxses/trinityTextbox.png";
import religiousMissionTextBox from "../assets/text-boxses/religiousMissionTextBox.png";
const russianText = {
  id: "englishText",
  frontPage: {
    title: "Российская недвижимость в Израиле ",
    openingParagraph: `
В период 1850-1917 гг. усилиями Российской империи и русской церкви были построены десятки строений на Ближнем востоке и, в частности, в Палестине. Таким образом, прогресс и техническая революция, начавшиеся на Западе, достигли наших мест.
Со времён распространения христианства на Руси, русский народ ощущает глубокую связь со святыми для христианства местами в Палестине.  Огромные силы и средства вкладываются сюда Российским государством и русским народом. Они направляются, в основном, на строительство церквей и монастырей, а также инфракструктуры для паломников в Иерусалим, число которых растёт с каждым годом. Эти инвестиции были очень важны для развития Палестины. Их результаты чувствуется и в наши дни: прекрасные церкви украшают Израиль, тысячи туристов приезжают ежегодно из России с целью посещения Святых мест. Среди главных строений, построенных ИППО и русской церковью выделяется. `,
  },
  IsraelPage: {
    haifa: {
      title: `<b>Собор Святого Пророка Илии в Хайфе или церковь Илии Пророка</b>`,
      info: `В связи с увеличением потока паломников в Палестину, достигшим рекорда в 1913 г., пароходы начали прибывать в Хайфский порт.
      Архимандрит Леонид Сенцов приобрёл здесь участок земли для строительства храма и приюта для паломников.
      Поначалу Османские власти отказывались дать разрешение на строительство, но в конце концов, согласились, и на 300-ю годовщину царствования дома Романовых Собор открылся для широкой публики.
      Илия Пророк считается в христианстве важной фигурой. Согласно некоторым преданиям Илия Пророк и Иоанн Креститель – одно и то же лицо. Также считается, что Пророк Илия боролся с идолопоклонством.`,
    },
    seaOfGalili: {
      title: `<b>Тверия</b> `,
      info: `На берегу Тибериадского озера, среди Галилейских пейзажей, находится подворье Марии Магдалены. В 1908 г. архимандритом Леонидом Сенцовым был приобретён участок земли, на котором позднее было построено подворье. Так он описал это место: «чудный оазис на  пустынных берегах озера».
      По преданию, именно на месте нынешнего расположения храма, названного в её честь, произошло чудо изгнания из Марии Магдалены семи бесов.
      «После сего он проходил по городам и селениям, проповедуя и благовествуя Царствие Божие, и с ним двенадцать, и некоторые женщины, которых он исцелил от злых духов и болезней: Мария, называемая Магдалиной, из которой вышли семь бесов…» (Евангилие от Луки).
      Русские монашки ухаживают за этим прекрасным местом у подножия Галилеи.`,
    },
  },
  JerusalemPage: [
    {
      name: "mariaChurch",
      waiteTime: 200,
      title: "Церковь Марии Магдалены",
      cssForPosition: {
        position: "fixed",
        top: "13%",
        right: "21%",
      },
      positonForTextBox: {
        position: "fixed",
        top: "3%",
        left: "32%",
      },
      textStyle: {
        position: "relative",
        bottom: "619px",
        left: "18%",
      },
      imageBox: mariaBox,
      info: `
    <b>Церковь Марии Магдалены</b> 

    Новый Завет характеризует Марию Магдалену как ярую последовательницу Христа и известна как «апостол апостолов» (apostolorum apostola). Согласно Евангелию, она была одной из женщин, присутствовавших на месте распятия и воскрешения Христа.

    На участке, приобретённом на имя Александра III, в 1882 г. Была построена церковь, которая должна была стать и стала венцом русского присутствия на Святой Земле. О ней написано ещё до завершения строительства: «В изумительном месте создаётся памятник, достойный царской семьи и во славу России. Католические монахи рвут на себе одежды от зависти».
    Архимандрит Капустин, глава российской религиозной миссии, предложил Великим князьям – Сергею Александровичу и Павлу Александровичу, во время их визита в Иерусалим в мае 1881 г., построить храм в память об их матери – княгини Марии Александровны.
    Строительные работы начались в 1885 г., а в 1888 г. состоялась церемония освящения церкви с участием греческого патриарха и главы ИППО Великого князя Сергея Александровича, а также его супруги Великой княгини Елизаветы Фёдоровны, которая просила захоронить её в этой церкви.
    Против главных входных ворот в церковь в изгороди вокруг Масличного сада установлен древний каменный столб неизвестного происхождения, названный «столбом измены» или «столб поцелуя». Столб обозначает место, на котором Иуда Искариот поцеловал Христа, выдав его римлянам, как написано в Евангелии от Марка:
    « И тотчас, как Он ещё говорил, приходит Иуда, один из двенадцати, и с ним множество народа с мечами и кольями, от первосвященников и книжников и старейшин. Предающий же Его дал им знак, сказав: Кого я поцелую, Тот и есть, возьмите Его и ведите осторожно. И, придя, тотчас подошёл к Нему и говорит: Рабби! Рабби! И поцеловал Его. А они возложили на Него руки свои и взяли Его».
    После революции  в России большевики преследовали царскую семью, включая Великую княгиню Елизавету Фёдоровну. После смерти мужа она приняла монашество и посвятила свою жизнь помощи ближним. Она отказалась покинуть Россию  в целях личной безопасности и осталась со своими близкими в Москве. Елизавета была схвачена большевиками и зверски убита после года заключения в застенках. Приверженцы царя, нашедшие тело Великой княгини, просили достойно похоронить её. Тело было переправлено в Сибирь , оттуда – в захоронение царской семьи в Китае. В 1920 г., по указанию её сестры Виктории и в соответствии с волей самой Елизаветы, её останки были захоронены в церкви Марии Магдалены. Елизавета причислена к лику святых и включена в Собор новомучеников и исповедников Российских.`,
    },
    {
      name: "nyvskyChurch",
      waiteTime: 300,
      title: "Александровское подворье",
      cssForPosition: {
        position: "fixed",
        top: "38%",
        right: "48%",
      },
      positonForTextBox: {
        position: "fixed",
        top: "3%",
        left: "40%",
      },
      textStyle: {
        position: "relative",
        bottom: "565px",
        left: "16%",
        height: "359px",
      },
      imageBox: alexBox,
      info: `
        <b>Александровское подворье, церковь Александра Невского</b>

      Единственное в Старом городе Иерусалима  и самое близкое к Храму Гроба Господня русское владение. Представляет собой археологический и архитектурный комплекс, включающий в себя порог Судных Врат со знаменитыми «игольными ушами».
      Земля, на которой стоит подворье, была приобретена у коптского духовенства в 1859 г. Российским консульством и первоначально предназначалась для здания Консульства.
      Однако, Консульство для удобства было построено не здесь, а на Русских постройках, за пределами Старого города.
      В 1881 г после паломнической поездки на Святую землю великого князя Сергея Александровича на участке начались обширные археологические раскопки под руководством архимандрита Антонина Капустина, поскольку обнаружилось, что на участке сохранилось множество древностей. В 1883 г. был обнаружен фрагмент второй обводной иерусалимской стены с Порогом Судных Врат, построенный в 5 – 4 вв. до нашей эры, арка храма Адриана, фрагменты стен и остатки двух колонн базилики Храма Воскресения времён правления императора Константина Великого, а также остатки других сооружений VII – VIII вв. После завершения раскопок прямо над ними началось строительство  подворья, которое завершилось  в 1891 г. 22 мая 1896 г. на подворье освятили домовую церковь в честь святого Александра Невского.`,
    },
    {
      name: "ascensionChurch",
      waiteTime: 400,
      title: "Вознесенский монастырь",
      cssForPosition: {
        position: "fixed",
        top: "0%",
        right: "6%",
      },
      positonForTextBox: {
        position: "fixed",
        top: "29%",
        left: "34%",
      },
      textStyle: {
        position: "relative",
        bottom: "618px",
        left: "12%",
      },
      imageBox: aliyahBox,
      info: `
              <b>Елионский Спасо-Вознесенский монастырь на Масличной горе</b>
              
      Арабские местные жители назвали его «Аль Московия» в честь построивших его российских паломников, несмотря на то, что основные создатели его прибыли из других районов России.  Создания и воплощение идеи, как и многих других, принадлежат архимандриту Антонину Капустину, прибывшиму из Пермской губернии. Церковь посвящена вознесению Христа. Её центральной частью является башня высотой 64 метра. Колокол весом в 5 тонн, был первым колоколом, прозвучавшим в Иерусалиме после многих столетий, когда мусульманские власти запрещали христианам звонить в колокола. Путь, проделанный колоколом из России, весьма поэтично описан Мэиром Шалевом в книге «Эсав»: «Четыреста пятьдесят паломников волокли огромный бронзовый колокол к церкви Марии Магдалены (ошибка автора). Колокол отлили в Одессе и водрузили на специально построенную для этого телегу. Мужчины  тащили её в порт. Оттуда отплыли на пароходе «Санта Анна» в Яффо, оттуда повозку вызвались тащить женщины. Путь проделали молча. Паломники дали обет молчания до тех пор, когда колокол  будет подвешен.
      Проделавших этот путь ещё долго можно было определить по походке: тяжёлые, будто вымученные шаги людей, идущих против сильного ветра.»

      Традиция нахождения головы Иоанна Крестителя на Масличной горе – 
Существует древнее предание, согласно которому голова Иоанна Крестителя была найдена на Масличной горе во времена римского императора Константина Великого. Голова Иоанна была отрублена, так как он доказал, что царь Ирод женился на жене своего брата Иродиаде, у которой была дочь от брата. По иудейской традиции женитьба на жене брата разрешалась только том случае, если брат умер, не оставив детей. По монашеской традиции в русском монастыре Иродиада не позволила похоронить голову Иоанна вместе с телом, а спрятала её в замке Ирода. Она опасалась, что будучи похороненным целиком, Иоанн воскреснет. 
Ученица Иоанна обнаружила голову и вынесла её под покровом ночи из замка. Она спрятала голову в кувшине и похоронила её на Масличной горе. Согласно преданию, голова была найдена дважды. В первый раз – вельможей Иннокентием, решившим удалиться от мира и жить в одиночестве. Он купил небольшой участок земли на Масличной горе. Иннокентий решил построить небольшую церковь и натолкнулся на кувшин с головой. Перед смертью Иннокентий закопал кувшин в том же месте, в котором нашёл его. В 452 г. кувшин был найден двумя монашками, которым Иоанн Креститель трижды явился во сне. Он рассказал им, где похоронена его голова. На третий раз монашки поверили, начали искать и нашли голову.`,
    },
    {
      name: "benjeminYard",
      waiteTime: 500,
      title: "Вениаминовское подворье",
      cssForPosition: {
        position: "fixed",
        top: "10%",
        left: "6%",
        zIndex: "11",
      },
      positonForTextBox: {
        position: "fixed",
        top: "23%",
        left: "2%",
      },
      textStyle: {
        position: "relative",
        bottom: "442px",
        left: "13%",
      },
      imageBox: benjiBox,
      info: `
    <b>Вениаминовское подворье в Иерусалиме</b> 
    
    Названо в честь иеромонаха Вениамина, впервые прибывшего на Святую землю в 1846 г. и влюбившегося в неё подобно многим другим. Во время русско-турецкой войны лечил раненых на фронте и заслужил звание Героя.
    В 1887 г. Вениамин открыл на собранные им пожертвования общежитие в Западном Иерусалиме. В отличие от сезонных общежитий (сезон паломничества длился с октября до мая) ИППО, общежитие Вениамина стало приютом для тех, кто хотел остаться и жить в Иерусалиме. За символическую плату они могли снять там комнату. Кроме того, на подворье были комнаты, в которых могли бесплатно проживать члены ИППО. Вениамин был очень уважаем Иерусалимским духовенством, его похоронили в Свято-Троицком Соборе.
    Подворье Вениамин завещал ИППО и переписал его на имя председателя – Великого князя Сергея Александровича. 
    На протяжении многих лет на подворье размещалась гуманитарная организация «Йад Сара».`,
    },
  ],
  russianSqure: {
    title: "Русское подворье",
    position: {
      top: "23%",
      left: "11.5%",
    },
    itemsArray: [
      {
        name: "russianSqure",
        waiteTime: 700,
        title: "Русское подворье",
        cssForPosition: {
          position: "fixed",
          top: "16%",
          left: "42%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "33%",
          left: "34%",
        },
        textStyle: {
          position: "relative",
          bottom: "471px",
          left: "12%",
        },
        imageBox: russianTextbox,
        info: `
        <b>Русское подворье</b> 
        
        В 1857г. Османские власти согласились продать России участок земли площадью 68 дунамов вблизи  западной части Иерусалимских стен. Российский император заплатил за пять шестых участка, а одну шестую получил в подарок. Это был экстраординарный шаг османских властей: участок находился в стратегической близости от Старого города, вблизи от центральной улицы Яффо. Османским властям пришлось освободить центральную площадь, на которой происходили праздники, церемонии и военные парады. Фактически, это был первый участок, проданный России в непосредственной близости к Старому городу.
      Так началось осуществление плана строительства городка для русских паломников на Святой земле.
       Здесь находятся Свято-Троицкий  собор, больницу, Мариинский и Елизаветинский хостели, Русская духовная миссия Московского патриархата в Иерусалиме, здание Российского консульства и водохранилища.`,
      },
      {
        name: "religiousMission",
        waiteTime: 200,
        title: "Здание духовной миссии",
        cssForPosition: {
          position: "fixed",
          top: "45%",
          right: "23%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "3%",
          left: "32%",
        },
        textStyle: {
          position: "relative",
          bottom: "619px",
          left: "18%",
        },
        imageBox: religiousMissionTextBox,
        info: `
    <b>Здание духовной миссии</b> 

    Здание было построено для членов Русской духовной миссии на Ближнем Востоке. Отсюда координировалась деятельность миссии в Палестине, Ливане и Сирии, спальни и гостиные для высокопоставленных гостей, комната для приёмов и библиотека. Двухэтажная постройка состоит из четырёх длинных коридоров, в центре которых находится часовня.
Самым примечальным в здании стала огромная библиотека, содержащая архивные сокровища Русской православной церкви в Израиле, а также тысячи книг и рукописей, пожертвованных Великим князем Константином. Библиотека, содержащая около 17,000 томов, существует и функционирует и по сей день.
В здании проживают в течение последних 150 лет представители Русской церкви. За эти годы трижды поменялась власть в стране: турецкая, английская и, наконец, израильская.
`,
      },
      {
        name: "elisYard",
        waiteTime: 300,
        title: "Елизаветинское подворье",
        cssForPosition: {
          position: "fixed",
          top: "47%",
          right: "57%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "3%",
          left: "40%",
        },
        textStyle: {
          position: "relative",
          bottom: "565px",
          left: "16%",
          height: "359px",
        },
        imageBox: elisTextbox,
        info: `
        <b>Елизаветинское подворье</b>

        Построено в 1864 г. архитектором Мартином Ивановичем Эппингером для размещения русских православных паломников-мужчин. Это одноэтажное здание на 300 мест построено в стиле русского Ренессанса. Несмотря на большое количество кроватей, в период с октября до апреля, подворье было заполнено паломниками, дополнительные кровати стояли в коридорах, а палатки разбивали под открытым небом.
        Подворье было названо в честь матери Иоанна Крестителя – Праведной Елисаветы.`,
      },
      {
        name: "mariaYard",
        waiteTime: 400,
        title: "общежитие Марии",
        cssForPosition: {
          position: "fixed",
          top: "15%",
          right: "12%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "29%",
          left: "34%",
        },
        textStyle: {
          position: "relative",
          bottom: "618px",
          left: "12%",
        },
        imageBox: mariaTextBox,
        info: `
              <b>Женское общежитеи имени Марии</b>
              
              Общежитие для паломниц, названное в честь Марии Фёдоровны, жены царя Александра Третьего и матери последнего русского царя Николая Второго.
              Здание спроектировано «придворным архитектором» ИППО  Мартином Ивановичем Эппингером. Здание состоит из двух кубических строений, соединённых между собой. В центре каждого Куба есть внутренний двор, в котором паломницы могли погреться на солнце, так как в комнатах было очень холодно из-за толстых стен.
              Строительство было завершено в 1864 г. Помимо общежития и внутренних двориков, были две кухни, в которых подавалась горячая простая еда. Спальни были очень простые, в больших помещениях стояли десятки кроватей. 
              В 1914 г., во время Первой Мировой войны, в здании расположились немецкие службы тыла. Германия была союзницей Турции в войне.  Монахам и другим служителям церкви разрешили вернуться в страны исхода, а паломниц выгнали прямо на улицу в одних ночных рубашках.
              В общежитии разместили немецкие кавалерийские конюшни.
              В конце 1917 г., после победы Великобритании в войне, англичане решили, что  их учреждения будут расположены на Русском подворье, а общежитие было превращено в тюрьму. В период английского мандата здание превратилось в дом предварительного заключения, там было повешено около сотни арабских заключённых. Множество участников еврейского подполья также содержались в камерах Русского подворья, но не были казнены. Двое еврейских заключённых, приговорённых к смертной казни (Моше Баразани и Меир Файнштейн), подорвали себя гранатой, чтобы не принять смерть от врагов.`,
      },
      {
        name: "holyTrinity",
        waiteTime: 500,
        title: "Собор Святой Троицы",
        cssForPosition: {
          position: "fixed",
          top: "2%",
          left: "61%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "23%",
          left: "2%",
        },
        textStyle: {
          position: "relative",
          bottom: "442px",
          left: "13%",
        },
        imageBox: trinityTextbox,
        info: `
    <b>Собор Святой Троицы</b> 
    
    Одно из первых строений  принадлежавших Российской империи, часть малого города на «Московской» площади. Собор был спроектирован архитектором Мартином Ивановичем Эппингером.
Свято-Троицкий собор представляет собой храм в неовизантийском стиле с десятью главами, двумя приделами и двумя колокольнями. Собор облицован  розовато-кремовым камнем,   10 зелёных куполов покрыты тульским бронзовым литьём. На куполах установлены православные кресты. 
Собор напоминает Церковь Вознесения, находящуюся в Московском Кремле.
Изначально Собор был построен для паломников, проживающих на Русском подворье. Предполагалось, что паломники будут, в основном, молиться в древних храмах Старого города. Поэтому Собор небольшой, он является самым малым сооружением Русского подворья, однако его высота, расположение и величественный стиль делают его выделяют его на фоне окружающих строений.`,
      },
      {
        name: "nicoYard",
        waiteTime: 600,
        title: "Николаевское подворье",
        cssForPosition: {
          position: "fixed",
          top: "57%",
          left: "5%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "23%",
          left: "2%",
        },
        textStyle: {
          position: "relative",
          bottom: "442px",
          left: "13%",
        },
        imageBox: nicoTextbox,
        info: `
    <b>Николаевское подворье</b> 
    
    The last hostel for pilgrims built and the biggest one of all constructed in Jerusalem by the IOPS (Imperial Orthodox Palestine Society) and bears the name of Russia’s last Tsar, Nikolai II. The building was planned by the Saint-Peterburg architect Alexey Efimovich Elkin to contain 1,200 beds in three different levels of accommodation. The basic level cost 13 kupikas per night, the medium level cost 2 rubles per night and the prime level, intended for established people, cost 4 rubles per night.
The total construction cost of the courtyard added up to 432,000 francs (equivalent to 2.8 million euros today) which were donated by the IOPS.
`,
      },
    ],
  },
};
export { russianText as default };
