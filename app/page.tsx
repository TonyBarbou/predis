import HomeAccordion from "./HomeAccordion/page"

export default function Home() {
  return (
    <div className="bg-black flex flex-col flex-wrap content-center">
      <h1 className="text-center pt-20 text-4xl font-bold">Start predicting with Predis</h1>
      <h3 className="text-center mt-10 text-xl">Only a few steps to get started</h3>
      <div className="mt-[70px] w-5/12 min-w-[400px] max-[600px]:w-11/12">
        <HomeAccordion/>
      </div>
    </div>
  );
}
