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
            <a
              className="block py-1.5"
              href="https://docs.google.com/forms/d/e/1FAIpQLSc0obNp4frWOZH6Oa8Yq7wiAu_p6LAMZ4YdMNz2aMz3lxXOug/viewform?usp=pp_url&entry.1732470099=UK&entry.477204586=1"
            >
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
