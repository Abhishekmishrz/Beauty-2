import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ProductDetailsArea from "@/components/product-details/product-details-area";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "UrbanThali - Product Details Page",
};

export default function ProductDetailsPage({ params }) {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ProductDetailsArea id={params.id} />
      <UrbanThaliFooter />
    </Wrapper>
  );
}
