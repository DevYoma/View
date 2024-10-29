import "./Price.scss"

type PriceProp = {
    amount: string; 
    styles?: React.CSSProperties
}

const Price = ({ amount, styles }: PriceProp) => {
  return (
    <div className="price">
      <small style={styles}>$</small>
      <span style={styles}>{amount}</span>
      <small style={styles}>/Annual</small>
    </div>
  );
}

export default Price