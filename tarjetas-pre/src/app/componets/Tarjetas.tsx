"use client"
import React, { useEffect, useState } from 'react'

export default function Tarjetas() {

const [listaUsuarios, setListaUsuarios] = useState<Array<InterPersonas>>([]);

  useEffect(() => {
    const usuarios: InterPersonas[] = [
      { nombre: "Ale", ocupacion: "Ingeniero", pais: "Colombia" },
      { nombre: "Maria", ocupacion: "Ingeniera", pais: "México" },
      { nombre: "Pedro", ocupacion: "Programador", pais: "Argentina" },
      { nombre: "Ana", ocupacion: "Diseñadora", pais: "España" },
      { nombre: "Luis", ocupacion: "Arquitecto", pais: "Perú" },
    ];

    setListaUsuarios(usuarios);
  }, []);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {listaUsuarios.map((persona) => (
                <div
                    key={persona.nombre}
                    className="w-full max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg"
                >
                    <div className="bg-white p-6 rounded-md">
                        <h2 className="font-bold text-xl mb-2 text-black">
                         Nombre: {persona.nombre}
                        </h2>
                        <p className="text-black">Ocupación: {persona.ocupacion}</p>
                        <p className="text-black">País: {persona.pais}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}