import alexBox from "../assets/text-boxses/Alexdner-textbox.png";
import aliyahBox from "../assets/text-boxses/Aliyah-Church.png";
import elisTextbox from "../assets/text-boxses/elisTextbox.png";
import benjiBox from "../assets/text-boxses/02-textbox.png";
import russianTextbox from "../assets/text-boxses/russianTextbox.png";
import nicoTextbox from "../assets/text-boxses/nicoTextbox.png";
import mariaTextBox from "../assets/text-boxses/mariaTextBox.png";
import trinityTextbox from "../assets/text-boxses/trinityTextbox.png";
import religiousMissionTextBox from "../assets/text-boxses/religiousMissionTextBox.png";
const hebrewText = {
  id: "hebrewText",
  frontPage: {
    title: "מקומות קדושים",
    openingParagraph: `
    בין השנים 1850 ועד 1917 האימפריה הרוסית והכנסייה הרוסית הקימו עשרות מבנים ברחבי המזרח התיכון ופלשתינה בפרט. בשנים אלו המהפכה התעשייתית והקדמה ששטפה את העולם המערבי מיענה להגיע לאזורינו. 
    העם הרוסי בשנים הללו חשו חיבור עמוק עם ארץ ישראל והמקומות הקדושים לנצרות.
     כספים רבים ומשאבים הושקעו בפלשטינה ע"י הממשל והעם הרוסי, בנייה של כנסיות ומנזרים, תשתיות וזרם צליינים הולך וגובר של מאמנים רוסים העולים לרגל לירושלים מידי שנה. 
    כל אלו תרמו רבות לפיתוחה של ארץ ישראל. ההשפעה של פעילות זו ניכרת גם היום כאשר כנסיות יפיפיות מעטרות את נופייה של הארץ ושל הערים הגדולות, מבני ממשל מוכרים לכל שנבנו לפני יותר ממאה שנה משמשים גם היום את מדינת ישראל במאה העשרים ואחת, אלפי תיירים מרוסיה פוקדים מדי שנה את הארץ ומגלים את המקומות הקדושים. 
    ידע שהגיע לארץ, ההשקעה הכספית, התרומה לאוכלוסיה המקומית והמבנים היפייפים שהוקמו רובם בשימוש עד היום. ערך כל אלו לא יסולא בפז. 
    `,
  },
  IsraelPage: {
    haifa: {
      title: `<b>חיפה - כנסיית אליהו</b>`,
      info: `אט אט, עם התגברות זרם הצליינים לארץ ישראל ולקראת שיא נוכחותם בפלשתינה ב-1913, החלו צליינים רבים להגיע גם לנמל חיפה בנוסף לנמל יפו. בעקבות כך נרכשה חלקת אדמה על ידי הארכימנדריט ליאוניד סצנוב במטרה להקים בנקום כנסייה ובית מחסה לצליינים.
      בתחילה, השלטון העות'מני  סירב לתת למקום אישור, אך בסופו של דבר התרצה וביום שבו ציינו 300 שנה לשושלת רומנוב, מתחם אליהו הנביא בחיפה נפתח לקהל הרחב. 
     לאליהו הנביא, אשר על שמו קרויה הכנסייה, מקום של כבוד בנצרות גם משום שמקורות מסוימים מציינים שיוחנן המטביל ואליהו הנביא הם אותה הדמות וגם בשל מלחמתו של אליהו הנביא בעבודת האלילים. 
      `,
    },
    seaOfGalili: {
      title: `<b>טבריה כנסיית מריה מגדלן</b>`,
      info: `על שפת הכנרת בנוף הגליל, קמה כנסייה ע"ש מריה מגדלן. ב1908 רכש הארכימנדריט לאוניד את השטח עליו הוקמה שנים מאוחר יותר הכנסייה. הארכימנדריט ליאוניד תיאר את המקום כך "המקום הוא אואזיס נפלא לצידו של האגם" 
      כאן ע"פ המסורת הנוצרית ריפא ישו את מרים המגדלית, הלא היא מריה מגדלן. 
      "וְנָשִׁים אֲשֶׁר נִרְפְּאוּ מֵרוּחוֹת רָעוֹת וּמֵחֳלָיִים מִרְיָם הַנִּקְרָאָה מַגְדָּלִית אֲשֶׁר גֹּרְשׁוּ מִמֶּנָּה שִׁבְעָה שֵׁדִים׃." הבשורה ע"פ לוקאס.`,
    },
  },
  JerusalemPage: [
    {
      name: "mariaChurch",
      waiteTime: 200,
      title: "כנסיית מריה מגדלנה",
      secTitle: `כנסיית מריה מגדלנה`,
      cssForPosition: {
        position: "fixed",
        top: "13%",
        right: "21%",
      },
      positonForTextBox: {
        position: "fixed",
        top: "5%",
        left: "12%",
      },
      textStyle: {
        position: "relative",
        bottom: "98%",
        left: "34%",
        direction: "rtl",
      },
      imageBox: aliyahBox,
      info: `מרים המגדלית מתוארת בברית החדשה כתומכת מרכזית בישו, ונודעה כ"שליחת השליחים" (apostolorum apostola). על־פי ספרי הבשורה, היא הייתה אחת מהנשים שנכחו בצליבתו של ישו ובקומו לתחייה.

      על שטח שנקנה על שמו של הצאר אלכסנדר השלישי ב- 1882, הוקמה הכנסייה שיועדה והפכה להיות גולת הכותרת של הנוכחות הרוסית בארץ ישראל. עליה נכתב עוד לפני השלמת הבנייה שלה כי "...במקום המופלא מוקמת אנדרטה הראויה למשפחת הקיסר ולתהילת רוסיה. הנזירים הקתולים קורעים על עצמם את גלימותיהם מרוב
      קנאה".
      
      הארכימנדריט קפוסטין, ראש המשלחת הדתית הרוסית, הציע לנסיכים הגדולים סרגיי אלכסנדרוביץ' ופאבל אלכסנדרוביץ' את הרעיון להקים מקדש לזכר אמם, הקיסרית מריה אלכסנדרובנה, בעת ביקורם בירושלים במאי שנת 1881. 
      העבודות החלו ב- 1885 ובשנת 1888 נערך טקס ההקדשה של הכנסייה בנוכחות הפטריארך היווני של ירושלים, הנסיך הגדול וראש ה- IPPO(האגודה הקיסרית הפרבוסלבית לפלשתינה) סרגיי אלכסנדרוביץ ובת זוגו הנסיכה אליזבטה פיודרובנה, שביקשה להיקבר בכנסייה זו. 
      *מול שער הכניסה הראשי לכנסייה, בתוך הגדר המקיפה את מתחם גת שמנים, ניצב עמוד אבן עתיק שמקורו לא ידוע, הנקרא 'עמוד הבגידה' או 'עמוד הנשיקה'. עמוד זה מסמל את המקום בו נישק יהודה איש קריות את ישו, וכך הסגירו לחיילים הרומאיים, על פי המתואר בהבשורה על-פי מרקוס בברית החדשה:
      "עודנו מדבר, ויהודה בא והוא אחד משנים העשר, ועמו המון רב בחרבות ובמקלות מאת ראשי הכהנים והסופרים והזקנים. והמוסר אתו נתן להם אות לאמור: האיש אשר אשקהו, זה הוא. תפשו אותו והוליכוהו, אל יימלט. הוא בא והוא נגש אליו ויאמר: רבי רבי וינשק לו. וישלחו בו את-ידיהם ויתפשוהו".
      לאחר המהפכה הבולשביקית ברוסיה רדפו הבולשביקים את משפחת הצאר ובהם הנסיכה אליזבטה פיודרובנה. מאז מות בעלה, הפכה אליזבטה לנזירה, אשר הקדישה את חייה לעזרה לזולת ולא הסכימה לעזוב את רוסיה עבור בטחונה האישי, על מנת להישאר עם בני הקהילה שלה במוסקבה. אליזבטה נתפסה על ידי הבולשביקים ולאחר כשנה במעצר היא נרצחה באכזריות. תומכי הצאר שמצאו את הנסיכה לאחר מותה,ביקשו להביאה לקבורה ראויה. גופתה הועברה קודם לסיביר, לאחר מכן לבית הקברות של משפחת המלוכה בסין וב-1920 בהוראת אחותה ויקטוריה ובהתאם לרצונה של אליזבטה עצמה, הועברו עצמותיה בפעם האחרונה לקבורה בכנסייה מריה מגדלן. אליזבטה מוכרת כקדושה חדשה על ידי הכנסייה הפרובוסלבית.`,
    },
    {
      name: "nyvskyChurch",
      waiteTime: 300,
      title: "חצר אלכסנדר",
      secTitle: `חצר אלכסנדר, כנסיית אלכסנדר נייבסקי`,
      cssForPosition: {
        position: "fixed",
        top: "38%",
        right: "51%",
      },
      positonForTextBox: {
        position: "fixed",
        top: "3%",
        left: "40%",
      },
      textStyle: {
        position: "relative",
        bottom: "85%",
        left: "35%",
        height: "359px",
        direction: "rtl",
      },
      imageBox: alexBox,
      info: `חלקה שנרכשה על" ידי רוסיה הצארית בשנת 1859 מהכנסייה האתיופית, במטרה להקים שם את הקונסוליה הרוסית בירושלים. במהלך עבודות הבנייה של הקונסוליה התגלו ממצאים ארכיאולוגים מרעישים;  שער קדום וסרקופג (ארון קבורה) המאמינים כי הוא מכיל את תכריכיו של ישו. בעקבות חשיפת הממצאים הוחלט להקים במקום כנסייה במקום הקונסוליה המתוכננת. הארכימנדריט קפוסטין בשיתוף עם הארכיאולוג הנודע קונרד שיק המשיכו בחפירות ובמקום התגלו ממצאים מתאימים ל"שערי המשפט" המתוארים בצורה מפורטת בברית החדשה ודרכם עבר ישו הצלוב אל עבר גבעת גלגלתא, שם לבסוף מצא את מותו. בנוסף לכנסייה הוקמו בחצר אלכסנדר מנזר ואכסנייה למבקרים. המבנה עשוי מאבן שיש ורודה ואבן שיש אדומה בתבנית אבלק המאפיינת את התקופה הממלוכית. `,
    },
    {
      name: "ascensionChurch",
      waiteTime: 400,
      title: "כנסיית העלייה",
      secTitle: `כנסיית העלייה בהר הזיתים`,
      cssForPosition: {
        position: "fixed",
        top: "0%",
        right: "6%",
      },
      positonForTextBox: {
        position: "fixed",
        top: "-3%",
        left: "29%",
      },
      textStyle: {
        position: "relative",
        bottom: "592px",
        left: "34%",
        direction: "rtl",
      },
      imageBox: aliyahBox,
      info: `נקראת בפי התושבים הערביים המקומיים אל מוסקובייה על שם הצליינים הרוסים שבנו אותה, על אף שהדמויות המרכזיות בבנייתה הגיעו מחלקים אחרים של רוסיה. היוזם והמבצע של הכנסייה המרשימה הזו, כמו יוזמות רבות אחרות של האימפריה הרוסית, הוא הארכימנדריט אנטונין קפוסטין שהגיע ממחוז פרם. הכנסייה מקדשת את זכר עלייתו של ישו השמיימה ובמרכזה מתנוסס מגדל פעמון בגובה 64 מטרים. הפעמון, שמשקלו כ- 5 טונות, היה הראשון לצלצל בירושלים אחרי מאות שנים בהם השלטונות המוסלמים אסרו על נוצרים לצלצל בפעמונים. 
              הדרך שעשה הפעמון מרוסיה מתוארת בצורה פיוטית בספרו של מאיר שלו "עשיו" - "ארבעה מאות וחמישים צליינים שגררו פעמון נחושת ענקי לכנסיית מרים המגדלית (הטעות במקור). את הפעמון יצקו באודסה והציבו על גבי עגלה כבירה שנבנתה במיוחד לשם כך. הגברים משכו אותה עד לנמל. משם הפליגו באונייה "סנטה-אנה" ליפו, ושם נרתמו הנשים אל העגלה. למן אותו רגע שתקו כולם, כי כך נשבעו לעשות עד שיתלו את הפעמון במקומו. עוד
              זמר רב אחר-כך היה אפשר להכיר את משתתפי המסע ההוא לפי אופן הליכתם: פוסעים מאומצים
              ושחוחים, כחותרים נגד רוח עזה".
              
              המסורת על מציאת ראשו של יוחנן המטביל בהר הזיתים -
              קיימת מסורת מוקדמת הגורסת כי ראשו של יוחנן המטביל התגלה על הר הזיתים בזמנו של קונסטנטינוס הקיסר הרומי. ראשו של יוחנן המטביל נכרת משום שהוכיח את המלך הורדוס על כך שנשא לאישה את הורודיה, אשת אחיו, ולה בת מאחיו. לפי חוקי התורה, נשיאת אשת האח מותרת רק במקרה שבו האח מת לפני שהעמיד צאצאים.  על פי מסורת הנזירות במנזר הרוסי, הורודיה לא אפשרה לקבור את ראשו יחד עם יתר גופו, אלא הסתירה את הראש בארמונו של הורדוס  כיוון שחששה כי אם יקבר ראשו יחד עם הגוף יקום יוחנן לתחייה.
              תלמידתו של יוחנן גילתה את הראש והבריחה אותו באישון לילה מהארמון. את הראש הטמינה בכד וקברה בהר הזיתים. על פי מסורת זו, נתגלה הראש פעמיים. בפעם הראשונה על ידי איש עשיר, אינוצנטיוס, שהחליט להתרחק מהעולם ולחיות בפרישות ולשם כך רכש חלקה קטנה על הר הזיתים. כאשר רצה אינוצנטיוס לבנות לו במקום כנסייה קטנה הוא נתקל בכד עם הראש. לפני מותו טמן אינוצנטיוס את הכד במקום בו מצא אותו. בשנת 452 הכד נתגלה שוב בעקבות הופעתו של יוחנן המטביל שלוש פעמים בחלומותיהם של שני נזירים. בחלום סיפר להם יוחנן היכן קבור ראשו. לאחר הפעם השלישית השתכנעו הנזירים הלכו לחפש את הראש  ומצאו אותו.
              `,
    },
    {
      name: "benjeminYard",
      waiteTime: 500,
      title: "חצר בנימין",
      secTitle: `<b>חצר בנימין</b>`,
      cssForPosition: {
        position: "fixed",
        top: "6%",
        left: "11%",
      },
      positonForTextBox: {
        position: "fixed",
        top: "0%",
        left: "12%",
      },
      textStyle: {
        position: "relative",
        bottom: "114%",
        left: "134%",
        direction: "rtl",
      },
      imageBox: benjiBox,
      info: `החצר קרויה על שם נזיר נוצרי בשם בנימין שהגיע לראשונה לארץ ישראל בשנת 1846 וכמו אחרים התאהב בארץ הקודש. בזמן מלחמת טורקיה רוסיה טיפל בפצועים בחזית הטורקית ועל פועלו זכה בעיטור גבורה. 
בשנת 1887 באמצעות כספים שגייס בעצמו, פתח בנימין אכסנייה ברובע היהודי. בניגוד לאכסניות העונתיות (עונת הצליינות נמשכת בד"כ מאוקטובר עד מאי) של ה-IPPO, האכסנייה של בנימין נועדה להיות כמעין בית מחסה לאנשים שרצו לסיים את חייהם בירושלים וכך תמורת תשלום זעום היה ניתן לשכור חדר לשם כך. במקום היו גם חדרים משותפים בהם יכלו אנשי האגודה ה-IPPO האגודה הקיסרית הפרבוסלבית לפלשתינה) לשהות בחינם. הנזיר בנימין היה חביב מאוד על הכמורה בירושלים והלווייתו נערכה בכנסיית השילוש הקדוש. את החצר שהקים הוא הוריש לאגודה ורשם אותה על שם יושב ראש האגודה סרגיי אלכסנדרוביץ.
במשך שנים המבנה אוכלס על "ידי עמותת יד שרה.`,
    },
  ],
  russianSqure: {
    title: "מגרש הרוסים",
    position: {
      top: "23%",
      left: "13.5%",
    },
    itemsArray: [
      {
        name: "russianSqure",
        waiteTime: 700,
        title: "מגרש הרוסים",
        secTitle: `מגרש הרוסים`,
        cssForPosition: {
          position: "fixed",
          top: "16%",
          left: "44%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "32%",
          left: "17%",
        },
        textStyle: {
          position: "relative",
          bottom: "410px",
          left: "96%",
          fontSize: "18px",
          direction: "rtl",
        },
        extraStyle: {
          width: "1000px",
          lineSpace: "1.7",
        },
        imageBox: russianTextbox,
        info: `בשנת 1857 ניאותו העות 'מאנים למכור לרוסיה שטח אדמה של 68 דונם בנקודה סמוכה מאוד לחומות העיר העתיקה ממערב. הצאר שילם בפועל על חמש שישיות מהקרקע, ואילו החלק השישי ניתן לו במתנה על ידי העות'מאנים. היה זה צעד יוצא דופן ביותר, שכן המקום חולש על העיר העתיקה מבחינה אסטרטגית; הוא קרוב מאוד לדרך יפו הראשית, ואף אילץ את העות'מאנים לפנות את הכיכר ששימשה עבור חגיגות, טקסים ומסדרים צבאיים. למעשה, מגרש הרוסים היה אחד המתחמים הראשונים בו העות'מאנים התירו לבנות כה קרוב לחומת העיר העתיקה. החזון להקים את רוסיה הפלשתינית יוצא לדרך בירושלים המתחדשת בפריים לוקיישן.
התוכנית הייתה להקים מעין עיר קטנה שתשרת את הצליינים הרוסים הפוקדים את ארץ הקודש. היא כללה את כנסיית השילוש הקדוש, בית חולים, האכסניות ע"ש מריה ואליזבטה, מבנה למשלחת הדתית, מבנה לקונסוליה הרוסית ומאגרי מים.
`,
      },
      {
        name: "religiousMission",
        waiteTime: 200,
        title: "המשלחת הדתית",
        secTitle: `בניין המשלחת הדתית`,
        cssForPosition: {
          position: "fixed",
          top: "45%",
          right: "27%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "4%",
          left: "6%",
        },
        textStyle: {
          position: "relative",
          bottom: "619px",
          left: "22%",
          fontSize: "18px",
          direction: "rtl",
        },
        extraStyle: {
          lineSpace: "1.7",
        },
        imageBox: religiousMissionTextBox,
        info: `המבנה הוקם על מנת לשמש את חברי המשלחת הרוסית הדתית למזרח התיכון. המבנה כלל את המשרדים שריכזו את הפעילות בארץ ישראל, לבנון וסוריה, חדרי לינה ואירוח  לאורחים רמי דרג, קבלה וספרייה. המבנה בנוי בצורה של ארבעה מסדרונות ארוכים בני שתי קומות ובמרכזם קפלה לתפילה. 
    גולת הכותרת של המבנה היא הספרייה הענפה המכילה עד היום את אוצר הארכיון של הכנסייה הרוסית בישראל ובנוסף אלפי ספרים וכותרים שנתרמו על ידי הנסיך קונסטנטין. כיום הספרייה עדיין פעילה ומכילה מעל ל- 17,000 כותרים. 
    המבנה נותר מאוכלס על ידי נציגים של הכנסייה הרוסית מאז הקמתו ועד היום במשך מעל 150 שנה. באותה תקופה התחלף  השלטון בארץ מספר פעמים, מן הממשל העות'מאני לממשל האנגלי ובסוף לממשל הישראלי. חלקו של המבנה מאכלס כיום את בית המשפט המחוזי של ירושלים.`,
      },
      {
        name: "elisYard",
        waiteTime: 300,
        title: "חצר אליזבטה",
        secTitle: `חצר אליזבטה`,
        cssForPosition: {
          position: "fixed",
          top: "46%",
          right: "62%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "-1%",
          left: "27%",
        },
        textStyle: {
          position: "relative",
          bottom: "96%",
          left: "74%",
          height: "359px",
          fontSize: "18px",
          direction: "rtl",
        },
        imageBox: elisTextbox,
        info: `נבנתה בשנת 1864 על ידי האדריכל מרטין איוונוביץ אפינגר כאכסנייה לגברים בת קומה אחת ובה 300 מקומות לינה, המעוצבת בסגנון רנסנס רוסי. על אף כמות המיטות הגדולה במקום, במשך עונת הצליינים מאוקטובר ועד אפריל התפוסה במקום הייתה מלאה. מיטות נוספות היו ממוקמות במסדרונות ואף אוהלים הוקמו לאחסן את עשרות הצליינים. האכסנייה קרויה על שם אלישבע, אימו של יוחנן המטביל, הנקראת אליזבטה ברוסית. `,
      },
      {
        name: "mariaYard",
        waiteTime: 400,
        title: "אכסניית מריה",
        secTitle: `<b>אכסניית הנשים ע"ש מריה</b>`,
        cssForPosition: {
          position: "fixed",
          top: "15%",
          right: "15%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "9%",
          left: "12%",
        },
        textStyle: {
          position: "relative",
          bottom: "97%",
          left: "29%",
          fontSize: "18px",
          direction: "rtl",
        },
        imageBox: mariaTextBox,
        info: `אכסניית הנשים הצלייניות" נקראה על שם מריה פיודורובנה, אשתו של הצאר אלכסנדר השלישי ואמו של הצאר האחרון ניקולאי השני. המבנה תוכנן על ידי "אדריכל הבית" של ה-IPPO, מרטין איוונוביץ' אפינגר. המבנה עצמו הורכב משני מבנים מרובעים מחוברים זה לזה ובמרכזו של כל מרובע חצר, בה יכלו הצלייניות לכבס ולהתחמם בשמש, שכן קירותיו העבים של המבנה גרמו לחדרים להיות קרים במיוחד.
בניית המתחם הסתיימה ב- 1864 ומלבד מתחם האכסנייה והחצרות, היו במתחם שני מטבחים שהגישו ארוחות חמות ופשוטות. מתחם הלינה היה בסיסי  מאוד וכלל חללים גדולים שהכילו כמה עשרות מיטות.
בקיץ 1914 , בזמן מלחמת העולם הראשונה, נכבש המתחם על ידי הפיקוד הגרמני: הנזירים ויתר אנשי הדת הורשו לחזור לארץ מוצאם, ואילו הצלייניות גורשו לרחובות כשכותונת לילה בלבד לעורן. אכסניית הצלייניות הפכה לאורווה של סוסי החילות הגרמנים אשר לחמו לצד הצבא העות'מאני. בשלהי שנת 1917, לאחר הניצחון הבריטי, קבעו האנגלים את מרכז שלטונם במגרש הרוסים  ואת חצר מריה הסבו לבית סוהר. 
בתקופת המנדט הבריטי המקום שימש כבית מעצר ובמקום נתלו כמאה אסירים ערבים. רבים מאסירי המחתרות היהודיות נכלאו אף הם בבית מעצר זה, אך לא הוצאו בו להורג. שני אסירים יהודים שהיו צפויים להיתלות במקום (משה בראזני ומאיר פיינשטין), התאבדו באמצעות רימון לפני הוצאתם להורג על מנת לא למות מיד שוביהם. 
`,
      },
      {
        name: "holyTrinity",
        waiteTime: 500,
        title: "כנסיית השילוש הקדוש",
        secTitle: `<b>כנסיית השילוש הקדוש</b>`,
        cssForPosition: {
          position: "fixed",
          top: "2%",
          left: "61%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "19%",
          left: "46%",
        },
        textStyle: {
          position: "relative",
          bottom: "78%",
          left: "40%",
          fontSize: "18px",
          direction: "rtl",
        },
        imageBox: trinityTextbox,
        info: ` אחד מן המבנים הראשונים שהוקמו ע"י האימפריה הרוסית כחלק מן העיר הקטנה שקמה לה בכיכר מוסקבה, היא מגרש הרוסים. את הכנסייה תכנן האדריכל הרוסי מרטין איוונוביץ' אפינגר, כבזיליקה הכוללת אולם תווך ושתי סטראות ארוכות, בחזיתה אפסיס מעוגל, וחדרים מעוגלים בצדיה. הכנסייה בנויה אבן לבנה ולה שמונה מגדלים שבראשם כיפות, שהיו צבועות במשך שנים בירוק ועתה הן מצופות נחושת, ובראשן צלבים. הכנסייה מזכירה במראה את מנזר העלייה לשמים שנמצא בקרמלין שבמוסקבה.

הכנסייה נבנתה מלכתחילה לשימושם של צליינים המתאכסנים באחת האכסניות במגרש הרוסים. ההנחה הייתה כי הצליינים יעדיפו לשאת את תפילותיהם החשובות בכנסיות ההיסטוריות בעיר העתיקה. לכן הכנסייה אינה גדולה, בעצם היא המבנה הקטן ביותר בשטחו מבין מבני מגרש הרוסים, אך גובהה, מיקומה והסגנון המפואר שלה הופכים אותה למבנה בולט.
`,
      },
      {
        name: "nicoYard",
        waiteTime: 600,
        title: "חצר ניקולאי",
        secTitle: `<b>חצר ניקולאי</b> `,
        cssForPosition: {
          position: "fixed",
          top: "57%",
          left: "12%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "2%",
          left: "7%",
        },
        textStyle: {
          position: "relative",
          bottom: "98%",
          left: "41%",
          fontSize: "18px",
          direction: "rtl",
        },
        imageBox: nicoTextbox,
        info: `אכסניית הצליינים האחרונה והגדולה ביותר שהוקמה בירושלים על ידי האגודה (IPPO האגודה הקיסרית הפרבוסלבית לפלשתינה) ונקראת על שמו של הצאר האחרון של רוסיה, ניקולאי השני. המבנה תוכנן ע"י האדריכל הפטרבורגי א"א אלקין להכיל 1,200 מקומות לינה בשלוש דרגות אירוח שונות. הדרגה הראשונה עלתה 13 קופיקות ללילה, הדרגה השנייה עלתה שני רובל ללילה והדרגה השלישית, שיועדה לאורחים מבוססים, עלתה 4 רובל ללילה. 
עלות בניית החצר הסתכמה ב- 432,000 פרנקים (שווה ערך ל- 2.8 מיליון אירו כיום) שנתרמו על ידי ה-  IPPO
`,
      },
    ],
  },
};
export { hebrewText as default };
