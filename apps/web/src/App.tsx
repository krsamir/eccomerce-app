import { CategoryListingPage } from "./components/catalog/CategoryListingPage"
import Category from "./components/Category"
import { saucesPage, babyCarePage, vegetablesPage } from "@/data/catalog"
import { greenCapsicumPageData } from "@/data/product"
import Footer from "./components/Footer"
import { ProductDetailsPage } from "./components/product/ProductDetailsPage"

export function App() {
  return (
    <>
      <ProductDetailsPage
        data={greenCapsicumPageData}
        onAddToCart={(product) => {
          console.log("Add product:", product.id)
        }}
        onProductClick={(product) => {
          console.log("Open product:", product.slug)
        }}
        onVariantChange={(product, variant) => {
          console.log("Variant changed:", product.id, variant.id)
        }}
      />
      <Category />
      <CategoryListingPage
        config={saucesPage}
        onAddToCart={(product) => {
          console.log("Add:", product)
        }}
      />
      <CategoryListingPage
        config={vegetablesPage}
        onAddToCart={(product) => {
          console.log("Add:", product)
        }}
      />
      <CategoryListingPage
        config={babyCarePage}
        onAddToCart={(product) => {
          console.log("Add:", product)
        }}
      />
      <Footer />
    </>
  )
}
