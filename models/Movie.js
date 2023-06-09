import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    title:{
        type: String,
        require: [true, "El título es obligatorio"],
        trim: true
    },
    plot: {
        type: String,
        require: [true, "El plot es obligatorio"],
        trim: true
    }
})

// Exportar el modelo
// Si el schema no existe, lo crea. En caso de existir, utiliza el que ya existe
export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema)