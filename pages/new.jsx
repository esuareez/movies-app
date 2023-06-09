import Link from "next/link"
import { useState } from "react"


function New() {

    // Para manejar los estados:
    const [form, setForm] = useState({
        title: '',
        plot: ''
    })

    // Para hacer los cambios en el formulario:
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postData(form)
    }

    const postData = async (form) => {
        try {
            const res = await fetch('/api/movie', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Se indica que se va a enviar un JSON
                },
                body: JSON.stringify(form) // Se pasa el formulario parseado a JSON
            })

            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="container mx-auto">
        <h1 className="font-bold font-['Cambria']">Agregar movie</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            className="form-control my-2"
            placeholder="Title"
            name="title"
            autoComplete="off"
            onChange={handleChange}
            value={form.title} />
             <input 
            type="text"
            className="form-control my-2"
            placeholder="Plot"
            name="plot"
            autoComplete="off"
            onChange={handleChange}
            value={form.plot} />
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit">Enviar</button>
            <Link href="/" 
            className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded">Volver </Link>
        </form>
    </div>
  )
}

export default New