import express from "express";
import { 
    createTour,
    deleteTour,
    getAllTour,
    getSingleTour,
    updateTour,
} from "./../controllers/tourController.js";


const router = express.Router();

//create a new tour
router.post("/", createTour);

//update  tour
router.put("/:id", updateTour);

//delete tour
router.delete("/:id",deleteTour);

//get single tour
router.get("/:id", getSingleTour);

//create a new tour
router.get("/:id", getAllTour);


export default router;