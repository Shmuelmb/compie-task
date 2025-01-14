import express from "express"
import * as controllers from "@/controllers"
import { onHealth, onTrips, onSearchTrips } from "@/constants/internal-routes"

const router = express.Router()

/**
 * Get Internal Routes
 */
router.get(onHealth, controllers.getHealthCheck)
router.get(onTrips, controllers.getTrips)
router.get(onSearchTrips, controllers.searchTrips)

// /**
//  * Posts Internal Routes
//  */

export default router
