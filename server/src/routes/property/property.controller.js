import { BAD_REQUEST, NOT_FOUND, OK } from "../../constants/http.js";
import appError from "../../utils/errorHandler.js";
import prisma from "../../utils/prisma.js";

export const getPropertyById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const property = await prisma.property.findUnique({
      where: { id },
    });

    if (!property) {
      return new appError(`Property with ID ${id} not found`, NOT_FOUND);
    }

    res.status(OK).json(property);
  } catch (error) {
    next(error);
  }
};

export const getProperties = async (req, res, next) => {
  try {
    const { city, minPrice, maxPrice, bedrooms, bathroom } = req.query;

    const where = {};

    if (city) {
      where.address = {
        contains: city,
        mode: "insensitive",
      };
    }

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
      throw new appError(
        "No properties found with following data",
        BAD_REQUEST
      );
    }

    res.status(200).json({
      count: properties.length,
      data: properties,
    });
  } catch (error) {
    next(error);
  }
};

export const createReservation = async (req, res, next) => {
  try {
    const { propertyId, startDate, endDate, guests, nights, totalPrice } =
      req.body;

    const userId = req.user.id;

    if (new Date(startDate) >= new Date(endDate)) {
      throw new appError("End date must be after start date", 400);
    }

    const property = await prisma.property.findUnique({
      where: { id: propertyId },
    });

    if (!property) {
      throw new appError("Property not found", 404);
    }
    await prisma.reservation.create({
      data: {
        userId,
        propertyId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        guests,
        nights,
        totalPrice,
      },
      include: {
        property: true,
        user: {
          select: {
            id: true,
            nickName: true,
            profileImage: true,
            createdAt: true,
          },
        },
      },
    });

    res.status(201).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserReservations = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const myReservations = await prisma.reservation.findMany({
      where: { userId },
      include: {
        property: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(myReservations);
  } catch (error) {
    next(error);
  }
};
