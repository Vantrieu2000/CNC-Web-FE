import { api } from "@/api/index";
import { CustomHandleError, CustomHandleSuccess } from "@/api/responseHandler";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Page } from "lib/layout/Page";
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isFetching } = useQuery(
    ["getDetailProduct", slug],
    async () => {
      return await api.Product.getDetailProduct(slug);
    },
    {
      onSuccess: () => {},
      onError: () => {},
      enabled: !!slug,
    }
  );

  if (isFetching) return <LoadingScreen />;

  return data && <div className="my-4"></div>;
};

export default Page(Product, "InnerLayout", "product", "public");
