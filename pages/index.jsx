import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import dynamic from "next/dynamic";

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: false, loading: () => <div style={{ minHeight: "200px" }} /> }
);
const CTA = dynamic(() => import("@/components/sections/CTA"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "200px" }} />,
});

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
