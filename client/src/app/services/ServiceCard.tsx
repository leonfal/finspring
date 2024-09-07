"use client";
import Link from "next/link";
import QuickView from "./quickview";
import { useState } from "react";
import Carousel from "@/components/carousel";
import { Button } from "@/components/(ui)/button";
import { Badge } from "@/components/(ui)/badge";

interface ProductImage {
  imageSrc: string;
  imageAlt: string;
}

interface Product {
  id: number;
  name: string;
  href: string;
  location: string;
  rating: number;
  price: string;
  images: ProductImage[]; // Array of images
}

const products: Product[] = [
  {
    id: 1,
    name: "Hemsidepaket",
    href: "#",
    location: "Umeå",
    rating: 4,
    price: "10 000 kr",
    images: [
      {
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
    ],
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    location: "Umeå",
    rating: 3,
    price: "14 999 kr",
    images: [
      {
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
    ],
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    location: "Umeå",
    rating: 4,
    price: "9000 kr",
    images: [
      {
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
          "Person using a pen to cross a task off a productivity paper card.",
      },
    ],
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    location: "Umeå",
    rating: 2,
    price: "16 000 kr",
    images: [
      {
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
          "Hand holding black machined steel mechanical pencil with brass tip and top.",
      },
    ],
  },
  {
    id: 5,
    name: "Artifact Vase",
    href: "#",
    location: "Stockholm",
    rating: 5,
    price: "7 500 kr",
    images: [
      {
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg",
        imageAlt:
          "Ceramic vase with intricate details and a modern, minimalist design.",
      },
    ],
  },
  {
    id: 6,
    name: "Leatherbound Notebook",
    href: "#",
    location: "Gothenburg",
    rating: 5,
    price: "3 200 kr",
    images: [
      {
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg",
        imageAlt:
          "Elegant leatherbound notebook with a ribbon bookmark and smooth paper.",
      },
    ],
  },
  {
    id: 7,
    name: "Vintage Desk Lamp",
    href: "#",
    location: "Malmö",
    rating: 2,
    price: "11 000 kr",
    images: [
      {
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg",
        imageAlt:
          "Brass vintage desk lamp with an adjustable arm and a classic design.",
      },
    ],
  },
  {
    id: 8,
    name: "Wall Clock",
    href: "#",
    location: "Lund",
    rating: 1,
    price: "4 500 kr",
    images: [
      {
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg",
        imageAlt:
          "Minimalist wall clock with a sleek design and silent mechanism.",
      },
    ],
  },
  {
    id: 9,
    name: "Sculpted Bowl",
    href: "#",
    location: "Uppsala",
    rating: 4,
    price: "8 000 kr",
    images: [
      {
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Handcrafted bowl with a unique sculpted design and matte finish.",
      },
    ],
  },
  {
    id: 10,
    name: "Ceramic Mug Set",
    href: "#",
    location: "Linköping",
    rating: 3,
    price: "6 500 kr",
    images: [
      {
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg",
        imageAlt:
          "Set of ceramic mugs with a glossy finish and ergonomic handle.",
      },
      {
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Handcrafted bowl with a unique sculpted design and matte finish.",
      },
    ],
  },
];

export default function Services() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col border border-gray-300 rounded-lg p-4"
            >
              {/* Avatar and Company Name */}
              <div className="flex items-center mb-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="inline-block h-24 w-24 rounded-md"
                />
                <div className="flex flex-col ml-3 items-ce">
                  <span className="mb-2 text-lg font-semibold text-gray-900 text-left">
                    {product.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                        />
                      </svg>

                      <span className="text-gray-500 text-sm">Webbyrå</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      <span className="text-gray-500 text-sm">
                        50 anställda
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    <Badge color="indigo">Umeå</Badge>
                    <Badge color="yellow">$$-$$$</Badge>
                    <Badge color="green">Info</Badge>
                  </div>
                </div>
              </div>

              {/* Product Image */}
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 flex-shrink-0">
                  <Carousel slides={product.images} />
                </div>

                {/* Product Details */}
                <div className="w-2/3 pl-4 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      <Link href={`/services/${product.id}`}>
                        <span>{product.name}</span>
                      </Link>
                    </h3>
                    <div className="flex items-center mt-2">
                      <span className="text-gray-900 font-bold text-sm">
                        5.0
                      </span>
                      <span className="text-gray-500 text-sm ml-2">
                        (303 reviews)
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Our agency will build grow membership community
                      subscriptions...
                    </p>
                    <ul className="mt-2 text-sm text-gray-500">
                      <li>✓ Zero upfront payments</li>
                      <li>✓ Work first pay later</li>
                      <li>✓ Fastest work delivery</li>
                    </ul>
                  </div>
                  <p className="text-lg font-medium text-gray-900 mt-4">
                    Från {product.price}
                  </p>
                </div>
              </div>
              {/* Quick View Button */}
              <div className="flex absolute top-2 right-2">
                <Button onClick={() => handleQuickView(product)} outline>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  Snabbvy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <QuickView product={selectedProduct} open={open} setOpen={setOpen} />
      )}
    </div>
  );
}
