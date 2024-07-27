import {modelo} from '../models/user.model.js'

export const test = () => {
    console.log("Llamando la funsion desde el controlador")
}
modelo.create({
    name: "Josue"
})
