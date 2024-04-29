// package
import Link from "next/link";
import Image from "next/image";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Button from "@/ui/button";
import Heading from "@/ui/head";
import Text from "@/ui/text";
import CatalogSlider from "@/ui/slider/catalogSlider";
import * as ProductCard from "@/ui/card/productCard";
import {
  ArrowRightIcon,
  CallIcon,
  DeliveryIcon,
  LockIcon,
  MoneyIcon,
} from "@/ui/assets/svg";

// data
import products from "@/data/product.json";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <SectionLayout
        bg="bg-[#ffc95c]"
        className="flex flex-col items-center justify-between lg:grid lg:grid-cols-1 lg:pt-8"
      >
        {/* Text content */}
        <div className="lg:max-w-nonelg:p-0 flex flex-col items-center gap-4 p-8 ">
          <Heading
            as="h1"
            intent="hero-section"
            className="font-imb_plex_serif"
          >
            The Story of Al-Andalus
          </Heading>
        </div>
      </SectionLayout>

      {/* Product section */}
      <SectionLayout>
        <div className="m-auto space-y-2 p-8 lg:flex lg:w-[1000px] lg:flex-col lg:content-center lg:items-center">
          <Heading
            as="h2"
            intent="base-section"
            className="text-center md:text-left"
          >
            What was Al-Andalus?
          </Heading>

          <div className="space-y-2 px-8 py-2">
            Al-Andalus is the name for the Islamic era of the Iberian Peninsula,
            present-day Spain and Portugal. Emerging in the early 8th century
            following the Muslim conquest of the region, Al-Andalus came to
            represent a diverse and dynamic society characterized by the
            convergence of Islamic, Christian, and Jewish cultures.
          </div>
          <div className="space-y-2 px-8 py-2">
            Situated at the crossroads of Europe, Africa, and the Mediterranean,
            Al-Andalus flourished as a center of trade, scholarship, and
            innovation under Muslim rule. Its geographic location facilitated
            cultural exchange and economic prosperity, attracting merchants,
            scholars, and artisans from across the known world.
          </div>
          <div className="space-y-2 px-8 py-2">
            The heart of Al-Andalus was the city of Córdoba, which served as the
            capital of the Umayyad Caliphate of Córdoba, established in 756.
            Córdoba, along with cities like Seville, Granada, and Toledo, became
            vibrant centers of Islamic civilization, renowned for their
            architectural splendor, intellectual achievements, and religious
            tolerance.
          </div>
          <div className="space-y-2 px-8 py-2">
            However, the unity of the region was short-lived. Internal divisions
            and power struggles led to the fragmentation of the caliphate into
            smaller taifas, or independent kingdoms, by the 11th century. This
            period of political decentralization, known as the Taifa Era, was
            characterized by incessant warfare among the taifas and the
            intervention of external powers, including the Christian kingdoms in
            the north and rival Muslim dynasties from North Africa.
          </div>
          <div className="space-y-2 px-8 py-2">
            Amidst the turmoil of the Taifa Era, Al-Andalus witnessed the
            arrival of the Almoravids, a Berber dynasty from North Africa, in
            the 11th century. The Almoravids sought to assert their dominance
            over Al-Andalus, intervening in the affairs of the peninsula and
            temporarily uniting the taifas under their rule. However, their
            influence waned over time, and internal discord weakened their hold
            on the territory.
          </div>
          <div className="space-y-2 px-8 py-2">
            The Almoravids were eventually supplanted by the Almohads, another
            Berber dynasty from North Africa, in the 12th century. The Almohads
            sought to revive the glory of Al-Andalus, undertaking ambitious
            architectural projects and promoting cultural and religious reforms.
            However, their rule was marked by internal strife and conflicts with
            the Christian kingdoms to the north, contributing to the eventual
            decline of Muslim power in the region.
          </div>
          <div className="space-y-2 px-8 py-2">
            By the late 15th century, the once-mighty Muslim kingdoms of
            Al-Andalus had been reduced to mere enclaves, with Granada standing
            as the last bastion of Muslim rule in the peninsula. In 1492, the
            Catholic Monarchs, Ferdinand II of Aragon and Isabella I of Castile,
            completed the Reconquista with the fall of Granada. The capitulation
            of Granada marked the end of Muslim rule in the Iberian Peninsula
            and the final end of Al-Andalus.
          </div>
          <div className="space-y-2 px-8 py-2">
            The legacy of Al-Andalus endures to this day, reflected in the art,
            architecture, and culture of Spain. The fusion of Islamic,
            Christian, and Jewish influences left an indelible mark on the
            identity of the region. Al-Andalus remains a poignant reminder of
            the complexities of intercultural exchange, and nothing better
            reflects the varied thoughts and feelings of its people than its
            poetry.
          </div>
        </div>
      </SectionLayout>

      <SectionLayout>
        <div className="m-auto space-y-2 p-8 lg:flex lg:w-[700px] lg:flex-col lg:content-center lg:items-center ">
          <Heading
            as="h2"
            intent="base-section"
            className="text-center md:text-left"
          >
            Places you will encounter in this collection
          </Heading>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Córdoba
            </Heading>
            <div>
              <p className="pb-4">
                Córdoba was the capital of the Islamic Caliphate of Córdoba,
                established in the 8th century when Muslim forces, led by the
                Umayyad dynasty, conquered the Iberian Peninsula.
              </p>
              <p className="pb-4">
                Under Islamic rule, Córdoba flourished as a hub of learning and
                study. The Umayyad Caliphate of Córdoba was known for its
                tolerance towards Christians and Jews, allowing them to practice
                their religions freely.
              </p>
              <p className="pb-4">
                An iconic symbol of Islamic Córdoba is the Great Mosque, also
                known as the Mezquita. Originally constructed as a mosque in the
                8th century using many fragments taken from nearby Roman ruins,
                it underwent various expansions and renovations over time.
              </p>
              <p className="pb-4">
                Córdoba reached its peak during the reign of Caliph Abd
                ar-Rahman III (912-961), a period characterised by prosperity
                and cultural advancement. The city became one of Europe's
                largest and most prosperous, surpassing capitals like Paris and
                Constantinople in population.
              </p>
              <p className="pb-4">
                However, Córdoba's Islamic rule began to unravel in the 11th
                century due to internal conflicts and the Reconquista—a
                prolonged Christian campaign to reclaim the Iberian Peninsula.
                In 1236, Córdoba fell to the forces of King Ferdinand III of
                Castile, ending Islamic governance in the city.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Seville
            </Heading>
            <div>
              <p className="pb-4">
                Seville, known as Ishbiliya in Arabic, fell under the control of
                the Umayyad Caliphate of Córdoba during the early 8th century.
              </p>
              <p className="pb-4">
                During Islamic governance, Seville emerged as a flourishing
                center of culture and commerce. Its strategic position along the
                Guadalquivir River facilitated lucrative trade routes linking
                the region with North Africa and the Middle East. Seville
                thrived as a centre for trade, agriculture, and artisanal
                craftsmanship, contributing to the economic prosperity of the
                wider area.
              </p>
              <p className="pb-4">
                Among the enduring symbols of Islamic Seville is the Giralda
                Tower, originally erected as a minaret for the city's grand
                mosque during the Almohad dynasty in the 12th century. Its
                architectural elegance exemplifies the refined craftsmanship and
                engineering prowess of the Islamic era.
              </p>
              <p className="pb-4">
                The city's landscape was further enriched by magnificent
                palaces, fortifications, and public baths, all a testament to
                the artistic and architectural achievements of the medieval
                Islamic population.
              </p>
              <p className="pb-4">
                Seville finally fell to Christian forces in 1248, ending Muslim
                rule in the city. A large portion of its population were forced
                to leave their homes and seek out new lives in exile in
                remaining portions of Islamic Spain or North Africa.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Granada
            </Heading>
            <div>
              <p className="pb-4">
                Granada is renowned for the Alhambra, a stunning palace and
                fortress complex constructed during the Nasrid dynasty. Granada
                reached its zenith under this dynasty, which ruled from the 13th
                to the 15th century. The Nasrid Emirate of Granada was the last
                Islamic kingdom in Spain. During this period, Granada became a
                center of learning, art, and architecture.
              </p>
              <p className="pb-4">
                By the late 15th century, the Catholic Monarchs, Queen Isabella
                I of Castile and King Ferdinand II of Aragon, launched the final
                phase of the Reconquista to unify Spain under Christian rule.
                After a long siege, Granada finally fell to the Catholic forces
                in January 1492, marking the end of Muslim rule in Spain.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Toledo
            </Heading>
            <div>
              <p className="pb-4">
                Toledo was a multicultural city under Islamic rule, known for
                its production of steel and its vibrant intellectual scene.
              </p>
              <p className="pb-4">
                The most significant period in Toledo's Islamic history was
                during the reign of the Umayyad Caliphate of Córdoba (8th to
                11th centuries). Toledo was an important administrative and
                cultural center within the caliphate, contributing to its
                reputation as one of the most prosperous cities in Al-Andalus.
              </p>
              <p className="pb-4">
                At this time, Toledo was a centre for translation - works
                including those of Greek, Roman, Persian, and Indian scholars
                were translated into Arabic. Scholars like Al-Zahrawi, also
                known as Abulcasis, made significant contributions to medicine
                and surgery from Toledo.
              </p>
              <p className="pb-4">
                Toledo's Islamic period came to an end in the 11th century with
                the fragmentation of the Caliphate of Córdoba into smaller
                competing Taifa kingdoms. Eventually, Toledo fell under the
                control of the Christian Kingdom of Castile in 1085.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Málaga
            </Heading>
            <div>
              <p className="pb-4">
                Málaga was an important port city under Muslim rule, known for
                its trade and commerce. It housed several mosques, baths, and
                fortifications.
              </p>
              <p className="pb-4">
                During the peak of Muslim rule in Al-Andalus, Málaga became a
                significant city within the Emirate of Córdoba and later the
                Caliphate of Córdoba. It boasted a diverse population of
                Muslims, Christians, and Jews, who coexisted relatively
                peacefully and contributed to the city's prosperity.
              </p>
              <p className="pb-4">
                Málaga's Islamic period saw the construction of several
                architectural marvels, including the Alcazaba, a fortress
                overlooking the city, and the Gibralfaro Castle, built atop a
                hill for defensive purposes. These structures, along with the
                city walls and mosques, exemplify the Islamic architectural
                influence in Málaga.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Zaragoza
            </Heading>
            <div>
              <p className="pb-4">
                In 714 AD, Zaragoza was conquered by Muslim forces led by Musa
                ibn Nusayr during the early expansion of Islamic rule in the
                region.Zaragoza, or Saraqusta, was a key city during the Umayyad
                period and later under the Taifa kingdoms. It flourished as a
                center of Islamic art, culture, and education.
              </p>
              <p className="pb-4">
                Under Islamic rule, Zaragoza flourished as a cultural and
                commercial center. It was strategically located along the Ebro
                River, which facilitated trade and communication with other
                parts of Al-Andalus and beyond.
              </p>
              <p className="pb-4">
                Zaragoza's Islamic period saw the construction of several
                architectural landmarks, including mosques, palaces, and
                fortifications. One of the most notable structures was the
                Aljafería Palace, built during the 11th century by the Banu Hud
                dynasty, which ruled Zaragoza independently during the Taifa
                period.
              </p>
              <p className="pb-4">
                Zaragoza was captured by the Christian Kingdom of Aragon in
                1118.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Murcia
            </Heading>
            <div>
              <p className="pb-4">
                Murcia was founded as a city in 825 by Abd ar-Rahman II, the
                Umayyad Caliph of Córdoba, who established it as the capital of
                the newly formed Emirate of Córdoba. It was a significant city
                in Al-Andalus, known for its agriculture, particularly the
                cultivation of silk. It was also a center for Islamic
                scholarship and architecture.
              </p>
              <p className="pb-4">
                The Arab rule in Murcia came to an end with the Christian
                Reconquista, when the city was captured by the forces of King
                Alfonso X of Castile in 1243.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Badajoz
            </Heading>
            <div>
              <p className="pb-4">
                Badajoz, or Batalyaws, was an important frontier city during the
                Muslim rule, serving as a military stronghold and a center for
                trade and agriculture. It was strategically situated along the
                Guadiana River, which facilitated trade and communication with
                other parts of Al-Andalus. Badajoz became known for its
                agricultural production, particularly its orchards and
                vineyards, as well as for its skilled craftsmen and artisans.
              </p>
              <p className="pb-4">
                Being an important frontier city, its defensive fortifications
                were expanded and strengthened to protect against potential
                invasions.
              </p>
              <p className="pb-4">
                The city's Arab rulers also left their mark on Badajoz through
                the construction of mosques, palaces, and public buildings.
                However, much of this architectural heritage was later modified
                or destroyed during subsequent periods of Christian rule.
              </p>
              <p className="pb-4">
                Badajoz's Islamic history came to an end with the Christian
                Reconquista, when the city was captured by Alfonso IX of León in
                1230.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Santarém
            </Heading>
            <div>
              <p className="pb-4">
                Santarém, or Shantarin, was a key city in Portugal under Islamic
                rule, known for its strategic location on the Tagus River and
                its agricultural production.
              </p>
              <p className="pb-4">
                One of the most significant legacies of Santarém's Islamic
                history is the Moorish castle. It is built on a hill overlooking
                the city and served as a defensive stronghold during the Muslim
                period. It later underwent significant reconstruction and
                modification after the city was captured by King Afonso I of
                Portugal in 1147.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Dénia
            </Heading>
            <div>
              Dénia was a coastal city that served as a vital trading hub under
              Muslim rule, connecting Al-Andalus with the Mediterranean world.
              The city was captured by King James I of Aragon in 1244.
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Jerez
            </Heading>
            <div>
              <p className="pb-4">
                Jerez, or Xerez, was an important settlement strategically
                located near the frontier between Muslim-controlled territories
                and the Christian kingdoms to the north. It was part of the
                Emirate of Córdoba and later the Caliphate of Córdoba.
              </p>
              <p className="pb-4">
                An important building still remaining from this history is the
                Alcazar of Jerez, a fortified palace built during the 11th and
                12th centuries. The Alcazar served as a residence for the city's
                Muslim rulers and later underwent further construction under
                Christian rule.
              </p>
              <p className="pb-4">
                The city was captured by Alfonso X of Castile in 1264.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Exfiliana
            </Heading>
            <div>
              In the Muslim era, when Almería served as the primary military
              port of the Caliphate of Córdoba, Exfiliana gained significance as
              a key town along the route to the port. During this time, it was
              known as &quot;Tustar&quot; or &quot;Xustar.&quot;
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Ar-Rusafa (or Al-Rusafa)
            </Heading>
            <div>
              The Palace of Ar-Rusafa, near Córdoba, was commissioned by ‘Abd
              al-Rahman I, the first Umayyad emir of the West. It is a
              significant example of Umayyad architecture in Al-Andalus. Named
              after a property of his grandfather in Syria, it marked the
              beginning of the development of almunias, rural estates, in the
              region.{" "}
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Almería
            </Heading>
            <div>
              <p className="pb-4">
                Almería was a coastal city with a strategic port, serving as a
                center for trade and maritime activities during Islamic rule.
              </p>
              <p className="pb-4">
                One surviving landmark of Almería's Arab history is the Alcazaba
                of Almería, a fortified complex built during the 10th century.
                The Alcazaba served as a defensive stronghold and administrative
                center during the Muslim period and later underwent further
                construction under Christian rule.
              </p>
              <p className="pb-4">
                Almería's Arab history was much longer than many cities in
                Al-Andalus, and it was not captured by Christian forces until
                1489. With the exile of a large part of its population, the city
                quickly diminished under Christian rule and the previous trading
                hub became a much quieter agricultural settlement. The following
                century saw it damaged by four earthquakes and raids by Barbary
                pirates, destroying much of its Islamic architectural heritage.
              </p>
            </div>
          </div>{" "}
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Algeciras
            </Heading>
            <div>
              Under Muslim rule, Algeciras was a significant port city in the
              Strait of Gibraltar, serving as a gateway between the
              Mediterranean and the Atlantic.
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Morón de la Frontera
            </Heading>
            <div>
              Morón de la Frontera was a frontier town located on the border
              between Muslim and Christian territories, witnessing frequent
              conflicts during the Reconquista.
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Jaén
            </Heading>
            <div>
              {" "}
              <p className="pb-4">
                Jaén was a strategic city known for its olive oil production and
                its position as a military stronghold during Islamic rule.
              </p>
              <p className="pb-4">
                One of the most iconic landmarks of Jaén's Islamic history is
                the Alcázar Viejo, a fortified citadel built during the 9th and
                10th centuries. The Alcázar served as a defensive stronghold and
                administrative center during the Muslim period. The city was
                captured by Ferdinand III of Castile in 1246.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Valencia
            </Heading>
            <div>
              <p className="pb-4">
                Valencia, or Balansiya, was a major city under Islamic rule,
                known for its agricultural productivity, silk industry, and
                cultural achievements. It was home to an impressive fortress,
                later replaced by the Almudín - a medieval granary and market.
              </p>
              <p className="pb-4">
                The city was captured by James I of Aragon in 1238.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Baza
            </Heading>
            <div>
              Baza was a Muslim town in the province of Granada, known for its
              strategic location and its role in regional trade and agriculture.
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Lorca
            </Heading>
            <div>
              <p className="pb-4">
                Lorca, situated in the Region of Murcia, Spain, was originally a
                Roman settlement. During the early 8th century, the region of
                Lorca was part of the Visigothic Kingdom until the Islamic
                conquest of the Iberian Peninsula. In 713, the Teodomiro Pact,
                also known as the Treaty of Orihuela, was signed, marking the
                integration of Lorca into the newly established Muslim
                territory. It later became part of the Emirate of Córdoba.
              </p>
              <p className="pb-4">
                After the collapse of the Caliphate of Córdoba, Lorca became
                part of the Emirate of Valencia. In 1042, it declared
                independence as a Taifa kingdom, governing an area extending to
                Jaén and Baza. In 1244 it was conquered by Christians, with King
                Fernando III of Castile and León and his son Alfonso, the future
                Alfonso X of Castile, playing a significant role in its
                conquest.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Madinat al-Zahra
            </Heading>
            <div>
              <p className="pb-4">
                Construction of Madinat al-Zahra began around 936 AD and lasted
                for several decades. Its construction was ordered by
                Abd-ar-Rahman III, the Caliph of Córdoba, as a symbol of the
                caliphate's power and wealth. It was made up of palaces,
                administrative buildings, mosques, gardens, all covered in
                intricate artwork and luxurious materials such as marble.
              </p>
              <p className="pb-4">
                Madinat al-Zahra flourished under the reign of Al-Hakam II, son
                of Abd-ar-Rahman III, who expanded and enhanced the city. Yet,
                its splendor was brief. Following the collapse of the Caliphate
                of Córdoba in the early 11th century, Madinat al-Zahra was
                slowly abandoned and left to decay. It became a quarry for
                building materials and the buildings were looted for their
                treasures.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Alzira
            </Heading>
            <div>
              <p className="pb-4">
                Alzira, founded by the Arabs, thrived as a significant town
                during Muslim rule, governing itself with its own
                administration. It played a central role in resisting Christian
                advances during the Almoravid period and aligned with the
                Almohads during their attempt at unification. The town,
                encircled by formidable walls, boasted mosques, bathhouses,
                mills, and other essential infrastructure. Descriptions from the
                12th-century geographical treatise of Al-Zuhví highlight
                Alzira's prosperity, including a remarkable bridge with three
                arches. Notable figures among the Alzirans of that era include
                scholars like Ibn Jafaya and Ibn Amira, as well as philosophers,
                jurists, historians, and mathematicians.
              </p>
              <p className="pb-4">
                Alzira fell to King James I of Aragon on December 30th 1242,
                which was a pivotal event in the establishment of the Kingdom of
                Valencia. This conquest was significant as Alzira was the only
                city enabling the crossing of the Júcar River, making it a key
                strategic location.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Elvira
            </Heading>
            <div>
              <p className="pb-4">
                Elvira, known originally as Madīnat Ilbīra, was a significant
                settlement in early Al-Andalus, built upon the site of the Roman
                town "Florentia Iliberritana." Elvira was a hub for trade,
                agriculture, and culture in the region. By the late 9th century,
                it faced internal conflict between different factions, including
                muwallads and Arabs led by Sawwār ibn Ḥamdūn.
              </p>
              <p className="pb-4">
                During the 11th century, Elvira came under the domination of the
                Zirids, a Berber group from North Africa. The Zirids, rewarded
                for their service to the Caliphate of Córdoba, were granted
                control of the province of Elvira. However, following the
                collapse of the Caliphate and the onset of civil war, the Zirid
                leader Zawi ben Ziri established an independent kingdom known as
                the Taifa of Granada. Granada, formerly known as Gharnata, rose
                to prominence, eclipsing Elvira in importance.
              </p>
              <p className="pb-4">
                Elvira was badly damaged during the civil war following the fall
                of Caliphate of Córdoba. Instead of being restored to
                prominance, Granada became the new major city of the region.
              </p>
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Murviedro
            </Heading>
            <div>
              Murviedro was an important city in the Valencian region, it is now
              known for its Roman and Moorish heritage, including its castle and
              ancient ruins.
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Promotion section */}
      <div className="grid overflow-hidden md:grid-cols-2 lg:h-full lg:max-h-[500px] lg:place-items-center">
        <div className="h-full w-full justify-end bg-[#ECE9E1] md:flex">
          <Image
            src="/images/offer.jpg"
            width={1250}
            height={1080}
            alt="promotion-card"
            className="h-auto w-full object-cover md:h-full md:w-auto"
          />
        </div>

        <div className="order-1 h-full w-full bg-[#ffdd99] md:order-2">
          <div className="w-full max-w-[720px] space-y-6 p-8">
            <div className="space-y-4">
              <Text weight={700} transform="uppercase" color="gray">
                promotion
              </Text>
              <Heading as="h2" intent="base-section">
                Pre-order your copy now.
              </Heading>
              <Text size="sm" className="md:w-[350px]">
                90 Poems representing life during the rise and fall of
                Al-Andalus. Expected release date: June 2024
              </Text>
            </div>
            <a className="block py-1.5" href="preorder">
              <Button fontSize="sm" className="py-1.5 md:text-base">
                Pre-order
              </Button>
            </a>
          </div>
        </div>
      </div>

      <SectionLayout>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 p-8 md:grid-cols-3 lg:gap-6 lg:py-10">
          <div className="space-y-4 bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <DeliveryIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text
                size="sm"
                weight={600}
                family="poppins"
                color="black/800"
                className="lg:text-xl"
              >
                Free UK Shipping
              </Text>
              <Text size="sm" color="gray">
                International shipping is also available
              </Text>
            </div>
          </div>
          <div className="space-y-4 bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <MoneyIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text
                size="sm"
                weight={600}
                family="poppins"
                color="black/800"
                className="lg:text-xl"
              >
                Money-back
              </Text>
              <Text size="sm" color="gray">
                30 days guarantee
              </Text>
            </div>
          </div>
          <div className="space-y-4 bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <LockIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text
                size="sm"
                weight={600}
                family="poppins"
                color="black/800"
                className="lg:text-xl"
              >
                Secure Payments
              </Text>
              <Text size="sm" color="gray">
                You will receive a PayPal invoice for your order when it is
                ready
              </Text>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
