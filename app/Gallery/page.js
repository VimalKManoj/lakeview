import React from "react";
import FishCard from "../components/FishCard";
import { Poppins } from "next/font/google";
import GalleryHeader from "../components/GalleryHeader";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const page = () => {
  const products = [
    {
      id: 1,
      image: "/images/1.jpg",
      name: "...",
      price: 25,
      description:
        "A vibrant and iconic species known for its orange and white stripes.",
    },
    {
      id: 2,
      image: "/images/2.jpg",
      name: "Tuxedo Angelfish",
      price: 40,
      description:
        "Tuxedo Angelfish are a stunning and elegant addition to any community tank. Their unique coloration, coupled with their peaceful nature, makes them a popular choice among aquarists. They require a well-maintained environment with suitable tank mates to thrive and display their best colors and behaviors.",
    },
    {
      id: 3,
      image: "/images/3.jpg",
      name: "Clown Knife Fish",
      price: 55,
      description:
        "The Clown Knife Fish is a fascinating and unique species, known for its distinctive appearance and large size. However, they are best suited for experienced aquarists who can provide the large, well-maintained tank they require. They can be a centerpiece in a large aquarium, but their predatory nature and special needs must be carefully considered..",
    },
    {
      id: 4,
      image: "/images/4.jpg",
      name: "Indonesian Tiger Fish",
      price: 15,
      description:
        "The Indonesian Tiger Fish is a stunning and predatory species that requires a large, well-maintained aquarium. They are best suited for experienced aquarists who can provide the space, diet, and care they need to thrive. Their striking appearance and unique behavior make them a centerpiece in any large, predator themed aquarium.",
    },
    {
      id: 5,
      image: "/images/5.jpg",
      name: "Red Spotted Severum",
      price: 10,
      description:
        "The Red Spotted Severum is a popular freshwater fish among aquarium enthusiasts, known for its vibrant colors and distinctive spots.",
    },
    {
      id: 6,
      image: "/images/6.jpg",
      name: "Guianacara Cichlids",
      price: 65,
      description:
        "Guianacara cichlids are a delightful choice for aquarists who appreciate cichlids but prefer a more peaceful species. Their modest size, beautiful coloration, and interesting behavior make them a popular choice for both beginners and experienced hobbyists",
    },
    {
      id: 7,
      image: "/images/7.jpg",
      name: "Albino Red Head Tapajos",
      price: 50,
      description:
        "The Albino Red Head Tapajos is a beautiful and engaging species, ideal for those who want to add a touch of color and activity to their aquarium. Their peaceful nature, combined with their stunning appearance, makes them a favorite among cichlid enthusiasts.",
    },
    {
      id: 8,
      image: "/images/8.jpg",
      name: "Montecristo Cichlids",
      price: 35,
      description:
        "Montecristo Cichlids are a stunning and powerful species, ideal for experienced aquarists who are familiar with keeping large, aggressive cichlids. Their striking appearance and bold behavior make them a centerpiece in any large aquarium, but they require careful management of tank mates and environment to thrive.",
    },
    {
      id: 9,
      image: "/images/9.jpg",
      name: "Banded Tilapia",
      price: 5,
      description:
        "Banded Tilapias are hardy and adaptable, making them suitable for experienced aquarists who have the space and resources to manage large, semi-aggressive cichlids. Their striking banded pattern and robust nature make them an interesting addition to large, well-maintained aquariums.",
    },
    {
      id: 10,
      image: "/images/10.jpg",
      name: "Platinum Angelfish",
      price: 45,
      description:
        "Platinum Angelfish are a beautiful and elegant addition to any community tank. Their striking appearance and relatively peaceful nature make them a popular choice among aquarists. They require a well-maintained environment with suitable tank mates to thrive and display their best coloration and behavior.",
    },
    {
      id: 11,
      image: "/images/11.jpg",
      name: "Electric Blue Jack Dempsey",
      price: 30,
      description:
        "The Electric Blue Jack Dempsey is a stunning and hardy cichlid, perfect for those looking to add a splash of color to their aquarium. While they are more peaceful than the standard Jack Dempsey, they still require careful consideration of tank mates and environment to thrive.",
    },
    {
      id: 12,
      image: "/images/12.jpg",
      name: "Red Head Tapajos",
      price: 8,
      description:
        "The Red Head Tapajos is a stunning and relatively peaceful cichlid, ideal for those who want to add color and activity to their aquarium. Their unique feeding behavior, combined with their vibrant appearance, makes them a favorite among cichlid enthusiasts.",
    },
    {
      id: 13,
      image: "/images/13.jpg",
      name: "Escondido Cichlid",
      price: 60,
      description:
        "The Escondido Cichlid is a stunning and dynamic addition to any large cichlid tank, especially for hobbyists who appreciate the vibrant coloration and assertive behavior of larger cichlids. They require careful consideration of tank mates and environment to display their best colors and behaviors.",
    },
    {
      id: 14,
      image: "/images/14.jpg",
      name: "Rotkiel Severum",
      price: 3,
      description:
        "The Rotkeil Severum is a stunning and relatively peaceful cichlid, ideal for hobbyists who want a colorful and engaging fish without the aggression often associated with cichlids. Their vibrant coloration, combined with their manageable size and temperament, makes them a popular choice for both community and species-specific aquariums.",
    },
    {
      id: 15,
      image: "/images/15.jpg",
      name: "True Parrot Cichlid",
      price: 70,
      description:
        "The True Parrot Cichlid is a stunning and relatively rare species in the aquarium hobby. They are best suited for experienced aquarists who can provide the large, well-maintained environment these fish require. Their unique appearance, combined with their interesting behavior, makes them a rewarding species for those who appreciate large, showy cichlids..",
    },
    {
      id: 16,
      image: "/images/16.jpg",
      name: "Menarambo Fish",
      price: 30,
      description:
        "The Menarambo Fish, or Pinstripe Damba, is a unique and relatively peaceful cichlid that is best suited for experienced aquarists. They require a large, well maintained environment with suitable tank mates to thrive. Their distinct appearance and social behavior make them a rewarding species for those interested in the unique cichlids of Madagascar.",
    },
    {
      id: 17,
      image: "/images/17.jpg",
      name: "...",
      price: 8,
      description:
        "A small, schooling fish, perfect for adding movement to your tank.",
    },
    {
      id: 18,
      image: "/images/18.jpg",
      name: "Ekola Frontosa",
      price: 60,
      description:
        "The Ekola Frontosa is a stunning and relatively peaceful cichlid that is best suited for experienced aquarists who can provide the large, stable environment they require. Their unique appearance and social behavior make them a favorite among cichlid enthusiasts",
    },
    {
      id: 19,
      image: "/images/19.jpg",
      name: "...",
      price: 3,
      description:
        "An excellent addition to any tank, known for its cleaning abilities.",
    },
    {
      id: 20,
      image: "/images/20.jpg",
      name: "Ghost Lobster",
      price: 70,
      description:
        "The Ghost Lobster is an interesting and hardy invertebrate that can add a unique dynamic to a freshwater aquarium. However, due to their territorial nature and potential for aggression, they require careful consideration regarding tank mates and tank setup.",
    },
  ];

  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center xl:p-12 2xl:p-24 w-full">
        <GalleryHeader />
        <div className="z-10  w-full items-center justify-center text-sm lg:flex flex-col ">
          <h2
            className={`${poppins.className} xl:text-5xl 2xl:text-6xl font-semibold xl:p-14 2xl:p-6 2xl:mb-2`}
          >
            Marine Marvels: A Gallery of Fish Species
          </h2>
          <h2 className="w-full px-20 mb-10 text-2xl font-light ">
            Discover the stunning diversity of marine life in our carefully
            curated gallery, featuring rare and exotic fish species from around
            the world. Let these vibrant aquatic wonders inspire your next
            aquarium masterpiece.
          </h2>
          <div className="flex w-full flex-wrap justify-center items-center gap-2 2xl:gap-5">
            {products.map((product) => {
              return (
                <FishCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
