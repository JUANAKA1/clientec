import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.form";

export function LoginForm() {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                console.log("fomulario enviado...");
                console.log(formValue);
            } catch (error) {
                console.error(error);
            }
        },
    });
  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Input 
            name='identifier' 
            type="text" 
            placeholder='Correo electronico o nombre de usuario'
            value={formik.values.identifier}
            onChange={formik.handleChange}
            error={formik.errors.identifier}
        />
        <Form.Input 
            name='password'  
            placeholder='Contraseña' 
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
        />
        <Form.Button type='submit' fluid loading={formik.isSubmitting}>
            Ingresar
        </Form.Button>
      
    </Form>
  );
}
