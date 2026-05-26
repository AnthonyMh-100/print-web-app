"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const competencies = [
  {
    title: "Creatividad",
    desc: "Diseños únicos adaptados a cada marca y necesidad.",
  },
  {
    title: "Calidad",
    desc: "Impresión profesional con estándares altos de producción.",
  },
  {
    title: "Compromiso",
    desc: "Cumplimos tiempos y garantizamos resultados consistentes.",
  },
];

export const ContainerAbout = () => {
  return (
    <div className="relative max-w-6xl mx-auto space-y-20">
      <motion.div
        initial={{
          opacity: 0,
          y: 125,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <span className="text-xs tracking-[0.3em] text-[#185FA5] uppercase">
          Nosotros
        </span>

        <h1 className="text-5xl font-extrabold text-[#0c2340] leading-tight">
          Diseñamos, imprimimos y damos vida a tu marca
        </h1>

        <p className="text-[#5b6f85] text-sm max-w-2xl mx-auto leading-relaxed">
          Somos un estudio especializado en diseño gráfico, impresión
          profesional y producción de merchandising corporativo. Transformamos
          ideas en piezas visuales que comunican identidad y valor.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-[#0c2340]">
            Nuestra historia
          </h2>

          <p className="text-sm text-[#5b6f85] leading-relaxed">
            Nacimos con la idea de unir creatividad y producción real en un solo
            lugar. Con el tiempo, nos convertimos en aliados de marcas que
            buscan destacar a través del diseño y la calidad de sus materiales
            impresos.
          </p>

          <p className="text-sm text-[#5b6f85] leading-relaxed">
            Hoy trabajamos con empresas, emprendedores y agencias, ofreciendo
            soluciones completas desde la conceptualización hasta la entrega
            final del producto.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="bg-white border border-[#e6eef8] rounded-xl p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-[#185FA5]">500+</p>
              <p className="text-xs text-[#6b7f95]">Proyectos</p>
            </div>

            <div className="bg-white border border-[#e6eef8] rounded-xl p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-[#185FA5]">12+</p>
              <p className="text-xs text-[#6b7f95]">Años</p>
            </div>

            <div className="bg-white border border-[#e6eef8] rounded-xl p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-[#185FA5]">100%</p>
              <p className="text-xs text-[#6b7f95]">Calidad</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-4xl overflow-hidden shadow-2xl border border-white">
            <div className="absolute inset-0 bg-linear-to-t from-[#185FA5]/10 to-transparent z-10" />

            <Image
              src="/img/img-gf.png"
              alt="Nosotros Papiro"
              width={900}
              height={900}
              className="object-cover w-full h-130"
            />
          </div>

          <div className="absolute -bottom-6 left-6 bg-white shadow-lg border border-gray-100 rounded-xl px-4 py-3">
            <p className="text-xs text-[#6b7f95]">Equipo creativo</p>
            <p className="text-sm font-semibold text-[#0c2340]">
              Diseño & Producción
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {competencies.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-[#e6eef8] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold text-[#0c2340] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-[#5b6f85] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
