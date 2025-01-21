import { generateStaticParams as fetchStaticParams } from "./static-params";
import Details from "./Details";

export function generateStaticParams() {
  return fetchStaticParams();
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params; // Await params before using it
  return <Details slug={slug} />;
}