"use client";

import { motion } from "motion/react";
import Image from "next/image";

export const BodyMain = () => {
  return (
    <div className="relative overflow-hidden min-h-175 px-10 py-20 bg-[#f6f9fc]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,95,165,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(55,138,221,0.10),transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-xs tracking-[0.35em] text-[#185FA5] uppercase">
              Estudio creativo
            </span>

            <h1 className="text-5xl font-extrabold text-[#0c2340] leading-[1.05]">
              Diseñamos marcas
              <br />
              que <span className="text-[#185FA5]">se ven</span> y se sienten
              <br />
              en el mundo real
            </h1>

            <p className="text-[#5b6f85] text-sm leading-relaxed max-w-md">
              Convertimos ideas en identidad visual, impresión profesional y
              productos físicos que representan la esencia de tu marca con
              impacto real.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-[#185FA5] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:scale-[1.03] transition">
              Cotizar proyecto
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6">
            <div>
              <p className="text-2xl font-bold text-[#185FA5]">500+</p>
              <p className="text-xs text-[#6b7f95]">Proyectos</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#185FA5]">12+</p>
              <p className="text-xs text-[#6b7f95]">Años</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#185FA5]">48h</p>
              <p className="text-xs text-[#6b7f95]">Entrega</p>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <div className="flex items-center gap-2 text-sm text-[#3a5068]">
              <span className="w-2 h-2 bg-[#185FA5] rounded-full" />
              Diseño gráfico profesional para marcas modernas
            </div>

            <div className="flex items-center gap-2 text-sm text-[#3a5068]">
              <span className="w-2 h-2 bg-[#185FA5] rounded-full" />
              Impresión de alta calidad en todo tipo de formatos
            </div>

            <div className="flex items-center gap-2 text-sm text-[#3a5068]">
              <span className="w-2 h-2 bg-[#185FA5] rounded-full" />
              Producción visual lista para impacto comercial
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white group">
            <div className="absolute inset-0 bg-linear-to-tr from-[#185FA5]/15 to-transparent z-10" />

            <Image
              src="/img/img-gf.png"
              alt="Papiro diseño"
              width={900}
              height={900}
              className="w-full h-130 object-cover group-hover:scale-105 transition duration-700"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
