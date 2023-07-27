const Coin = ({ params }: { params: { coinId: string } }) => {
  return (
    <main className='flex-1 text-yellow-100'>
      <section className='container mx-auto'>Coin page {params.coinId}</section>
    </main>
  )
}

export default Coin;