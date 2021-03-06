import alexBox from "../assets/text-boxses/Alexdner-textbox-copy.png";
import aliyahBox from "../assets/text-boxses/TextBox_ascension.png";
import aliyahMariaBox from "../assets/text-boxses/Aliyah-Church-copy.png";
import elisTextbox from "../assets/text-boxses/elisTextbox.png";
import benjiBox from "../assets/text-boxses/02-textbox.png";
import russianTextbox from "../assets/text-boxses/russianTextbox.png";
import nicoTextbox from "../assets/text-boxses/nicoTextbox.png";
import mariaTextBox from "../assets/text-boxses/mariaTextBox.png";
import trinityTextbox from "../assets/text-boxses/trinityTextbox.png";
import religiousMissionTextBox from "../assets/text-boxses/religiousMissionTextBox.png";

const englishText = {
  id: "englishText",
  frontPage: {
    title: "Holy Places",
    openingParagraph: `
    Between 1850 and 1917, the Russian Empire and the Russian Church erected dozens of buildings        throughout the Middle East and Palestine in particular.
    While this region was stagnant, the industrial revolution and progress swept the Western world.
    In this period years The Russian people feel a deepening connection with the Holy Land and the sacred sites of Christianity.
    Many funds and resources were invested in the region by the Russian Church, government and people. These investments are manifested in the construction of churches and monasteries, infrastructure for the growing numbers of Russian pilgrims making their way to Jerusalem every year.
    All this activity contributed greatly to the development of the Land of Israel and is still evident today, as beautiful churches and public buildings adorn the landscape of the country.`,
  },
  IsraelPage: {
    haifa: {
      title: `<b>St. Elijah’s Cathedral in Haifa</b>`,
      info: `As time passed and the pilgrimage movement to the Holy Land got stronger, the presence of the pilgrims in Palestine culminated in 1913 and many pilgrims began to arrive to the port of Haifa in addition to the port of Jaffa. As a result, an additional plot of land was purchased by Archim. Leonid Sentsov in order to provide a church and shelters for these pilgrims. Initially, the Ottoman authorities denied granting a permit for the place, but eventually, they acceded; on the day that marked 300 years of the Romanov dynasty, the site of St. Elijah in Haifa opened for the general public.
        Prophet Elijah, after whom the church is named, holds an honorary place in Christianity thakns to his war on idolatry, that culminated in the scene of "the challenge to baal" om Mt. Carmel.  according to new testament, John the Baptist is the spirtual successor St. Elijah.`,
      css: {
        top: "11%",
      },
    },
    seaOfGalili: {
      title: `<b>Tiberias</b>`,
      info: `On the shore of the Sea of Galilee (Kinneret) surrounded by the breathtaking view of the Galilee the church of Mary Magdalene was built. In 1908 Archim. Leonid Sentsov acquired the land on which the church was built some years later; he described the place as such: “A magnificent oasis next to a lake”.
        According to Christian tradition, this is the region where Jesus healed Mary Magdalene (Myriam of Magdala).
        <i>“And certain women, which had been healed of evil spirits and infirmities, Mary called Magdalene, out of whom went seven devils”</i> - Gospel of Luke
        Russian Orthodox nuns look after this gorgeous place on the Galilee hillside.`,
      css: {
        top: "56%",
      },
    },
  },
  JerusalemPage: [
    {
      name: "mariaChurch",
      waiteTime: 200,
      title: "The Church of Mary Magdalene",
      secTitle: `<b>The Church of Mary Magdalene</b>`,
      cssForPosition: {
        position: "fixed",
        top: "13%",
        right: "21%",
      },
      positonForTextBox: {
        position: "fixed",
        top: "3%",
        left: "9%",
      },
      textStyle: {
        position: "relative",
        bottom: "96%",
        left: "13%",
      },
      imageBox: aliyahMariaBox,
      info: `Mary Magdalene is depicted in the New Testament as one of Jesus’ central supporters, and is known as the “apostle of the apostles” (apostola apostolorum). As written in the Gospels, she was one of the women that were present during Jesus’ crucifixion and resurrection.

Upon the land that was bought in the name of Tsar Alexander III in 1882, the church that became the crown jewel of Russian presence in the Holy Land was erected. Even before the completion of the construction of the church, it was written that <i>“in this wonderful location there is a monument worthy of the royal family and Russia’s glory. The Catholic monks tear their robes out of jealousy”</i>.

Archim. Kapustin, head of the Russian ecclesiastical mission, proposed to the Grand Dukes Sergey Alexandrovich and Pavel Alexandrovich the idea of the construction of a temple in memory their mother, Tsarina Maria Alexandrovna, during their visit in Jerusalem in May 1881. The works began in 1885 and in 1888 a dedication ceremony was carried out with the presence of the Greek Patriarch of Jerusalem, Grand Duke and chairman of the IOPS Sergey Alexandrovich and his wife Princess Elizabeth Feodorovna, who requested to be buried at the site of the church.
Opposite the church’s main entrance gate, inside the fence that surrounds the whole Gethsemane complex, an ancient stone column of unknown origin is positioned. It called the “Betrayal Column” or the “Kiss Column” and it stands there as a symbol of the place where Judas Iscariot kissed Jesus and therefore exposed him to the Roman soldiers, as recorded in the Gospel of Mark in the New Testament:

<i>“Immediately while He was still speaking, Judas, one of the twelve, came up accompanied by a crowd with swords and clubs, who were from the chief priests and the scribes and the elders. Now he who was betraying Him had given them a signal, saying, "Whomever I kiss, He is the one; seize Him and lead Him away under guard." After coming, Judas immediately went to Him, saying, "Rabbi!" and kissed Him. They laid hands on Him and seized Him”</i>.
Following the Bolshevik revolution in Russia, the Bolsheviks went after the royal family, a member of which was Elizabeth Feodorovna. Since her husband’s death, Elizabeth became a nun devoting all her being to the aid of others. She did not accept to leave Russia for her personal safety in order to remain with her fellow community members in Moscow. Elizabeth was caught by the Bolsheviks and after a whole year of house arrest she was brutally murdered. People still loyal to the Tsar found the Princess’ body, asked to arrange her a proper burial. Her body was first transferred to Siberia, later to the royal family’s graveyard in China and in 1920, under her young sister Victoria’s instruction and respecting Elizabeth’s own will, her remains were transferred for the last time to be buried in the church of Mary Magdalene. Elizabeth is recognized as a new saint for Russian Orthodoxy.`,
    },
    {
      name: "nyvskyChurch",
      waiteTime: 300,
      title: "Alexander Courtyard",
      secTitle: `<b>Alexander Courtyard, Alexander Nevsky Church</b>`,
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
        bottom: "87%",
        left: "16%",
      },
      extraStyle: {
        height: "294px",
      },
      imageBox: alexBox,
      info: `The land plot of A. Nevsky site was purchased by Tsarist Russia in 1859 from the Ethiopian Church in order to install there the Russian consulate in Jerusalem. During the construction of the consulate powerful archaeological discoveries were made:
       An ancient gate that corresponds to one of the “Gates of Justice” literally portrayed in the New Testament, through which Jesus passed to get to the hill of Golgotha to his death.
        And a sarcophagus believed by some to contain Jesus’ shroud. 
        Owing to the unearthing of the findings, it was decided to erect a church in the aforementioned plot of land instead of the planned consulate. Archim. Kapustin together with the renowned archaeologist Conrad Schick continued the excavations, which revealed additional findings. 
         In addition to the church, a monastery and hostel were built in Alexander’s Courtyard. The building is made of pink and red marble following the ablaq technique, typical of the Mameluke period.`,
    },
    {
      name: "ascensionChurch",
      waiteTime: 400,
      title: "Church of the Ascension",
      secTitle: `<b>The Church of the Ascension on the Mount Of Olives</b>`,
      cssForPosition: {
        position: "fixed",
        top: "0%",
        right: "6%",
      },
      positonForTextBox: {
        position: "fixed",
        top: "6%",
        left: "23%",
      },
      textStyle: {
        position: "relative",
        bottom: "101%",
        left: "18%",
      },
      imageBox: aliyahBox,
      info: `Among the ךocal population the church is known as Al-Moskobiya in the name of the pilgrims who built it, even though the central figures related to the deed came from other places in Russia. The pioneer and operator of this impressive church, as also of many other initiatives of the Russian Empire, is the Archim. Antonin Kapustin whose origins are from the province of Perm. The church commemorates the ascension of Jesus to the Heavens and in its center stands a bell tower 64 meters high. This bell, which weighs 5 tons, was ine of the first to sound in Jerusalem after hundreds of years that the Muslim authorities prohibited Christians to ring church bells.
              The journey of the church bell from Russia is depicted in a very poetic way in the book “Esau” by Meir Shalev - “...four hundred and fifty pilgrims that dragged enormous copper church bell to the church of Mary Magdalene (error in the source). The bell was cast in Odessa and placed on a reinforced cart built especially for this purpose. The men pulled it to the port. From there they sailed on the “Santa Ana” ship to Jaffa, and there women harnessed themselves to the special cart. Since that very moment everybody kept silent, as they swore to do until the church bell is hung in its rightful place. A long time later one could distinguish the participants of the bell’s journey by their walking: strenuous pace with a hunched back, as if they were rowing against a strong wind”.
              
              The tradition of finding John the Baptist’s head on the Mount of Olives:
              One of the early Christian traditions determines that John the Baptist’s head was discovered on the Mount of Olives during the period of reign of Constantine Caesar of Rome. John the Baptist was beheaded because he rebuked King Herod for marrying Herodias, his brother’s wife; she had already given birth to a girl from his brother before the marriage. According to Torah (Pentateuch) laws, marrying a brother’s wife is permitted only in the case the brother passed away before bringing offspring to the world. According to the nuns’ tradition from the Russian monastery, Herodias did not enable the burial of John’s head together with the rest of his body; she hid the head in Herod’s palace as she feared that if his head was buried in the same place with his body, John would resurrect.
              
              One of John’s students discovered the head and in the dead of night she smuggled it away from the palace. Then, she concealed it in an ewer, which she buried on the Mount of Olives. Following this tradition, the head was revealed twice. The first time it was discovered by a wealthy man, Innocentius, who decided to distance himself from the world and lead an ascetic life and purchased a small plot of land on the Mount of Olives. At a certain point, when Innocentius decided to build himself a small church in his plot, he bumped into the ewer with the head. Prior to his last days, Innocentius buried the ewer at the same spot in which he found it. In 452 the same container was unearthed anew owing to a recurrent dream of two monks, both of whom saw John the Baptist thrice. In the dream, John explained to the monks where his head was buried. After the third time, the monks were convinced, went on to search for the head and found it.`,
    },
    {
      name: "benjeminYard",
      waiteTime: 500,
      title: "Benjamin’s Courtyard",
      secTitle: `<b>Benjamin’s Courtyard</b>`,
      cssForPosition: {
        position: "fixed",
        top: "7%",
        left: "7%",
        zIndex: "7",
      },
      positonForTextBox: {
        position: "fixed",
        top: "1%",
        left: "12%",
      },
      textStyle: {
        position: "relative",
        bottom: "108%",
        left: "116%",
      },
      extraStyle: {
        height: "500px",
      },
      imageBox: benjiBox,
      info: `Named after the Christian monk Benjamin who firstly arrived to Palestine in 1846 and, like others, fell in love with the Holy Land. During the Ottoman-Russian war he treated injured soldiers in the Ottoman front and for that he was awarded a medal of honor.
In 1887, using funds he raised by himself, Benjamin opened a hostel in todays Neviim sreet. Contrary to the hostels of the IOPS which where open only during the pilgrimage season (October to May), Benjamin’s hostel accommodated pilgrims all year long.
Benjamin’s hostel was intended to be a kind of shelter for people who wanted to spend the rest of their days in Jerusalem; in return of a minimal payment every person could let a room. There were also shared rooms in the hostel in which the people of the IOPS could stay free of charge. The monk Benjamin was very dear to the clergy and his funeral was performed in the church of the Holy Trinity. He passed the ownership of his hostel to the IOPS and wrote the rights of the asset to the chairman of the Society, Sergey Alexandrovich.

Over the course of many years the building housed the NGO “Yad Sarah”.`,
    },
  ],
  russianSqure: {
    title: "The Russian Compound",
    position: {
      top: "23%",
      left: "9.5%",
    },
    itemsArray: [
      {
        name: "russianSqure",
        waiteTime: 700,
        title: "The Russian Compound",
        secTitle: `<b>The Russian Compound</b>`,
        cssForPosition: {
          position: "fixed",
          top: "16%",
          left: "40%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "29%",
          left: "18%",
        },
        textStyle: {
          position: "relative",
          bottom: "70%",
          left: "16%",
        },
        extraStyle: {
          width: "1000px",
          height: "300px",
        },
        imageBox: russianTextbox,
        info: `In 1857 the Ottomans were willing to sell to Russia a land plot of 68 square kilometers located adjacent to the old city walls to the west. The Tsar paid, as a matter of fact, for five sixths of the land value, and the remaining sixth was granted to him as a present by the Ottomans. This was an extraordinary move, because this plot is strategically positioned overlooking the old city; it is very close to the central Jaffa road, and compelled the Ottoman authorities to vacate the square that was used for celebrations, ceremonies and military parades. Actually, the Russian Compound was the first site with great proximity to the old city walls in which the Ottomans permitted constructions. The vision of Russian Palestine begins to materialize in a prime location of developing Jerusalem.
The plan was to create a kind of a small town that serves Russian pilgrims that sojourn the Holy Land. It included the church of the Holy Trinity, a hospital, the hostels in honor of Maria and Elizabeth, a building hosting the ecclesiastical mission, the edifice of the Russian consulate and water reserves.
`,
      },
      {
        name: "religiousMission",
        waiteTime: 200,
        title: "Ecclesiastical Mission",
        secTitle: `<b>Building of the Ecclesiastical Mission</b>`,
        cssForPosition: {
          position: "fixed",
          top: "45%",
          right: "25%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "12%",
          left: "9%",
        },
        textStyle: {
          position: "relative",
          bottom: "106%",
          left: "11%",
        },
        extraStyle: {
          width: "660px",
          height: "450px",
        },
        imageBox: religiousMissionTextBox,
        info: `The building was constructed in order to host the members of the Russian Middle East Ecclesiastical Mission. It incorporated the offices that concentrated the activities in the Holy Land, Lebanon and Syria, dormitories and guest rooms for highly ranked guests and a library. The building’s configuration is in the form of four long two-story corridors in the middle of which stood a chapel for prayers.
The crown jewel of the edifice was the extensive and diverse library that contains the archive collection of the Russian Church in Israel to this day and also thousands of books and other titles that were donated by Price Konstantin. Currently the library is still active and contains over 17,000 titles. The building has remained occupied by representatives of the Russian Church for more than 150 years, since its erection to this day. In this period of time the authority over the Land of Israel has changed hands several times, from Ottoman rule to the British mandate and finally the state of Israel. One part of the building houses today the regional court of Jerusalem and the other part still houses the Russian Church representatives.
`,
      },
      {
        name: "elisYard",
        waiteTime: 300,
        title: "Elizabeth’s Courtyard",
        secTitle: `<b>Elizabeth’s Courtyard</b>`,
        cssForPosition: {
          position: "fixed",
          top: "47%",
          right: "59%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "5%",
          left: "24%",
        },
        textStyle: {
          position: "relative",
          bottom: "90%",
          left: "53%",
        },
        extraStyle: {
          width: "801px",
        },
        imageBox: elisTextbox,
        info: `It was built in 1864 by the architect Martin Ivanovich Eppinger as a men’s hostel of one floor providing 300 beds and designed according to the Russian Renaissance style. Despite the big quantity of beds, during the pilgrimage period between October and May the hostel’s occupancy was full. Additional beds were being placed in the corridors and even tents were set up in order to host tens of pilgrims. The hostel is named after Elisheva, John the Baptist’s mother, who is called Elizabeta in Russian.`,
      },
      {
        name: "mariaYard",
        waiteTime: 400,
        title: "Maria's Courtyard",
        secTitle: `<b>Women’s Hostel named after Maria</b>`,
        cssForPosition: {
          position: "fixed",
          top: "15%",
          right: "14%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "9%",
          left: "13%",
        },
        textStyle: {
          position: "relative",
          bottom: "97%",
          left: "15%",
        },
        extraStyle: {
          width: "677px",
        },
        imageBox: mariaTextBox,
        info: `The “Women Pilgrims’ Hostel” named after Maria Feodorvna, wife of Tsar Alexander III and mother of  the last Tsar Nikolai II. The building was planned by the IOPS “house architect” Martin Ivanovich Eppinger. It consists of two square edifices connected to each other; in the middle of each square there is a yard, in which the female pilgrims would do laundry and get warm under the sun, since the building’s thick walls caused the rooms to be especially cold.
The construction of the complex was completed in 1864 and, apart from the hostel and the yards, there were two kitchens in the complex that served hot simple meals. The guesthouse area was very basic and included big spaces that contained tens of beds.
In the summer of 1914, during WWI, the complex was conquered by the German command; the monks, priests and the rest of the people of the church were allowed to return to their country of origin, while the female pilgrims were thrown to the streets in just in their nightgowns upon their skin. The women pilgrims’ hostel became a stable for the horses of the German corps, who fought side by side with the Ottomans. By the end of 1917, after Britain’s victory, the English set their headquarters on the grounds of the Russian Compound and converted Maria’s courtyard to a jail.

During the period of the British Mandate the place served as a detention center and approximately a hundred Arab prisoners were hanged on its grounds. Many of the prisoners coming from Jewish underground organizations were also imprisoned in that detention center, but were not executed. Two Jewish prisoners who were about to get hanged there (Moshe Barazani and Meir Feinstein) commited suicide using a grenade before their execution, so that they do not die in their captors’ hands.
`,
      },
      {
        name: "holyTrinity",
        waiteTime: 500,
        title: "The Church of the Holy Trinity",
        secTitle: `<b>The Church of the Holy Trinity</b>`,
        cssForPosition: {
          position: "fixed",
          top: "2%",
          left: "59%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "18%",
          left: "47%",
        },
        textStyle: {
          position: "relative",
          bottom: "84%",
          left: "13%",
        },
        extraStyle: {
          height: "375px",
          width: "830px",
        },
        imageBox: trinityTextbox,
        info: `One of the first buildings created by the Russian Empire as part of the little town that rose in Moscow square was the church of the Holy Trinity. It was planned by the architect Martin Ivanovich Eppinger as a basilica including the nave with two long side aisles, a round arcade on the facade, and round rooms at the sides. The church, built using white stone, has eight towers and on top of each a dome; all eight domes were painted green for a long period of time but currently they have been coated with copper and crosses have been placed on top of them. The church bears great similarity to the Ascension Convent located in the Kremlin in Moscow.

Initially, the church was built for the use of the pilgrims hosted in one of the hostels of the Russian Compound. The assumption was that the pilgrims will prefer to have their important prayers in the historic churches in the old city. Therefore, the church is relatively not very big, and actually it is the smallest edifice as far as surface area is concerned out of all the constructions carried out in the Russian Compound. However, its height, position and luxurious style turn it into a remarkable edifice.`,
      },
      {
        name: "nicoYard",
        waiteTime: 600,
        title: "Nikolai’s Courtyard",
        secTitle: `<b>Nikolai’s Courtyard</b>`,
        cssForPosition: {
          position: "fixed",
          top: "57%",
          left: "8%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "10%",
          left: "6%",
        },
        textStyle: {
          position: "relative",
          bottom: "104%",
          left: "20%",
        },
        extraStyle: {
          width: "765px",
        },
        imageBox: nicoTextbox,
        info: `The last hostel for pilgrims built and the biggest one of all constructed in Jerusalem by the IOPS and bears the name of Russia’s last Tsar, Nikolai II. The building was planned by the Saint-Peterburg architect Alexey Efimovich Elkin to contain 1,200 beds in three different levels of accommodation. The basic level cost 13 kupikas per night, the medium level cost 2 rubles per night and the prime level, intended for established people, cost 4 rubles per night.
The total construction cost of the courtyard added up to 432,000 francs (equivalent to 2.8 million euros today) which were donated by the IOPS.
`,
      },
      {
        name: "sergiYard",
        waiteTime: 600,
        title: "Sergey’s Courtyard",
        secTitle: `<b>Sergey’s Courtyard</b> `,
        cssForPosition: {
          position: "fixed",
          top: "9%",
          left: "14%",
        },
        positonForTextBox: {
          position: "fixed",
          top: "3%",
          left: "20%",
        },
        textStyle: {
          position: "relative",
          bottom: "111%",
          left: "117%",
        },
        extraStyle: {
          height: "466px",
          marginTop: "-11px",
        },
        imageBox: benjiBox,
        info: `Sergey’s Courtyard is the apogee of the Russian pilgrims hostels in Jerusalem

        The hostel in Sergey’s Courtyard can accommodate 418 guests and few selected rooms (25) are appropriated for guests specifically requesting convenience as the style of European hotels dictates.

        During the beginning of the 20th century Sergey’s Courtyard was a vibrant and lively place, which was the epicenter of pilgrim life during their stay in Jerusalem. Until the outbreak of WWI the site hosted artist workshops, a stable, a firefighter station, a library, a garage, laundry facilities, two dining halls, a bakery, a banquet hall and more. The Courtyard provided a base for and hosted very distinguished guests alongside with professors, soldiers, sailors, priests and ordinary pilgrims.
`,
      },
    ],
  },
};
export { englishText as default };
