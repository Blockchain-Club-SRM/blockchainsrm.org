import Image from 'next/image';
const partners = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="mb-24">Our Partners</h1>
      <div className="flex flex-col md:flex-row gap-24 justify-evenly">
        <Image width={144} height={202} src={'/images/partners/Tezos.png'} />
        <Image width={184} height={188} src={'/images/partners/Moralis.png'} />
      </div>
    </div>
  );
};

export default partners;