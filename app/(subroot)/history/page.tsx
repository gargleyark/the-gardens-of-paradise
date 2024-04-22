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
              Córdoba was the capital of the Islamic Caliphate of Córdoba, a
              center of learning, culture, and science during the medieval
              period. It reached its zenith under Abd al-Rahman III and his
              successors, boasting grand mosques, palaces, and libraries, most
              notably the breathtaking Great Mosque of Córdoba.
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
              Seville, known as Ishbiliya in Arabic, was another significant
              city in Al-Andalus. It was conquered by the Moors in 712 AD and
              became a prominent cultural and economic center with its strategic
              location on the Guadalquivir River.
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
              Granada is renowned for the Alhambra, a stunning palace and
              fortress complex constructed during the Nasrid dynasty. It was the
              last Muslim stronghold to fall to the Catholic Monarchs in 1492,
              marking the end of Muslim rule in Spain.
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
              Toledo was a multicultural city under Islamic rule, known for its
              production of steel and its vibrant intellectual scene. It served
              as a center for translation and preservation of ancient Greek and
              Roman texts into Arabic.
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
              Málaga was an important port city under Muslim rule, known for its
              trade and commerce. It housed several mosques, baths, and
              fortifications.
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
              Zaragoza, or Saraqusta, was a key city during the Umayyad period
              and later under the Taifa kingdoms. It flourished as a center of
              Islamic art, culture, and education.
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
              Murcia was a significant city in Al-Andalus, known for its
              agriculture, particularly the cultivation of silk. It was also a
              center for Islamic scholarship and architecture.
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
              Badajoz, or Batalyaws, was an important frontier city during the
              Muslim rule, serving as a military stronghold and a center for
              trade and agriculture.
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
              Santarém, or Shantarin, was a key city in Portugal under Islamic
              rule, known for its strategic location on the Tagus River and its
              agricultural production.
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
            </div>
          </div>
          <div className="space-y-2 px-8 py-2">
            <Heading
              as="h3"
              intent="base-section"
              className="text-center md:text-left lg:text-[24px]"
            >
              Jerex
            </Heading>
            <div>
              Jerez, or Xerez, was an important settlement strategically located
              near the frontier between Muslim-controlled territories and the
              Christian kingdoms to the north. It was part of the Emirate of
              Córdoba and later the Caliphate of Córdoba.
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
              known as "Tustar" or "Xustar."
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
              Almeria
            </Heading>
            <div>
              Almeria was a coastal city with a strategic port, serving as a
              center for trade and maritime activities during Islamic rule.
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
              Jaén was a strategic city known for its olive oil production and
              its position as a military stronghold during Islamic rule.
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
              Valencia, or Balansiya, was a major city under Islamic rule, known
              for its agricultural productivity, silk industry, and cultural
              achievements.
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
              Lorca was a fortress town in southeastern Spain, known for its
              castle and its significance as a military outpost during Islamic
              rule.
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
              Madinat al-Zahra was a palatial city built by Abd al-Rahman III
              near Córdoba, symbolizing the wealth and power of the Umayyad
              Caliphate. It was destroyed in the 11th century during the civil
              wars that led to the decline of the Caliphate of Córdoba.
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
              Under Muslim rule, Alzira was a town in the province of Valencia,
              known for its agriculture, particularly the cultivation of oranges
              and rice, during Islamic rule.
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
              Elvira, or Iliberri, was an ancient city near Granada, known for
              its strategic location and its role as a cultural and
              administrative center during Islamic rule.
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
