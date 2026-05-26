import { ContainerAbout } from "@/src/components/body/ContainerAbout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | GrafiKrea",
  description: "Compañia GrafiKrea | Nosotros",
};

export const AboutPage = () => {
  return (
    <div className="relative overflow-hidden min-h-screen px-10 py-20 bg-[#f6f9fc]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,95,165,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(55,138,221,0.08),transparent_55%)]" />

      <ContainerAbout />
    </div>
  );
};

export default AboutPage;
