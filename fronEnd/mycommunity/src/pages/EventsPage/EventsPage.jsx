import React from 'react'
import { CalendarIcon, MapPinIcon, PlusIcon, UsersIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import myComImage from '../../assets/img/myComImage.svg'





const EventsPage = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Listado de Eventos</h1>
        <Link to="/registro">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Nuevo Evento
          </Button>
        </Link>
      </div>

     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card text-card-foreground shadow">
            <div className="relative h-48 w-full bg-muted">
              <img
                src={myComImage}
                alt={`Evento ${i + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                {i % 3 === 0 ? "Cultural" : i % 3 === 1 ? "Deportivo" : "Social"}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Evento Comunitario {i + 1}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                Descripción breve del evento comunitario que se realizará en la localidad.
              </p>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>
                    {15 + i} de Mayo, 2025 - {17 + (i % 3)}:00
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="mr-2 h-4 w-4" />
                  <span>Centro Comunitario Local</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="mr-2 h-4 w-4" />
                  <span>Organizado por: Asociación Vecinal</span>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                {/* <Link to={``}>
                  <Button variant="outline" size="sm">
                    Ver Detalles
                  </Button>
                </Link> */}
                {/* <Link to={``}>
                  <Button variant="secondary" size="sm">
                    Editar
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>

  
    </div>
  )
}

export default EventsPage