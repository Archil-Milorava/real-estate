import express from "express"
import {  filterProperties, getProperties, getPropertiesByCity, getPropertyById } from "./property.controller.js";


const propertyRoutes = express.Router()

propertyRoutes.get("/", getProperties)
propertyRoutes.get('/search', getPropertiesByCity);
propertyRoutes.get('/filter', filterProperties);
propertyRoutes.get('/:id', getPropertyById);



export default propertyRoutes