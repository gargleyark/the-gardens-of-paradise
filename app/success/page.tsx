// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Heading from "@/ui/head";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero section */}

      <>
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
              Success!
            </Heading>
          </div>
        </SectionLayout>

        <SectionLayout>
          <div className="m-auto p-8 lg:flex lg:w-[1000px] lg:flex-col lg:content-center lg:items-center">
            <Heading
              as="h2"
              intent="base-section"
              className="text-center md:text-left"
              id="pre-order"
            >
              Your order has been placed.
            </Heading>

            <div className="space-y-2 px-8 py-2">
              Thank you for ordering <em>The Gardens of Paradise</em>, we hope
              you read it with as much joy and interest as has gone into
              translating it.
            </div>
          </div>
        </SectionLayout>
        <SectionLayout>
          <div className="mx-auto space-y-6 p-8 lg:space-y-16">
            <div className="grid grid-cols-1 gap-8 lg:m-auto lg:w-[600px] lg:grid-cols-2">
              <div className="relative h-full w-full">
                <Image
                  alt="front cover of The Gardens of Paradise book"
                  src="/images/the-gardens-of-paradise.jpg"
                  className="m-auto object-contain md:w-1/2 lg:w-full"
                  width={896}
                  height={1271}
                  priority
                />
              </div>

              <div className="mx-auto max-w-[420px] md:max-w-[520px] lg:flex lg:max-w-none lg:flex-col lg:justify-center">
                <div className="space-y-4 border-b border-[#E8ECEF] pb-6">
                  {/* <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                  </div>

                  <span className="font-inter text-xs font-normal text-[#141718]">
                    11 Reviews
                  </span>
                </div> */}

                  <h1 className="font-small font-poppins text-[26px] text-[#141718]">
                    The Gardens of Paradise
                  </h1>
                </div>

                <div className="space-y-3 border-b border-[#E8ECEF] py-6">
                  <p className="font-small font-inter text-base text-[#343839]">
                    Launch date June 2024 - Your book will be shipped as soon as
                    it is ready.
                  </p>{" "}
                </div>
              </div>
            </div>

            {/* <ProductTab tabs={product.tabs} /> */}
          </div>
        </SectionLayout>
      </>

      {/* Product section */}
    </main>
  );
}
