import Branch from "../models/Branch";
import { Request, Response } from "express";

export const branches = async (req: Request, res: Response) => {
  const branchLocations = await Branch.findOne({ubication: req.body.ubication})
  if (!req.body.ubication) {
    return res.status(400).json({ msg: "esa localidad no existe" });
  } 
  res.status(200).send(branchLocations);
};

export const pickedBranch = async (req: Request, res: Response) => {
    const id = req.params.id;
    const branches = await Branch.findById(id)
     
  
    res.status(200).send(branches);
  };

export const createdBranch = async (req: Request, res: Response) => {
    const { ubication, coordinates } = req.body;
  
    const newBranch = new Branch({
      ubication,
      coordinates
    });
    try {
      const savedBranch = await newBranch.save();
      res.send(savedBranch);
    } catch (error) {
      res.status(401).send("No se pudo crear una sucursal");
    }
  };

