import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { User } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validattionSchema } from "./ChangeNameFrom.form";
import styles from "./ChangeNameFrom.module.scss";

const userCtrl = new User();

export function ChangeNameFrom() {

    const { user } = useAuth();
    const formik = useFormik({
        initialValues: initialValues(user.firstname, user.lastname),
        validationSchema: validattionSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await userCtrl.updateMe(user.id, formValue);
            } catch (error) {
                console.error(error);
            }
        }
    });
    return (
    <Form onSubmit={formik.handleSubmit}>
        <label>Nombre y apellidos</label>

        <div className={styles.content}>
            <Form.Input name="firstname" 
                placeholder="Nombre"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                error={formik.errors.firstname}
            />
             <Form.Input name="lastname" 
                placeholder="Apellidos"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={formik.errors.lastname}
            />
            <Form.Button type="submit" loading={formik.isSubmitting}>
                Enviar
            </Form.Button>
        </div>
    </Form>
    );
}