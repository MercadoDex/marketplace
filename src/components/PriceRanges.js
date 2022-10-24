import { Space, InputNumber} from "antd";
import "../components/PriceRanges.css"

function PriceRanges({priceMin, setPriceMin, priceMax, setPriceMax}) {

    function changePrice(min,max){
        setPriceMin(min);
        setPriceMax(max);
    }

return (
<>
<h2>
    Faixas de preço
</h2>
<p className="prices" onClick={() => changePrice(0,5)}>Menos de $5</p>
<p className="prices" onClick={() => changePrice(5,10)}>Entre $5 e $10</p>
<p className="prices" onClick={() => changePrice(10,20)}>Entre $10 e $20</p>
<p className="prices" onClick={() => changePrice(20,100)}>$20 ou mais</p>
<Space>
<InputNumber
  value={priceMin}
  formatter={value => `$ ${value}`}
  onChange={(value) => changePrice(value,priceMax)}
/>
<InputNumber
  value={priceMax}
  formatter={value => `$ ${value}`}
  onChange={(value) => changePrice(priceMin,value)}
/>
</Space>
<br/>
<br/>
</>
)
}

export default PriceRanges