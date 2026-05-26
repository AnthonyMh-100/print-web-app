import { ContainerContacts } from "@/src/components/body/ContainerContacts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactos | GrafiKrea",
  description: "Compañia GrafiKrea | Contactos",
};

export const ContactsPage = () => {
  return (
    <div className="relative overflow-hidden min-h-screen px-10 py-20 bg-[#f6f9fc]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,95,165,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(55,138,221,0.08),transparent_55%)]" />

      <ContainerContacts />
    </div>
  );
};

export default ContactsPage;
