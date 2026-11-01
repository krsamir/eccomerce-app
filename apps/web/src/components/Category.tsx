import type { FC } from "react"

interface Category {
  name: string
  image: string
}

const topCategories: Category[] = [
  {
    name: "Paan Corner",
    image: "/categories/paan-corner.png",
  },
  {
    name: "Dairy, Bread\n& Eggs",
    image: "/categories/dairy-bread-eggs.png",
  },
  {
    name: "Fruits &\nVegetables",
    image: "/categories/fruits-vegetables.png",
  },
  {
    name: "Cold Drinks\n& Juices",
    image: "/categories/cold-drinks-juices.png",
  },
  {
    name: "Snacks &\nMunchies",
    image: "/categories/snacks-munchies.png",
  },
  {
    name: "Breakfast &\nInstant Food",
    image: "/categories/breakfast-instant-food.png",
  },
  {
    name: "Sweet\nTooth",
    image: "/categories/sweet-tooth.png",
  },
  {
    name: "Bakery &\nBiscuits",
    image: "/categories/bakery-biscuits.png",
  },
  {
    name: "Tea, Coffee &\nMilk Drinks",
    image: "/categories/tea-coffee-milk.png",
  },
  {
    name: "Atta, Rice\n& Dal",
    image: "/categories/atta-rice-dal.png",
  },
  {
    name: "Masala, Oil\n& More",
    image: "/categories/masala-oil.png",
  },
  {
    name: "Sauces &\nSpreads",
    image: "/categories/sauces-spreads.png",
  },
  {
    name: "Chicken, Meat\n& Fish",
    image: "/categories/chicken-meat-fish.png",
  },
  {
    name: "Organic &\nHealthy Living",
    image: "/categories/organic-healthy.png",
  },
  {
    name: "Baby\nCare",
    image: "/categories/baby-care.png",
  },
  {
    name: "Pharma &\nWellness",
    image: "/categories/pharma-wellness.png",
  },
  {
    name: "Cleaning\nEssentials",
    image: "/categories/cleaning-essentials.png",
  },
  {
    name: "Home &\nOffice",
    image: "/categories/home-office.png",
  },
  {
    name: "Personal\nCare",
    image: "/categories/personal-care.png",
  },
  {
    name: "Pet\nCare",
    image: "/categories/pet-care.png",
  },
]

const CategoryCard: FC<{ category: Category }> = ({ category }) => {
  return (
    <button
      type="button"
      className="group flex shrink-0 flex-col items-center rounded-xl text-center transition-transform duration-200 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <div className="flex h-[88px] w-[88px] items-center justify-center overflow-hidden rounded-xl bg-[#f2f6ff] sm:h-[96px] sm:w-[96px] lg:h-[104px] lg:w-[104px]">
        <img
          src={category.image}
          alt={category.name.replace("\n", " ")}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
        />
      </div>

      <span className="mt-3 text-[13px] leading-[18px] font-medium whitespace-pre-line text-foreground sm:text-sm">
        {category.name}
      </span>
    </button>
  )
}

const CategoriesSection: FC = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid scrollbar-none grid-flow-col grid-rows-2 gap-x-5 gap-y-8 overflow-x-auto py-2 pb-5 sm:gap-x-7 lg:grid-flow-row lg:grid-cols-10 lg:gap-x-6 lg:gap-y-9 lg:overflow-visible">
          {topCategories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

const CategoryFooter: FC = () => {
  return (
    <div className="w-full bg-background">
      <CategoriesSection />
    </div>
  )
}

export default CategoryFooter
