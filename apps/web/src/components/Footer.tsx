import type { FC } from "react"

interface FooterColumnProps {
  items: string[]
}

const usefulLinks: string[][] = [
  ["Blog", "Privacy", "Terms", "FAQs", "Security", "Contact"],
  ["Partner", "Franchise", "Seller", "Warehouse", "Deliver", "Resources"],
  [
    "Recipes",
    "Bistro",
    "District",
    "Blinkit Ambulance",
    "Feeding India",
    "Eternal SBI Credit Card",
  ],
]

const footerCategories: string[][] = [
  [
    "Bath & Body",
    "Beauty & Cosmetics",
    "Health & Pharma",
    "Atta, Rice & Dal",
    "Bakery & Biscuits",
    "Kitchenware & Appliances",
    "Drinks & Juices",
    "Sauces & Spreads",
    "Home & Lifestyle",
    "Stationery & Games",
  ],
  [
    "Hair",
    "Feminine Hygiene",
    "Sexual Wellness",
    "Oil, Ghee & Masala",
    "Dry Fruits & Cereals",
    "Chips & Namkeen",
    "Tea, Coffee & Milk Drinks",
    "Paan Corner",
    "Cleaners & Repellents",
    "Print Store",
  ],
  [
    "Skin & Face",
    "Baby Care",
    "Vegetables & Fruits",
    "Dairy, Bread & Eggs",
    "Chicken, Meat & Fish",
    "Sweets & Chocolates",
    "Instant Food",
    "Ice Creams & More",
    "Electronics",
    "E-Gift Cards",
  ],
]

const FooterColumn: FC<FooterColumnProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item) => (
        <a
          key={item}
          href="#"
          className="text-sm leading-5 text-muted-foreground transition-colors hover:text-foreground"
        >
          {item}
        </a>
      ))}
    </div>
  )
}

const Footer: FC = () => {
  return (
    <footer className="mt-12 border-t border-border/60 bg-background">
      <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
          {/* Useful Links */}
          <section>
            <h2 className="mb-6 text-lg font-semibold">Useful Links</h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-3">
              {usefulLinks.map((column, index) => (
                <FooterColumn key={index} items={column} />
              ))}
            </div>
          </section>

          {/* Categories */}
          <section>
            <div className="mb-6 flex items-center gap-4">
              <h2 className="text-lg font-semibold">Categories</h2>

              <a
                href="#"
                className="text-sm font-medium text-green-600 transition-colors hover:text-green-700"
              >
                see all
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
              {footerCategories.map((column, index) => (
                <FooterColumn key={index} items={column} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer
