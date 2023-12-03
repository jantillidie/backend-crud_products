import useSWR from "swr";
import { StyledHeading, StyledList } from "./ProductList.styled";
import { StyledLink } from "../Link/Link.styled";

export default function ProductList() {
  const { data, error, isLoading } = useSWR("/api/products");

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading data</h1>;
  if (!data) return <h1>No data available</h1>;

  if (!Array.isArray(data)) {
    return <div>Invalid data format</div>;
  }
  return (
    <>
      <StyledHeading>Available Fishes</StyledHeading>
      <StyledList>
        {data.map((product) => (
          <li key={product._id}>
            <StyledLink href={`/${product._id}`}>{product.name}</StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  );
}
