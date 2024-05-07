import ProductDesc from "@/components/section/about";
import Hero from "@/components/section/hero";
import Pricing from "@/components/section/pricing";



export default function Home() {
	return (
		<section className="flex flex-col  items-center justify-center gap-4 py-8 md:py-10">
			<Hero/>
			<ProductDesc/>
			<Pricing/>
		</section>
	);
}
