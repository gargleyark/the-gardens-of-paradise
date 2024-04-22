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
        className="flex flex-col items-center justify-between lg:grid lg:grid-cols-2 lg:pt-8"
      >
        {/* Text content */}
        <div className="flex flex-col items-center gap-4 p-8 sm:max-w-[600px] md:max-w-[600px] md:py-16 lg:order-2 lg:max-w-none lg:items-start lg:p-0">
          <div className="space-y-2 text-center lg:text-left">
            <Heading
              as="h1"
              intent="hero-section"
              className="font-imb_plex_serif"
            >
              The Gardens of Paradise
            </Heading>

            <h3 className="md:pb-8 md:pt-2 md:text-xl lg:text-[32px]">
              Poems from Al-Andalus
            </h3>
          </div>
          <a href="/preorder">
            <Button fontSize="sm" className="px-14 py-3 md:text-lg">
              Pre-Order Now
            </Button>
          </a>
        </div>

        {/* Image content */}
        <div className="flex h-auto w-full items-end justify-center overflow-hidden lg:order-1">
          <Image
            src="/images/main-2.png"
            width={600}
            height={761}
            alt="nigga-listening-music"
            className="w-full max-w-[360px] object-cover object-top lg:max-w-[420px] xl:max-w-[460px]"
          />
        </div>
      </SectionLayout>

      <SectionLayout>
        <div className="m-auto space-y-2 p-8 lg:flex lg:w-[1000px] lg:flex-col lg:content-center lg:items-start">
          <Heading
            as="h2"
            intent="base-section"
            className="w-full text-center "
          >
            A new collection of poems
          </Heading>
          <div className="space-y-2 px-8 py-2">
            Discover the verses of Al-Andalus with this enchanting collection of
            90 newly translated Islamic Andalusian poems. Adapted to preserve a
            rhyming style, these lyrical verses transport you back in time to
            the vibrant streets and ancient palaces of medieval Islamic Spain
            and Portugal.
          </div>
          <div className="space-y-2 px-8 py-2">
            From the pens of rulers, politicians, soldiers, men and women, these
            poems offer a rich tapestry of voices spanning from the 8th to the
            15th century - the lifespan of Al-Andalus.
          </div>
          <div className="space-y-2 px-8 py-2">
            Immerse yourself in bustling cities, fragrant gardens, and majestic
            palaces. Feel the pulse of daily life, the rhythm of love and
            longing, and the echoes of wisdom passed down through generations.
          </div>
          <div className="space-y-2 px-8 py-2">
            This collection also explores the depth of religious contemplation,
            the solemnity of elegies for cities lost to conquest, and presents
            the final years of Al-Andalus through the eyes of its poets.
          </div>
          <div className="space-y-2 px-8 py-2">
            These translations breathe new life into ancient verses, allowing
            you to savor them as they were meant to be enjoyed – as lyrical
            works that sing to the soul. These translations have carefully been
            adapted so that the beauty of these poems can be appreciated as
            lyrical works even though they are in translation.
          </div>
        </div>
      </SectionLayout>

      {/* Product section */}
      <SectionLayout>
        <div className="m-auto space-y-2 p-8 lg:flex lg:w-[1000px] lg:flex-col lg:content-center lg:items-start">
          <Heading
            as="h2"
            intent="base-section"
            className="w-full text-center "
          >
            Introducing the poems
          </Heading>
          <div className="space-y-2 px-8 py-2">
            In the lands of Al-Andalus, now modern-day Spain and Portugal,
            history whispers through the narrow streets and ancient palaces. A
            thousand years ago, when this area was under Muslim rule, poetry
            thrived as a vital part of everyday life. This collection of freshly
            translated verses explores the different subjects of Arabic
            Andalusian poetry, spanning the history of this captivating region.
          </div>
          <div className="space-y-2 px-8 py-2">
            In this book, the poems are presented chronologically, but are also
            divided into three sections.
          </div>
          <div className="space-y-2 px-8 py-2">
            In the first section, we delve into the everyday life of Al-Andalus,
            as depicted by its poets. From the various cities bustling with
            activity to the serene gardens and palaces, their words paint a
            vivid picture of the vibrant society that flourished here. Love,
            wisdom, and spiritual yearning permeate their verses, reflecting the
            diverse experiences of the people who called this land home.
          </div>
          <Image
            src="/images/left.png"
            width={1250}
            height={1080}
            alt="promotion-card"
            className="m-auto h-auto w-full object-cover md:w-[300px]"
          />
          <div className="space-y-2 px-8 py-2">
            The second part of this collection is more sombre, and deals with
            religious poetry or poetry regarding the Arabic Andalusian
            perspective on death. These are thoughtful poems, considering sin
            and forgiveness, and the juxtaposition of an immortal soul within a
            mortal body.
          </div>
          <div className="space-y-2 px-8 py-2">
            Finally, in the third part of this collection we encounter the
            sombre elegies and poetic laments for cities and lands lost to
            conquest. Among the ruins of once-mighty fortresses, these verses
            mourn the passing of an era and the displacement of its people.
            These ultimately tell the story of the last years of Al-Andalus,
            before its final destruction at the fall of Granada in 1492.
          </div>
          <div className="space-y-2 px-8 py-2">
            Throughout the history of Al-Andalus, poetry was a poignant
            expression of the Andalusian experience. In the third part of this
            book we see the poignant end of Al-Andalus. In the verses of poets
            such as ar-Rundi, we glimpse the anguish and defiance of a people
            grappling with the loss of their homeland. Elegies mourned the fall
            of once-great cities like Cordoba and Seville, while odes celebrated
            the resilience of Al-Andalusian culture in the face of adversity.
            These poems served as both a lament for the past and a rallying cry
            for the future, capturing the spirit of a society struggling to
            preserve its identity in the midst of a seemingly endless war.
            Through their words, we bear witness to the profound impact of the
            Reconquista on the hearts and minds of those who lived through it,
            forever immortalized in the annals of Andalusian poetry.
          </div>
          <Image
            src="/images/right.png"
            width={1250}
            height={1080}
            alt="promotion-card"
            className="m-auto h-auto w-full object-cover md:w-[300px]"
          />
          <div className="space-y-2 px-8 py-2">
            The translation and adaptation of these poems has purposely been
            focused on keeping a lyrical feel to the lines, as it was not
            uncommon for Andalusian poetry to be originally set to music. Rhymes
            could also impart meaning; for example, some laments were written as
            nuniyyas, a type of poem where the final line would end with an ‘n’
            sound, intended as a mournful sounding rhyme. To this end, these
            poems have been translated as faithfully as possible, while also
            building a lyrical form for them in English - so the meaning is
            preserved, while the lines may not be translated exactly and
            literally as they appeared in their original Arabic. This was a
            trade off that had to be made to allow new rhymes to work in
            English, and has breathed new life into the often bland bones of
            translated works. Where possible, the original Arabic has been
            consulted to influence the rhyming scheme.
          </div>
          <div className="space-y-2 px-8 py-2">
            This collection of poems is an attempt to bridge the gap between
            past and present, connecting us to the rich heritage of Al-Andalus
            and the enduring power of poetry to transcend the ages. Through
            these translations, the voices and whispers of Al-Andalus, some of
            which fell silent over a thousand years ago, can still call out and
            touch our hearts today.
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
            <a href="/preorder" className="block py-1.5">
              <Button fontSize="sm" className="py-1.5 md:text-base">
                Pre-order
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Features section */}
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

      {/* Newsfeed section */}
      {/* <SectionLayout>
        <div className="space-y-10 px-8 py-10">
          <div className="space-y-4 text-center">
            <Text weight={700} transform="uppercase" color="gray">
              newsfeed
            </Text>
            <Heading as="h2" intent="base-section">
              Instagram
            </Heading>
            <Text size="sm">
              Follow us on social media for more discount & promotions
            </Text>
            <Text size="xl" weight={500} family="poppins" color="gray">
              @kupingplug_official
            </Text>
          </div>
        </div>
      </SectionLayout> */}
    </>
  );
}
