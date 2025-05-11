import express from "express";
import { createReservation, filterProperties, getProperties, getPropertyById, getUserReservations } from "./property.controller.js";
import { protectRoute } from "../../middleware/protectRouteMiddleware.js";


const propertyRoutes = express.Router()

propertyRoutes.get("/", getProperties)
propertyRoutes.get('/filter', filterProperties);
propertyRoutes.post('/createReservation', protectRoute, createReservation)
propertyRoutes.get('/myReservations', protectRoute, getUserReservations)
propertyRoutes.get('/:id', getPropertyById);



export default propertyRoutes