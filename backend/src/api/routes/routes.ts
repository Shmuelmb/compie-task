import express from "express"
import * as controllers from "@/controllers"
import { onHealth } from "@/constants/internal-routes"

const router = express.Router()

/**
 * Get Internal Routes
 */
router.get(onHealth, controllers.getHealthCheck)

// /**
//  * Posts Internal Routes
//  */

export default router
