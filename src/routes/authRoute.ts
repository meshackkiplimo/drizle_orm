import { Express } from "express"
import { creatUserController, loginUserController, verifyEmailController } from "../controller/authController"

export const user = (app: Express) => {
    app.route("/auth/register").post(
        async (req, res, next) => {
            try {
                await creatUserController(req, res)
            } catch (error) {
                next(error)
            }
        }
    )

    app.route("/auth/login").post(
        async (req, res, next) => {
            try {
                await loginUserController(req, res)
            } catch (error) {
                next(error)
            }
        }
    )

    app.route("/auth/verify-email").post(
        async (req, res, next) => {
            try {
                await verifyEmailController(req, res)
            } catch (error) {
                next(error)
            }
        }
    )
}