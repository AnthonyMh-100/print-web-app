"use client";

import React from "react";
import { motion } from "motion/react";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";

export const ContainerContacts = () => {
  return (
    <div className="relative max-w-6xl mx-auto space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <span className="text-xs tracking-[0.3em] text-[#185FA5] uppercase">
          Contacto
        </span>

        <h1 className="text-5xl font-extrabold text-[#0c2340] leading-tight">
          Hablemos de tu próximo proyecto
        </h1>

        <p className="text-[#5b6f85] text-sm max-w-2xl mx-auto leading-relaxed">
          Cuéntanos tu idea y te ayudamos a convertirla en diseño, impresión o
          producto físico con calidad profesional.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-[#e6eef8] shadow-xl rounded-2xl p-8 space-y-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-[#0c2340]">
              Envíanos un mensaje
            </h2>
            <p className="text-sm text-[#5b6f85]">
              Te responderemos en menos de 24 horas.
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-3 rounded-xl border border-[#e6eef8] outline-none focus:border-[#185FA5] text-sm"
            />

            <input
              type="email"
              placeholder="Correo"
              className="w-full px-4 py-3 rounded-xl border border-[#e6eef8] outline-none focus:border-[#185FA5] text-sm"
            />

            <input
              type="text"
              placeholder="Asunto"
              className="w-full px-4 py-3 rounded-xl border border-[#e6eef8] outline-none focus:border-[#185FA5] text-sm"
            />

            <textarea
              placeholder="Mensaje"
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-[#e6eef8] outline-none focus:border-[#185FA5] text-sm resize-none"
            />

            <button className="w-full bg-[#185FA5] text-white py-3 rounded-xl font-semibold text-sm hover:scale-[1.02] transition shadow-md">
              Enviar mensaje
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="bg-white border border-[#e6eef8] rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0c2340] mb-2">
              Información de contacto
            </h3>

            <div className="space-y-3 text-sm text-[#5b6f85]">
              <p className="flex items-center gap-2">
                <IoLocationOutline className="text-[#185FA5]" />
                Perú
              </p>

              <p className="flex items-center gap-2">
                <IoCallOutline className="text-[#185FA5]" />
                +51 999 999 999
              </p>

              <p className="flex items-center gap-2">
                <IoMailOutline className="text-[#185FA5]" />
                contacto@print.com
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#e6eef8] rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0c2340] mb-3">
              Horario de atención
            </h3>

            <div className="text-sm text-[#5b6f85] space-y-1">
              <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
              <p>Sábados: 9:00 AM - 1:00 PM</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>

          <div className="bg-white border border-[#e6eef8] rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0c2340] mb-3">
              Respuesta rápida
            </h3>

            <p className="text-sm text-[#5b6f85] leading-relaxed">
              Nuestro equipo responde consultas de diseño, impresión y
              cotizaciones en menos de 24 horas hábiles.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
