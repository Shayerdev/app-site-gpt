import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";

export default function Home() {
  return (
      <>
        <section className={'banner'}>
            <Heading title={'Your Awesome Collection Prompts.'} tag={'h1'}/>
            <Paragraph text={'Create and save your best prompts.'} type={'big'}/>
        </section>
      </>
  )
}
