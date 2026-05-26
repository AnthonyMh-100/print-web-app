"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const servicesInfo = [
  {
    title: "Identidad visual y branding",
    desc: "Creamos sistemas de marca completos que definen cómo te perciben.",
    items: ["Logotipo", "Manual de marca", "Colores", "Tipografía"],
    images: ["/img/img-1.jpg", "/img/img-2.jpg"],
    reverse: false,
  },
  {
    title: "Diseño gráfico publicitario",
    desc: "Piezas visuales que comunican y generan impacto inmediato.",
    items: ["Flyers", "Posters", "Social media", "Editorial"],
    images: ["/img/img-3.jpg", "/img/img-4.jpg"],
    reverse: true,
  },
  {
    title: "Impresión profesional",
    desc: "Material físico con acabados de alta calidad.",
    items: ["Tarjetas", "Hojas membretadas", "Catálogos", "Papelería"],
    images: ["/img/img-5.jpg", "/img/img-6.jpg"],
    reverse: false,
  },
];

export const ContainerService = () => {
  return (
    <div className="relative max-w-6xl mx-auto space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <span className="text-xs tracking-[0.3em] text-[#185FA5] uppercase">
          Servicios
        </span>

        <h1 className="text-5xl font-extrabold text-[#0c2340] leading-tight">
          Soluciones creativas con resultados reales
        </h1>

        <p className="text-[#5b6f85] text-sm max-w-2xl mx-auto">
          Diseño, impresión y producción visual acompañados de trabajo real
          entregado a clientes.
        </p>
      </motion.div>

      <div className="space-y-16">
        {servicesInfo.map((service) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
              service.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-[#0c2340]">
                {service.title}
              </h2>

              <p className="text-sm text-[#5b6f85] leading-relaxed">
                {service.desc}
              </p>

              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#3a5068]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#185FA5] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {service.images.map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden border border-white shadow-lg group"
                >
                  <Image
                    src={img}
                    alt="work"
                    width={400}
                    height={400}
                    className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
