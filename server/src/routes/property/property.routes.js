import express from "express";
import { protectRoute } from "../../middleware/protectRouteMiddleware.js";
import { createReservation, getProperties, getPropertyById, getUserReservations } from "./property.controller.js";


const propertyRoutes = express.Router()

propertyRoutes.get("/", getProperties)
propertyRoutes.post('/createReservation', protectRoute, createReservation)
propertyRoutes.get('/myReservations', protectRoute, getUserReservations)
propertyRoutes.get('/:id', getPropertyById);



export default propertyRoutes