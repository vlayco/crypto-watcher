const Coin = ({ params }: { params: { coinId: string } }) => {
  return (
    <div>Coin Page {params.coinId}</div>
  )
}

export default Coin;