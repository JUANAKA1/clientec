import * as Yup from 'yup';

export function initialValues(firstname, lastname) {
  return {
    firstname,
    lastname,
  };
}

export function validattionSchema() {
    return Yup.object().shape({
      firstname: Yup.string().required(true),
      lastname: Yup.string().required(true),
    });
}