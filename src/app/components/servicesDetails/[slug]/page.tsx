import { generateStaticParamsForServices as fetchStaticParams} from "./static-params";
import ServicesDetails from "./details";

export function generateStaticParams() {
  return fetchStaticParams();
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params; // Await params before using it
  return <ServicesDetails slug={slug} />;
}