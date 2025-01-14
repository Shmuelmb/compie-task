import express from "express"
import * as controllers from "@/controllers"
import { onHealth, onUsers } from "@/constants/internal-routes"

const router = express.Router()

/**
 * Get Internal Routes
 */
router.get(onHealth, controllers.getHealthCheck)
router.get(onUsers, controllers.getUsers)

// /**
//  * Posts Internal Routes
//  */

export default router
