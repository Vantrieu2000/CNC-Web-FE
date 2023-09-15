import { useRouter } from "next/router";

interface CategoryProps {
  category?: any;
}

export const Categories = (props: CategoryProps) => {
  const { category } = props;
  const router = useRouter();
  return (
    <div className="category-container">
      <div className="category-container_header">
        <div className="category-container_header-title">
          <span>{category?.name}</span>
        </div>
      </div>
      <div className="category-container_content">
        <div className="content-left"></div>
        <div className="content-right">
          {category?.product?.slice(0, 8)?.map((product) => {
            return (
              <div
                className="content-right-item"
                onClick={() => {
                  router.push(`/product/${product?.id}`);
                }}
              >
                <div className="content-right-item-image">
                  <img src={`${process.env.API_BASE_URL}${product.image[0].image}`} alt="" width={"100%"} />
                </div>
                <div className="content-right-item-content">
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">{product.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
