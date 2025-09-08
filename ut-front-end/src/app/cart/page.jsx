import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import CartArea from "@/components/cart-wishlist/cart-area";

export const metadata = {
  title: "Urban Thali",
};

export default function CartPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Shopping Cart" subtitle="Shopping Cart" />
      <CartArea />
      <UrbanThaliFooter />
    </Wrapper>
  );
}
