import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "El título es obligatorio"],
    },
    plot: {
        type: String,
        required: [true, "El plot es obligatorio"],
    }
})

// Exportar el modelo
// Si el schema no existe, lo crea. En caso de existir, utiliza el que ya existe
export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema)