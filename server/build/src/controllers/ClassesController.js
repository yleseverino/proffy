"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cinnection_1 = __importDefault(require("../database/cinnection"));
const convertHourToMinutes_1 = __importDefault(require("../utils/convertHourToMinutes"));
class ClassesController {
    async index(request, response) {
        const filters = request.query;
        const subject = filters.subject;
        const week_day = filters.week_day;
        const time = filters.time;
        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: 'Missing filter to search classes'
            });
        }
        const timeinMinutes = convertHourToMinutes_1.default(time);
        const classes = await cinnection_1.default('classes')
            .whereExists(function () {
            this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id`')
                .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                .whereRaw('`class_schedule`.`from` <= ??', [timeinMinutes])
                .whereRaw('`class_schedule`.`to` > ??', [timeinMinutes]);
        })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);
        return response.json(classes);
    }
    async create(request, response) {
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;
        const trx = await cinnection_1.default.transaction();
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });
            const user_id = insertedUsersIds[0];
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });
            const class_id = insertedClassesIds[0];
            const classSchedule = schedule.map((scheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes_1.default(scheduleItem.from),
                    to: convertHourToMinutes_1.default(scheduleItem.to),
                };
            });
            await trx('class_schedule').insert(classSchedule);
            await trx.commit();
            return response.status(201).send();
        }
        catch (err) {
            console.log(err);
            trx.rollback();
            return response.status(400).json({
                error: 'Unespected error while creating new class'
            });
        }
    }
}
exports.default = ClassesController;
