import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";
import OrderArea from "@/components/order/order-area";

export const metadata = {
  title: "UrbanThali - Order Page",
};

export default function OrderPage({ params }) {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <OrderArea orderId={params.id} />
      <UrbanThaliFooter />
    </Wrapper>
  );
}
