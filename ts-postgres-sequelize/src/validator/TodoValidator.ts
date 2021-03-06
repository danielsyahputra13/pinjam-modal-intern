import { body, param } from "express-validator";
    
class TodoValidator {
    checkCreateTodo() {
        return [
            body('judul').notEmpty().withMessage("judul tidak boleh kosong!"),
            body('judul').isString().withMessage("judul harus dalam string"),
            body('deskripsi').notEmpty().isString().withMessage("deskripsi tidak boleh kosong!"),
            body('selesai').optional().isBoolean().withMessage("Nilai haruslah boolean")
        ]
    }

    checkFindAndDeleteTodo() {
        return [
            param("id").isInt().withMessage("Parameter id haruslah bilangan!")
        ]
    }
}

export default new TodoValidator();