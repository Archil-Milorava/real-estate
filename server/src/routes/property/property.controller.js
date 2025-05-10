import { BAD_REQUEST, NOT_FOUND, OK } from "../../constants/http.js";
import appError from "../../utils/errorHandler.js";
import prisma from "../../utils/prisma.js";

export const getProperties = async (req, res, next) => {
  try {
    const properties = await prisma.property.findMany();

    if (properties.length === 0) {
      return new appError("No properties found", NOT_FOUND);
    }

    res.status(OK).json({
      properties,
    });
  } catch (error) {
    next(error);
  }
};

export const getPropertyById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const property = await prisma.property.findUnique({
      where: { id },
    });

    if (!property) {
      return new appError(`Property with ID ${id} not found`, NOT_FOUND);
    }

    res.status(OK).json({
      property,
    });
  } catch (error) {
    next(error);
  }
};

export const getPropertiesByCity = async (req, res, next) => {
  try {
    const { city } = req.query;

    if (!city || typeof city !== "string") {
      return new appError("City parameter is required", BAD_REQUEST);
    }

    const properties = await prisma.property.findMany({
      where: {
        address: {
          contains: city,
          mode: "insensitive",
        },
      },
    });

    res.status(OK).json({
      properties,
    });
  } catch (error) {
    next(error);
  }
};

export const filterProperties = async (req, res, next) => {
  try {
    const { minPrice, maxPrice, bedrooms, bathroom } = req.query;

    const where = {};

    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = Number(minPrice);
      if (maxPrice) where.price.lte = Number(maxPrice);
    }

    if (bedrooms) {
      const bedroomCount = Math.min(Number(bedrooms), 4);
      where.bedrooms = bedroomCount;
    }

    if (bathroom) {
      where.bathroom = Number(bathroom);
    }

    const properties = await prisma.property.findMany({
      where,
    });

    if (properties.length === 0) {
       throw new appError("No properties found", BAD_REQUEST);
    }

    res.status(200).json({
      count: properties.length,
      data: properties,
    });
  } catch (error) {
    next(error);
  }
};
