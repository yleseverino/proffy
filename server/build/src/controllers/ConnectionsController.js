"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cinnection_1 = __importDefault(require("../database/cinnection"));
class ConnectionsController {
    async index(request, response) {
        const totalConnections = await cinnection_1.default('connections').count('* as total');
        const { total } = totalConnections[0];
        return response.json({ total });
    }
    async create(request, response) {
        const { user_id } = request.body;
        await cinnection_1.default('connections').insert({
            user_id,
        });
        return response.status(201).send();
    }
}
exports.default = ConnectionsController;
