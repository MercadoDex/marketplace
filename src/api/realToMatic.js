import axios from "axios";

async function getPriceMatic() {
  let priceMatic;

  await axios
    .get(
      "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=brl&precision=2"
    )
    .then((res) => {
      priceMatic = res.data["matic-network"].brl;
    });

  return priceMatic;
}

export default async function convertPrice(brlPrice) {
  const priceInMatic = brlPrice / (await getPriceMatic());
  return priceInMatic;
}
